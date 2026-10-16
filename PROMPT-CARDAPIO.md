# Projeto: Cardápio digital com fotos — Chico Brasa & Grill

Você vai construir o cardápio digital do restaurante **Chico Brasa & Grill** (churrasco na parrilla, Jardim Botânico, Brasília-DF). O cliente abre o cardápio pelo celular, na mesa, via QR code. O objetivo é substituir o cardápio atual (só texto) por um cardápio no estilo iFood: organizado, com fotos e fácil de navegar. Esta primeira versão é uma **demonstração para o dono**, então precisa impressionar no celular logo na primeira tela.

Se a skill `taste-skill` ou `frontend-design` estiver disponível, use-a no refinamento visual.

---

## 1. Arquivo de entrada

Na raiz do projeto está `cardapio-chico-brasa.json`. Ele contém **tudo**: dados do restaurante, links, identidade visual, 3 grupos, 19 categorias e 124 itens com preços, variações e selos.

- Converta esse JSON para `dados/cardapio.js` no formato `window.CARDAPIO = { ... }`. Esse passa a ser o único arquivo de dados do site (assim o site também abre com duplo clique, sem servidor). Mova o JSON original para `referencia/`.
- **Não altere** nomes, descrições, preços nem a ordem dos itens. O texto já foi revisado e os erros de digitação foram corrigidos. Ignore o campo `nome_original`.
- O campo `revisar_com_o_cliente` **não aparece na página**. Copie-o para o README, na seção "Pendências com o cliente".
- Acrescente suporte a dois campos opcionais por item, para a manutenção futura: `oculto: true` (o item não aparece) e `esgotado: true` (selo "Esgotado hoje" e botão de adicionar desativado). Nenhum item vem com esses campos agora.
- Se algo no JSON contradisser este prompt, pergunte antes de decidir.

## 2. Stack e restrições

- HTML + CSS + JavaScript puro. **Sem frameworks** (nada de React ou Next), sem build obrigatório, sem backend e sem serviços pagos.
- Única dependência externa na página: Google Fonts. Ícones em SVG inline (sem emoji como ícone e sem CDN de ícones).
- **Nunca** use imagens da internet (Unsplash e afins). Todas as fotos são locais, e onde ainda não houver foto entra um placeholder.
- Todos os caminhos devem ser **relativos** (sem `/` no início), porque o site vai rodar dentro de `/cardapio/` no domínio do cliente e também na Vercel ou Netlify.
- O texto da interface é em português do Brasil. Preços formatados com `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.

## 3. Estrutura de pastas

```
index.html
css/styles.css
js/app.js
dados/cardapio.js          ← window.CARDAPIO (fonte única dos dados)
dados/fotos.js             ← window.FOTOS (gerado pelo script, lista as fotos que existem)
img/logo.png               ← fornecido depois (fallback em texto)
img/capa.webp              ← opcional (fallback em gradiente)
img/categorias/<id-da-categoria>.webp   (400×400)
img/pratos/<id-do-item>.webp            (1200×1200)
img/pratos/thumb/<id-do-item>.webp      (240×240)
fotos-originais/            ← onde eu solto as fotos geradas por IA (png/jpg), com o nome = id
fotos-originais/categorias/
scripts/otimizar-fotos.mjs
package.json                ← script "fotos": "node scripts/otimizar-fotos.mjs" (usa sharp)
referencia/cardapio-chico-brasa.json
LISTA-DE-FOTOS.md
README.md
```

## 4. Identidade visual (manter a atual do restaurante)

Use os valores de `identidade_visual_atual` do JSON:

- Fundo `#0B0A09` (tema escuro único, sem modo claro); laranja brasa `#E4551F` para ações principais; dourado `#E8B33C` para chamadas e preços; texto creme `#F6F1E7`; texto secundário `#9C8F7C`.
- Fontes: **Anton** (títulos e nomes de itens, em caixa alta), **Barlow Condensed** (texto) e **Alfa Slab One** (wordmark e destaques pontuais). Use `display=swap` e carregue só os pesos usados.
- Clima: brasa, fogo e madeira. Brilho radial laranja sutil no topo e textura leve. Nada de cara de template genérico.
- Contraste AA, descrições com no mínimo 16px e áreas de toque com no mínimo 44px.
- Mobile-first (360–430px). No desktop, coluna central com no máximo ~640px.

## 5. A página, de cima para baixo

### 5.1 Topo — "mini bio site"
- Capa: `img/capa.webp` escurecida; se não existir, um gradiente com brilho de brasa.
- Logo circular (`img/logo.png`) sobreposto à capa. Se não existir, wordmark "CHICO BRASA & GRILL" em Alfa Slab One.
- Nome, `slogan_curto` e o endereço resumido ("Jardim Botânico · Brasília").
- Botões, todos abrindo em nova aba (`rel="noopener"`), com os links de `restaurante.links`:
  - **Reservar pelo WhatsApp** — botão principal laranja, largura total;
  - **Como chegar**, **Avaliar no Google** e **Instagram** — 3 botões secundários lado a lado, com ícone e rótulo.
- O topo deve ser compacto: num celular de 390×844, as abas e a fileira de categorias precisam aparecer na primeira tela.

### 5.2 Abas fixas: Comidas | Bebidas | Vinhos
- Segmented control com `position: sticky` no topo da tela, que permanece visível o tempo todo. Ao lado, um ícone de busca.
- Cada aba mostra apenas as categorias do seu grupo (`grupo` no JSON: comidas, bebidas, vinhos). Trocar de aba volta ao início da lista.

### 5.3 Fileira de categorias com foto (estilo stories / círculos do iFood)
- Logo abaixo das abas, uma fileira horizontal que desliza para o lado, com as categorias da aba ativa: foto circular (`img/categorias/<id>.webp`) com anel em gradiente laranja/dourado e o nome embaixo.
- Tocar numa categoria rola suavemente até a seção dela (use `scroll-margin-top` para compensar o cabeçalho fixo).
- Sem foto, o círculo mostra um placeholder (fundo escuro com ícone de brasa/grelha em SVG).

### 5.4 Barra fixa de categorias
- Quando a fileira de stories sai da tela (IntersectionObserver), aparece colada abaixo das abas uma barra de "chips" com os nomes das categorias da aba ativa, rolável na horizontal.
- O chip da categoria visível fica ativo (scroll-spy) e é rolado automaticamente para dentro da barra.
- Abas + chips juntos devem ocupar no máximo ~100px de altura.

### 5.5 Busca
- O ícone abre um campo de busca. A busca filtra **todas** as abas pelo nome, pela descrição e pela categoria, ignorando acentos e maiúsculas ("file" encontra "Filé").
- Os resultados aparecem agrupados por categoria. Sem resultados: "Não encontramos esse item. Consulte o garçom." Fechar ou limpar a busca volta à aba ativa.

### 5.6 Destaques da casa (somente na aba Comidas)
- Entre a fileira de stories e a primeira categoria: um carrossel horizontal com cards maiores (foto quadrada, nome, preço) para os itens com `destaque_sugerido: true`.
- O rótulo é **"Destaques da casa"**. Não use "mais pedidos": isso ainda não foi confirmado pelo dono.

### 5.7 Seções e itens (estilo iFood)
- Cabeçalho de cada categoria: `chamada` (pequena, dourada, caixa alta), `nome` (Anton, grande) e, se houver, `descricao` e `disponibilidade` em texto menor.
- Cada item é uma linha **inteiramente clicável** (`<button>` ou link), sem botão "ver prato":
  - à esquerda: nome (Anton), descrição com corte em 2 linhas (cor secundária), preço (dourado) e selos;
  - à direita: miniatura quadrada de ~88px com cantos arredondados (`img/pratos/thumb/<id>.webp`), `loading="lazy"`, `decoding="async"`, `width`/`height` definidos e `alt` com o nome do prato.
- Preço: um preço → "R$ 49,90". Vários preços → "a partir de R$ 18,90" e, abaixo, as variações em miniatura ("P · G", "300ml · 500ml · 1 litro", "Simples · Completo").
- Selos: "Serve N" (`serve_pessoas`), disponibilidade do item (ex.: "Sexta a domingo"), país (`origem`, nos vinhos), "Esgotado hoje".
- Itens sem descrição não deixam espaço vazio. Nomes longos quebram linha sem empurrar a miniatura.
- Os dois "Combo Família" se diferenciam pelo selo "Serve 2" / "Serve 4".

### 5.8 Painel do prato (abre ao tocar no item)
- No celular, um bottom sheet que sobe da parte de baixo (altura máxima ~92vh, rolagem interna, alça de arraste). No desktop, um modal central com no máximo 560px.
- Conteúdo: foto grande quadrada (`img/pratos/<id>.webp`, altura máxima ~50vh), nome, selos, descrição completa, a lista de todos os preços e variações, disponibilidade e origem.
- Fecha pelo X, por toque no fundo, arrastando para baixo, pela tecla Esc **e pelo botão voltar do celular** (abrir faz `history.pushState` com `#<id>`, e o `popstate` fecha). Abrir a página com `#<id>` na URL já abre o painel daquele item.
- Setas e deslizar para o lado na foto levam ao item anterior ou ao próximo da mesma categoria.
- Trava a rolagem do fundo, prende o foco dentro do painel e devolve o foco ao fechar. Use `role="dialog"` e `aria-modal="true"`.
- Rodapé do painel: seletor de quantidade, seletor de variação (obrigatório quando há mais de um preço), campo curto opcional de observação ("ponto da carne, sem cebola…") e o botão **"Adicionar à lista"**.
- Caso especial: o item "Adicionais" (dos hambúrgueres) lista cada adicional com o seu preço como checkbox, e cada marcado entra na lista como uma linha separada.

### 5.9 Lista do pedido (sem envio — o cliente mostra ao garçom)
- Com pelo menos 1 item na lista, aparece um botão flutuante fixo embaixo: "Minha lista · 3 itens · R$ 129,70". Adicione um espaçamento no fim da página para ele não cobrir conteúdo.
- O painel da lista mostra: os itens com variação e observação, botões +/− e remover, subtotal, a linha "Taxa de serviço (10%, opcional)" e o total estimado.
- Aviso bem visível: **"Esta lista não envia o pedido. Mostre-a ao garçom."** Logo abaixo: "Valores estimados. Couvert artístico não incluído."
- Botão **"Mostrar ao garçom"**: tela cheia em alto contraste (fundo creme, texto escuro), fonte grande, no formato "2× Chopp Dom Chico (500ml)" com as observações embaixo, legível de longe.
- Botão "Limpar lista" com confirmação dentro da própria página (nunca `alert`/`confirm`).
- Salve em `localStorage` dentro de `try/catch`. Se o armazenamento estiver bloqueado, a lista funciona só em memória, sem quebrar nada.

### 5.10 Rodapé
- "Informações" (lista de `informacoes` do JSON), endereço, reservas e os mesmos links do topo.
- "Imagens meramente ilustrativas.", controlado por `window.CONFIG.fotosIlustrativas` (padrão `true`).
- Crédito opcional `window.CONFIG.credito = { texto: '', link: '' }`, que fica oculto quando vazio.
- Assinatura: "CHICO BRASA & GRILL · BRASA DE VERDADE".

## 6. Fotos — espaços reservados e fluxo

Eu vou gerar as fotos com IA depois. Agora você só prepara os espaços e o fluxo.

- Regra de exibição, pelo `foto_prioridade` de cada item:
  - `"sim"` → sempre mostra a miniatura. Sem foto, mostra um placeholder elegante (fundo escuro, ícone de brasa em dourado com baixa opacidade). No painel, o placeholder vem com o texto "Foto em breve".
  - `"opcional"` → mostra a miniatura **somente se a foto existir**; se não existir, a linha fica só com texto.
  - `"nao"` ou `foto: null` → só texto.
- Para saber quais fotos existem sem gerar erros 404, use `window.FOTOS` (em `dados/fotos.js`). Mantenha um `onerror` de segurança que troca a imagem pelo placeholder.
- `scripts/otimizar-fotos.mjs` (com sharp):
  1. lê `fotos-originais/<id>.(png|jpg|jpeg|webp)` e `fotos-originais/categorias/<id>.*`;
  2. faz o recorte quadrado centralizado;
  3. gera os arquivos WebP (qualidade ~75) nos tamanhos da seção 3;
  4. reescreve `dados/fotos.js`;
  5. avisa no terminal quais arquivos têm nome que não corresponde a nenhum id e quais itens com prioridade "sim" ainda estão sem foto.
  Crie o `dados/fotos.js` inicial vazio.
- `LISTA-DE-FOTOS.md`: checklist com caixas de marcação, primeiro os destaques, depois por categoria (só itens com prioridade "sim" e "opcional", mais as 19 categorias). Cada linha traz o nome exato do arquivo e um prompt pronto para gerar a imagem no ChatGPT ou no Gemini, todos no **mesmo estilo**, para o cardápio ficar uniforme:
  > Fotografia profissional de gastronomia, ultrarrealista, de [prato]: [descrição curta]. Servido em [louça adequada: prato de cerâmica escura / tábua de madeira para combos e espetos / copo adequado para bebidas] sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

  Adapte a louça e o copo a cada item (ex.: chopp em tulipa, caipirinha em copo baixo, feijoada em cumbuca de barro).

## 7. Performance, acessibilidade e SEO

- Sem fotos, a página deve pesar menos de ~300KB. Use `preconnect` para o Google Fonts e só miniaturas na lista (a foto grande carrega apenas no painel). Renderize só a aba ativa. Meta: Lighthouse mobile ≥ 90 em performance e acessibilidade.
- `prefers-reduced-motion` desliga as animações. Foco visível. HTML semântico.
- `lang="pt-BR"`, `<title>` "Cardápio | Chico Brasa & Grill — Jardim Botânico, Brasília", meta description, Open Graph (com `img/og.jpg` opcional, para a prévia no WhatsApp), `theme-color #0B0A09`, favicon SVG com as iniciais e JSON-LD `Restaurant` (nome, endereço, telefone, culinária, link do Instagram em `sameAs`).

## 8. README.md (para mim, que estou aprendendo)

Em linguagem simples:
- como abrir o site no computador e no celular da mesma rede;
- como mudar um preço ou um nome em `dados/cardapio.js` (com exemplo);
- como ocultar um item ou marcá-lo como esgotado;
- como adicionar fotos (nomes dos arquivos → `npm install` uma vez → `npm run fotos`);
- como publicar a demo na Vercel ou na Netlify (passo a passo resumido) e o que é preciso para colocar no lugar do `/cardapio/` atual do cliente;
- "Pendências com o cliente".

## 9. Fora do escopo (não faça)

Backend, banco de dados, painel administrativo, envio do pedido para a cozinha, pagamento, login, outros idiomas, frameworks, imagens da internet e publicação ou deploy sem eu pedir.

## 10. Verificação antes de me entregar

1. Sirva o projeto localmente (ex.: `npx serve` ou `python3 -m http.server`) e teste em 390×844 e em 1280×800. Se o Playwright estiver disponível, tire screenshots de: topo, lista, painel do prato, lista do pedido e modo garçom. Analise os screenshots e corrija o que estiver feio ou quebrado.
2. Confira:
   - 19 categorias e 124 itens renderizados (somando as 3 abas);
   - os preços batem com o JSON (amostra com itens de preço único e com variações);
   - a busca por "parmegiana" encontra 4 itens;
   - a lista calcula certo: 2× Batata Tradicional G (R$ 29,90) + 1× Chopp Dom Chico 500ml (R$ 20,90) = subtotal R$ 80,70, 10% = R$ 8,07, total R$ 88,77;
   - o voltar do navegador e o Esc fecham o painel;
   - com o `localStorage` bloqueado, nada quebra;
   - não há erros no console.
3. No final, me diga em poucas linhas: o que foi feito, como abrir, o que ficou pendente e quais decisões você tomou por conta própria.
