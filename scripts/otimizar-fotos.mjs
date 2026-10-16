/*
 * Otimiza as fotos do cardápio e atualiza dados/fotos.js
 * ------------------------------------------------------------------
 * Uso:   npm run fotos            (só processa fotos novas ou alteradas)
 *        npm run fotos:forcar     (refaz todas)
 *
 * Onde colocar as fotos originais (png, jpg, jpeg ou webp):
 *   fotos-originais/<id-do-item>.png         -> foto do prato
 *   fotos-originais/categorias/<id>.png      -> foto redonda da categoria
 *   fotos-originais/capa.jpg                 -> capa do topo (opcional)
 *   fotos-originais/logo.webp                -> logo do topo (png ou webp com fundo
 *                                               transparente; mantém a proporção)
 *
 * O que o script gera:
 *   img/pratos/<id>.webp          1200×1200 (painel do prato)
 *   img/pratos/thumb/<id>.webp    240×240   (lista)
 *   img/categorias/<id>.webp      400×400
 *   img/capa.webp                 1600×600
 *   img/logo.webp                 até 600px, na proporção original
 *   dados/fotos.js                lista das fotos que existem
 */
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('\n[erro] A biblioteca "sharp" não está instalada.');
  console.error('       Rode uma vez:  npm install   e depois  npm run fotos\n');
  process.exit(1);
}

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGINAIS = path.join(RAIZ, 'fotos-originais');
const ORIGINAIS_CAT = path.join(ORIGINAIS, 'categorias');
const IMG = path.join(RAIZ, 'img');
const DEST_PRATOS = path.join(IMG, 'pratos');
const DEST_THUMB = path.join(DEST_PRATOS, 'thumb');
const DEST_CAT = path.join(IMG, 'categorias');
const ARQ_FOTOS = path.join(RAIZ, 'dados', 'fotos.js');

const EXTENSOES = new Set(['.png', '.jpg', '.jpeg', '.webp']);
const IGNORAR = new Set(['.ds_store', 'thumbs.db', 'desktop.ini', '.gitkeep', 'leia-me.txt']);
const QUALIDADE = 75;
const FORCAR = process.argv.includes('--forcar');

// ------------------------------------------------------------------
// 1. Lê o cardápio (dados/cardapio.js)
// ------------------------------------------------------------------
let dados;
try {
  const codigo = await fs.readFile(path.join(RAIZ, 'dados', 'cardapio.js'), 'utf8');
  const contexto = { window: {} };
  vm.runInNewContext(codigo, contexto, { filename: 'dados/cardapio.js' });
  dados = contexto.window.CARDAPIO;
  if (!dados || !Array.isArray(dados.categorias)) throw new Error('window.CARDAPIO não encontrado');
} catch (erro) {
  console.error('\n[erro] Não consegui ler dados/cardapio.js: ' + erro.message);
  console.error('       Confira vírgulas e aspas perto da linha indicada acima.\n');
  process.exit(1);
}

const itens = dados.categorias.flatMap((c) => (c.itens || []).map((i) => ({ ...i, categoria: c.nome })));
const ITENS = new Map(itens.map((i) => [i.id, i]));
const CATEGORIAS = new Map(dados.categorias.map((c) => [c.id, c]));

// ------------------------------------------------------------------
// Utilitários
// ------------------------------------------------------------------
async function listarArquivos(pasta) {
  try {
    const entradas = await fs.readdir(pasta, { withFileTypes: true });
    return entradas.filter((e) => e.isFile()).map((e) => e.name);
  } catch {
    return [];
  }
}

async function precisaGerar(origem, destino) {
  if (FORCAR || !existsSync(destino)) return true;
  const [o, d] = await Promise.all([fs.stat(origem), fs.stat(destino)]);
  return o.mtimeMs > d.mtimeMs;
}

// Recorte centralizado no formato pedido + WebP
async function gerarWebp(origem, destino, largura, altura, qualidade = QUALIDADE) {
  await sharp(origem)
    .rotate() // respeita a orientação da câmera (EXIF)
    .resize(largura, altura, { fit: 'cover', position: 'centre' })
    .webp({ quality: qualidade })
    .toFile(destino);
}

// Distância entre palavras, para sugerir o id certo quando o nome do arquivo tiver erro
function distancia(a, b) {
  const m = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) m[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
  }
  return m[a.length][b.length];
}
function sugestao(nome, ids) {
  let melhor = null;
  let menor = Infinity;
  for (const id of ids) {
    const d = distancia(nome, id);
    if (d < menor) { menor = d; melhor = id; }
  }
  return menor <= Math.max(3, Math.round(nome.length * 0.3)) ? melhor : null;
}

// Agrupa os originais por id (nome do arquivo sem extensão, em minúsculas)
async function lerOriginais(pasta) {
  const porId = new Map();
  const formatoInvalido = [];
  for (const nome of await listarArquivos(pasta)) {
    if (IGNORAR.has(nome.toLowerCase()) || nome.startsWith('.')) continue;
    const ext = path.extname(nome).toLowerCase();
    if (!EXTENSOES.has(ext)) { formatoInvalido.push(nome); continue; }
    const id = path.basename(nome, path.extname(nome)).trim().toLowerCase();
    const caminho = path.join(pasta, nome);
    const atual = porId.get(id);
    if (!atual) porId.set(id, { id, nome, caminho, duplicados: [] });
    else atual.duplicados.push(nome);
  }
  return { porId, formatoInvalido };
}

async function avisoTamanho(caminho, minimo, nome, avisos) {
  try {
    const meta = await sharp(caminho).metadata();
    if (Math.min(meta.width || 0, meta.height || 0) < minimo) {
      avisos.push(`${nome}: foto pequena (${meta.width}×${meta.height}). O ideal é pelo menos ${minimo}×${minimo}.`);
    }
  } catch {
    avisos.push(`${nome}: não consegui ler a imagem (arquivo corrompido?).`);
  }
}

// ------------------------------------------------------------------
// 2. Processa as fotos
// ------------------------------------------------------------------
await Promise.all([DEST_PRATOS, DEST_THUMB, DEST_CAT, ORIGINAIS_CAT].map((p) => fs.mkdir(p, { recursive: true })));

const geradas = [];
const semCorrespondencia = [];
const avisos = [];
const erros = [];

const pratos = await lerOriginais(ORIGINAIS);
const cats = await lerOriginais(ORIGINAIS_CAT);

for (const n of pratos.formatoInvalido) avisos.push(`fotos-originais/${n}: formato não suportado (use png, jpg ou webp).`);
for (const n of cats.formatoInvalido) avisos.push(`fotos-originais/categorias/${n}: formato não suportado (use png, jpg ou webp).`);

// Pratos (+ capa e logo, que ficam na mesma pasta)
for (const orig of pratos.porId.values()) {
  if (orig.duplicados.length) avisos.push(`"${orig.id}" tem mais de um arquivo (${[orig.nome, ...orig.duplicados].join(', ')}). Usei ${orig.nome}.`);
  try {
    if (orig.id === 'capa') {
      const destino = path.join(IMG, 'capa.webp');
      if (await precisaGerar(orig.caminho, destino)) {
        await gerarWebp(orig.caminho, destino, 1600, 600, 70);
        geradas.push('img/capa.webp');
      }
      continue;
    }
    if (orig.id === 'logo') {
      const destino = path.join(IMG, 'logo.webp');
      if (await precisaGerar(orig.caminho, destino)) {
        // Mantém a proporção e a transparência; só corta as bordas vazias
        const info = await sharp(orig.caminho).rotate().trim()
          .resize(600, 600, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 70, alphaQuality: 70, effort: 6 }) // ~60KB: aparece na primeira tela
          .toFile(destino);
        geradas.push(`img/logo.webp (${info.width}×${info.height} — confira width/height do logo no index.html)`);
      }
      continue;
    }
    if (!ITENS.has(orig.id)) {
      const s = sugestao(orig.id, ITENS.keys());
      semCorrespondencia.push(`fotos-originais/${orig.nome}` + (s ? `  -> você quis dizer "${s}"?` : ''));
      continue;
    }
    const grande = path.join(DEST_PRATOS, orig.id + '.webp');
    const mini = path.join(DEST_THUMB, orig.id + '.webp');
    if (await precisaGerar(orig.caminho, grande) || await precisaGerar(orig.caminho, mini)) {
      await avisoTamanho(orig.caminho, 1200, `fotos-originais/${orig.nome}`, avisos);
      await gerarWebp(orig.caminho, grande, 1200, 1200);
      await gerarWebp(orig.caminho, mini, 240, 240);
      geradas.push(`img/pratos/${orig.id}.webp (+ miniatura)`);
    }
  } catch (erro) {
    erros.push(`fotos-originais/${orig.nome}: ${erro.message}`);
  }
}

// Categorias
for (const orig of cats.porId.values()) {
  if (orig.duplicados.length) avisos.push(`categoria "${orig.id}" tem mais de um arquivo (${[orig.nome, ...orig.duplicados].join(', ')}). Usei ${orig.nome}.`);
  if (!CATEGORIAS.has(orig.id)) {
    const s = sugestao(orig.id, CATEGORIAS.keys());
    semCorrespondencia.push(`fotos-originais/categorias/${orig.nome}` + (s ? `  -> você quis dizer "${s}"?` : ''));
    continue;
  }
  try {
    const destino = path.join(DEST_CAT, orig.id + '.webp');
    if (await precisaGerar(orig.caminho, destino)) {
      await avisoTamanho(orig.caminho, 400, `fotos-originais/categorias/${orig.nome}`, avisos);
      await gerarWebp(orig.caminho, destino, 400, 400);
      geradas.push(`img/categorias/${orig.id}.webp`);
    }
  } catch (erro) {
    erros.push(`fotos-originais/categorias/${orig.nome}: ${erro.message}`);
  }
}

// ------------------------------------------------------------------
// 3. Reescreve dados/fotos.js com o que existe de fato em img/
// ------------------------------------------------------------------
const webpsPratos = new Set((await listarArquivos(DEST_PRATOS)).filter((n) => n.endsWith('.webp')).map((n) => n.slice(0, -5)));
const webpsThumb = new Set((await listarArquivos(DEST_THUMB)).filter((n) => n.endsWith('.webp')).map((n) => n.slice(0, -5)));
const webpsCat = new Set((await listarArquivos(DEST_CAT)).filter((n) => n.endsWith('.webp')).map((n) => n.slice(0, -5)));

const fotosPratos = itens.map((i) => i.id).filter((id) => webpsPratos.has(id) && webpsThumb.has(id));
const fotosCats = dados.categorias.map((c) => c.id).filter((id) => webpsCat.has(id));
const temLogo = existsSync(path.join(IMG, 'logo.webp')); // o logo fica direto no index.html
const temCapa = existsSync(path.join(IMG, 'capa.webp'));

const conteudo = `/*
 * ARQUIVO GERADO AUTOMATICAMENTE por "npm run fotos" — não precisa editar à mão.
 * Lista quais fotos existem na pasta img/, para o site não pedir arquivos que não existem.
 */
window.FOTOS = ${JSON.stringify({ capa: temCapa, categorias: fotosCats, pratos: fotosPratos }, null, 2)};
`;
await fs.writeFile(ARQ_FOTOS, conteudo, 'utf8');

// ------------------------------------------------------------------
// 4. Relatório
// ------------------------------------------------------------------
const visiveis = itens.filter((i) => !i.oculto);
const simSemFoto = visiveis.filter((i) => i.foto_prioridade === 'sim' && i.foto && !fotosPratos.includes(i.id));
const opcionaisSemFoto = visiveis.filter((i) => i.foto_prioridade === 'opcional' && i.foto && !fotosPratos.includes(i.id));
const fotoQueNaoAparece = itens.filter((i) => fotosPratos.includes(i.id) && (i.foto_prioridade === 'nao' || !i.foto));
const catsSemFoto = dados.categorias.filter((c) => !fotosCats.includes(c.id));

const titulo = (t) => console.log('\n' + t + '\n' + '-'.repeat(t.length));

console.log('\nFOTOS DO CARDÁPIO — Chico Brasa & Grill');
console.log('========================================');
console.log(`Geradas agora: ${geradas.length}${FORCAR ? ' (modo --forcar)' : ''}`);
geradas.forEach((g) => console.log('  [ok] ' + g));

if (erros.length) { titulo('Erros'); erros.forEach((e) => console.log('  [erro] ' + e)); }

if (semCorrespondencia.length) {
  titulo('Arquivos com nome que não corresponde a nenhum id (foram ignorados)');
  semCorrespondencia.forEach((s) => console.log('  [?] ' + s));
}

if (avisos.length) { titulo('Avisos'); avisos.forEach((a) => console.log('  [aviso] ' + a)); }

if (fotoQueNaoAparece.length) {
  titulo('Itens com foto que NÃO aparece (foto_prioridade "nao" ou foto: null)');
  fotoQueNaoAparece.forEach((i) => console.log(`  [aviso] ${i.id}  (${i.nome}) — mude foto_prioridade para "opcional" ou "sim" em dados/cardapio.js`));
}

titulo(`Itens com prioridade "sim" ainda sem foto: ${simSemFoto.length}`);
if (simSemFoto.length) simSemFoto.forEach((i) => console.log(`  [ ] ${i.id}  (${i.categoria} — ${i.nome})`));
else console.log('  Todos os itens essenciais têm foto.');

titulo(`Categorias sem foto: ${catsSemFoto.length}`);
catsSemFoto.forEach((c) => console.log(`  [ ] categorias/${c.id}  (${c.nome})`));

console.log('\nResumo');
console.log('------');
const comEspacoDeFoto = visiveis.filter((i) => i.foto && i.foto_prioridade !== 'nao');
console.log(`  Pratos com foto:      ${comEspacoDeFoto.filter((i) => fotosPratos.includes(i.id)).length} de ${comEspacoDeFoto.length}`);
console.log(`  Opcionais sem foto:   ${opcionaisSemFoto.length} (aparecem só com texto, tudo bem)`);
console.log(`  Categorias com foto:  ${fotosCats.length} de ${dados.categorias.length}`);
console.log(`  Logo: ${temLogo ? 'sim' : 'não (o site mostra o nome em texto)'} · Capa: ${temCapa ? 'sim' : 'não (o site usa o gradiente de brasa)'}`);
console.log('  dados/fotos.js atualizado.\n');

if (erros.length) process.exitCode = 1;
