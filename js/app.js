/* ==========================================================================
   Cardápio digital — Chico Brasa & Grill
   JavaScript puro, sem dependências.
   Dados: dados/cardapio.js (window.CARDAPIO e window.CONFIG)
   Fotos existentes: dados/fotos.js (window.FOTOS, gerado por "npm run fotos")
   ========================================================================== */
(function () {
  'use strict';

  var DADOS = window.CARDAPIO;
  if (!DADOS || !Array.isArray(DADOS.categorias)) {
    var main = document.getElementById('cardapio');
    if (main) {
      main.innerHTML = '<div class="vazio"><p>Não foi possível carregar o cardápio. ' +
        'Verifique o arquivo <strong>dados/cardapio.js</strong> (uma vírgula ou aspas faltando costuma ser a causa).</p></div>';
    }
    return;
  }

  // ------------------------------------------------------------------------
  // Configuração e utilitários
  // ------------------------------------------------------------------------
  const FOTOS = window.FOTOS || {};
  const CONFIG = Object.assign({ fotosIlustrativas: true, credito: { texto: '', link: '' } }, window.CONFIG || {});
  const R = DADOS.restaurante || {};
  const LINKS = R.links || {};
  const ROTULO_ABA = { vinhos: 'Vinhos' };
  const GRUPO_DESTAQUES = 'comidas';
  const ID_ADICIONAIS = 'adicionais';
  const CHAVE_LISTA = 'chicobrasa:lista:v1';

  const $ = (sel, el) => (el || document).querySelector(sel);
  const $$ = (sel, el) => Array.from((el || document).querySelectorAll(sel));

  const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');
  const comportamento = () => (semMovimento.matches ? 'auto' : 'smooth');

  const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  const centavos = (v) => Math.round(Number(v) * 100);
  const reais = (c) => moeda.format(c / 100);

  const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ESCAPES[c]);

  // "Filé" -> "file": ignora acentos e maiúsculas
  const normalizar = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

  const urlBase = () => location.pathname + location.search;
  const plural = (n, um, varios) => n + ' ' + (n === 1 ? um : varios);

  // ------------------------------------------------------------------------
  // Ícones (SVG inline)
  // ------------------------------------------------------------------------
  const ICONES = {
    busca: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    fechar: '<path d="M18 6 6 18M6 6l12 12"/>',
    esq: '<path d="m15 18-6-6 6-6"/>',
    dir: '<path d="m9 18 6-6-6-6"/>',
    mais: '<path d="M12 5v14M5 12h14"/>',
    menos: '<path d="M5 12h14"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    relogio: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    pessoas: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.4-3.3 2.8-5.5 6-5.5s5.6 2.2 6 5.5"/><path d="M15.5 4.9a3.2 3.2 0 0 1 0 6.2"/><path d="M17.8 14.8c1.8.7 2.9 2.6 3.2 5.2"/>',
    globo: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.3 2.4 3.5 5.2 3.5 8.5s-1.2 6.1-3.5 8.5c-2.3-2.4-3.5-5.2-3.5-8.5s1.2-6.1 3.5-8.5z"/>',
    rota: '<path d="M3 11 21 3l-8 18-2-8z"/>',
    estrela: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>',
    whatsapp: '<path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4l-4.4 1.3 1.4-4.2a8.5 8.5 0 1 1 15.6-4.5z"/><path d="M9 8.2c.2-.3.7-.4.9 0l.9 1.8c.1.3.1.6-.1.8l-.6.7c.6 1.2 1.5 2.1 2.7 2.7l.7-.6c.2-.2.5-.2.8-.1l1.8.9c.4.2.3.7 0 .9l-.8.7c-.6.5-1.4.6-2.1.3-2.1-.9-3.8-2.6-4.7-4.7-.3-.7-.2-1.5.3-2.1z"/>',
    brasa: '<path d="M12 21.5c-3.9 0-7-2.8-7-6.6 0-2.6 1.4-4.4 2.9-6 .2 1.6 1 2.7 2.1 3.2C9.6 8.4 11.3 5 14.5 2.5c-.2 2.8.6 4.6 2 6.3 1.4 1.7 2.5 3.3 2.5 6 0 3.9-3.1 6.7-7 6.7z"/><path d="M12 21.5c-1.8 0-3.2-1.3-3.2-3.1 0-1.8 1.3-2.9 2.4-4.1.2 1 .8 1.6 1.6 1.8-.1-1.2.3-2.3 1.2-3.3.4 1.6 2.2 2.7 2.2 5 0 2.2-1.6 3.7-4.2 3.7z"/>',
    grelha: '<path d="M3.5 10h17"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M9 16.5 7 21.5M15 16.5l2 5M12 17v4.5"/><path d="M8.5 2.5c-.8 1 .8 2 0 3.2M12 2.5c-.8 1 .8 2 0 3.2M15.5 2.5c-.8 1 .8 2 0 3.2"/>',
    chopp: '<path d="M5 8h10v11.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 19.5z"/><path d="M15 10.5h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H15"/><path d="M8.5 12v5.5M11.5 12v5.5"/><path d="M4.6 8C4 6.1 5.5 4.4 7.4 4.8 8.1 3.3 10 2.8 11.3 3.8c1.5-.8 3.6.3 3.7 2 .9.3 1.3 1.2 1 2.2"/>',
    drink: '<path d="M4 4h16l-8 9z"/><path d="M12 13v8M8 21h8"/><path d="M7.2 7.5h9.6"/>',
    taca: '<path d="M7.5 3h9l-.4 5.2a4.1 4.1 0 0 1-8.2 0z"/><path d="M12 12.5V21M8.5 21h7"/><path d="M7.8 7h8.4"/>',
    copo: '<path d="M6 7h12l-1.4 13.1a1.5 1.5 0 0 1-1.5 1.4H8.9a1.5 1.5 0 0 1-1.5-1.4z"/><path d="M5 7h14"/><path d="m12 7 1.5-4.5h3"/>',
    lixeira: '<path d="M4 7h16M9.5 7V4.5h5V7M6.5 7l.9 12.6A1.5 1.5 0 0 0 8.9 21h6.2a1.5 1.5 0 0 0 1.5-1.4L17.5 7M10 11v6M14 11v6"/>',
    lista: '<path d="M6 2.5h12v19l-3-2-3 2-3-2-3 2z"/><path d="M9 7.5h6M9 11.5h6M9 15.5h3.5"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.2"/>',
    expandir: '<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'
  };
  const icone = (nome) => '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + ICONES[nome] + '</svg>';

  // Ícone do placeholder de cada categoria
  const ICONE_CATEGORIA = {
    combos: 'grelha', espetos: 'grelha',
    'nao-alcoolicos': 'copo', chopps: 'chopp', cervejas: 'chopp', drinks: 'drink'
  };
  const iconeDe = (cat) => ICONE_CATEGORIA[cat.id] || (cat.grupo === 'vinhos' ? 'taca' : cat.grupo === 'bebidas' ? 'copo' : 'brasa');

  // ------------------------------------------------------------------------
  // Dados preparados (itens com "oculto": true ficam de fora de tudo)
  // ------------------------------------------------------------------------
  const GRUPOS = (DADOS.grupos || []).filter((g) => DADOS.categorias.some((c) => c.grupo === g.id));
  const CATEGORIAS = DADOS.categorias
    .map((c) => Object.assign({}, c, { itens: (c.itens || []).filter((i) => i && !i.oculto) }))
    .filter((c) => c.itens.length > 0);

  const ITENS = new Map(); // id -> { item, cat, pos }
  CATEGORIAS.forEach((cat) => cat.itens.forEach((item, pos) => ITENS.set(item.id, { item, cat, pos })));

  const FOTOS_PRATOS = new Set(FOTOS.pratos || []);
  const FOTOS_CATS = new Set(FOTOS.categorias || []);

  const INDICE_BUSCA = [];
  CATEGORIAS.forEach((cat) => cat.itens.forEach((item) => {
    INDICE_BUSCA.push({ item, cat, texto: normalizar([item.nome, item.descricao, cat.nome].join(' ')) });
  }));

  const ehAdicionais = (item) => item.id === ID_ADICIONAIS;
  const precosDe = (item) => (Array.isArray(item.precos) ? item.precos : []);

  // ------------------------------------------------------------------------
  // Fotos: regra de exibição pelo foto_prioridade
  //   "sim"      -> sempre mostra (placeholder se ainda não houver foto)
  //   "opcional" -> só mostra se a foto existir
  //   "nao" / foto: null -> só texto
  // ------------------------------------------------------------------------
  function modoFoto(item) {
    if (!item.foto || item.foto_prioridade === 'nao') return 'nenhum';
    if (FOTOS_PRATOS.has(item.id)) return 'foto';
    return item.foto_prioridade === 'sim' ? 'placeholder' : 'nenhum';
  }
  const caminhoThumb = (id) => 'img/pratos/thumb/' + encodeURIComponent(id) + '.webp';
  const caminhoFoto = (id) => 'img/pratos/' + encodeURIComponent(id) + '.webp';
  const caminhoCat = (id) => 'img/categorias/' + encodeURIComponent(id) + '.webp';

  function placeholder(nomeIcone, texto) {
    return '<span class="ph">' + icone(nomeIcone) + (texto ? '<span class="ph-texto">' + esc(texto) + '</span>' : '') + '</span>';
  }
  function imagem(src, alt, tamanho, nomeIcone, opcoes) {
    const o = opcoes || {};
    return '<img src="' + src + '" alt="' + esc(alt) + '" width="' + tamanho + '" height="' + tamanho + '"' +
      (o.imediata ? '' : ' loading="lazy"') + ' decoding="async" data-ph="' + nomeIcone + '"' +
      (o.textoPh ? ' data-ph-texto="' + esc(o.textoPh) + '"' : '') + '>';
  }

  // Segurança: se uma foto listada falhar, troca pelo placeholder
  document.addEventListener('error', (e) => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement) || !img.dataset.ph) return;
    const tmp = document.createElement('span');
    tmp.innerHTML = placeholder(img.dataset.ph, img.dataset.phTexto || '');
    img.replaceWith(tmp.firstChild);
  }, true);

  // ------------------------------------------------------------------------
  // Pedaços de HTML
  // ------------------------------------------------------------------------
  function menorPreco(item) {
    return Math.min.apply(null, precosDe(item).map((p) => p.valor));
  }

  function precoResumo(item) {
    const ps = precosDe(item);
    if (!ps.length) return '';
    if (ps.length === 1) {
      return '<span class="item-preco">' + reais(centavos(ps[0].valor)) + '</span>' +
        (ps[0].rotulo ? '<span class="item-var">' + esc(ps[0].rotulo) + '</span>' : '');
    }
    const rotulos = ps.map((p) => p.rotulo).filter(Boolean).join(' · ');
    return '<span class="item-preco"><small>a partir de</small> ' + reais(centavos(menorPreco(item))) + '</span>' +
      (rotulos ? '<span class="item-var">' + esc(rotulos) + '</span>' : '');
  }

  function selos(item, completo) {
    const s = [];
    if (item.esgotado) s.push('<span class="selo selo-esgotado">Esgotado hoje</span>');
    if (item.serve_pessoas) s.push('<span class="selo">' + icone('pessoas') + 'Serve ' + esc(item.serve_pessoas) + '</span>');
    if (completo !== false) {
      if (item.disponibilidade) s.push('<span class="selo">' + icone('relogio') + esc(item.disponibilidade) + '</span>');
      if (item.origem) s.push('<span class="selo">' + icone('globo') + esc(item.origem) + '</span>');
    }
    return s.length ? '<span class="selos">' + s.join('') + '</span>' : '';
  }

  function itemHTML(item, cat) {
    const modo = modoFoto(item);
    const ic = iconeDe(cat);
    let foto = '';
    if (modo === 'foto') foto = '<span class="item-foto">' + imagem(caminhoThumb(item.id), item.nome, 88, ic) + '</span>';
    else if (modo === 'placeholder') foto = '<span class="item-foto">' + placeholder(ic) + '</span>';
    const classes = 'item' + (foto ? '' : ' sem-foto') + (item.esgotado ? ' esgotado' : '');
    return '<li><button type="button" class="' + classes + '" data-id="' + esc(item.id) + '" aria-haspopup="dialog">' +
      '<span class="item-info">' +
        '<span class="item-nome">' + esc(item.nome) + '</span>' +
        (item.descricao ? '<span class="item-desc">' + esc(item.descricao) + '</span>' : '') +
        precoResumo(item) +
        selos(item) +
      '</span>' + foto +
    '</button></li>';
  }

  // Evita repetir a disponibilidade quando ela já está na chamada da categoria
  function repete(a, b) {
    const n = (s) => normalizar(s).replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
    const x = n(a);
    const y = n(b);
    return !!x && !!y && (x.indexOf(y) !== -1 || y.indexOf(x) !== -1);
  }

  function secaoHTML(cat) {
    const disp = cat.disponibilidade && !repete(cat.disponibilidade, cat.chamada)
      ? '<p class="secao-disp">' + icone('relogio') + esc(cat.disponibilidade) + '</p>' : '';
    return '<section class="secao" id="cat-' + esc(cat.id) + '" data-cat="' + esc(cat.id) + '" aria-labelledby="t-' + esc(cat.id) + '">' +
      (cat.chamada ? '<p class="secao-chamada">' + esc(cat.chamada) + '</p>' : '') +
      '<h2 class="secao-titulo" id="t-' + esc(cat.id) + '" tabindex="-1">' + esc(cat.nome) + '</h2>' +
      (cat.descricao ? '<p class="secao-desc">' + esc(cat.descricao) + '</p>' : '') +
      disp +
      '<ul class="itens">' + cat.itens.map((i) => itemHTML(i, cat)).join('') + '</ul>' +
    '</section>';
  }

  function storyHTML(cat) {
    const ic = iconeDe(cat);
    const foto = FOTOS_CATS.has(cat.id) ? imagem(caminhoCat(cat.id), '', 70, ic) : placeholder(ic);
    return '<button type="button" class="story" data-ir="' + esc(cat.id) + '">' +
      '<span class="story-anel"><span class="story-foto">' + foto + '</span></span>' +
      '<span class="story-nome">' + esc(cat.nome) + '</span></button>';
  }

  const chipHTML = (cat) => '<button type="button" class="chip" data-ir="' + esc(cat.id) + '"><span>' + esc(cat.nome) + '</span></button>';

  function destaquesHTML() {
    const lista = [];
    CATEGORIAS.forEach((cat) => cat.itens.forEach((item) => { if (item.destaque_sugerido) lista.push({ item, cat }); }));
    if (!lista.length) return '';
    return '<h2 class="destaques-titulo" id="destaques-titulo">' + icone('brasa') + 'Destaques da casa</h2>' +
      '<div class="destaques-trilho">' + lista.map((d) => destaqueHTML(d.item, d.cat)).join('') + '</div>';
  }

  function destaqueHTML(item, cat) {
    const ic = iconeDe(cat);
    const foto = modoFoto(item) === 'foto' ? imagem(caminhoThumb(item.id), item.nome, 152, ic) : placeholder(ic);
    const ps = precosDe(item);
    const preco = ps.length > 1
      ? '<small>a partir de</small> ' + reais(centavos(menorPreco(item)))
      : (ps[0] ? reais(centavos(ps[0].valor)) : '');
    return '<button type="button" class="destaque' + (item.esgotado ? ' esgotado' : '') + '" data-id="' + esc(item.id) + '" aria-haspopup="dialog">' +
      '<span class="destaque-foto">' + foto +
        (item.esgotado ? '<span class="destaque-selo">Esgotado hoje</span>'
          : item.serve_pessoas ? '<span class="destaque-selo">Serve ' + esc(item.serve_pessoas) + '</span>' : '') +
      '</span>' +
      '<span class="destaque-nome">' + esc(item.nome) + '</span>' +
      '<span class="destaque-preco">' + preco + '</span>' +
    '</button>';
  }

  function linksSecundarios() {
    return '<div class="acoes-sec">' +
      '<a class="btn-sec" href="' + esc(LINKS.como_chegar) + '" target="_blank" rel="noopener">' + icone('rota') + '<span>Como chegar</span></a>' +
      '<a class="btn-sec" href="' + esc(LINKS.avaliar_google) + '" target="_blank" rel="noopener">' + icone('estrela') + '<span>Avaliar no Google</span></a>' +
      '<a class="btn-sec" href="' + esc(LINKS.instagram) + '" target="_blank" rel="noopener">' + icone('instagram') + '<span>Instagram</span></a>' +
    '</div>';
  }
  const botaoWhatsapp = () => '<a class="btn btn-brasa" href="' + esc(LINKS.whatsapp_reservas) + '" target="_blank" rel="noopener">' +
    icone('whatsapp') + '<span>Reservar pelo WhatsApp</span></a>';

  // ------------------------------------------------------------------------
  // Topo e rodapé
  // ------------------------------------------------------------------------
  function renderTopo() {
    // O HTML já traz o topo pronto (evita "pulos" na tela); aqui só aplicamos os dados atuais
    $('#slogan').textContent = R.slogan_curto || '';
    $$('#acoes-topo [data-link]').forEach((a) => {
      const url = LINKS[a.dataset.link];
      if (url) a.href = url; else a.hidden = true;
    });
    if (FOTOS.logo) {
      const logo = $('#logo');
      logo.innerHTML = '<img src="img/logo.png" alt="Logo do ' + esc(R.nome) + '" width="100" height="100">';
      logo.hidden = false;
      $('#topo').classList.add('tem-logo');
    }
    if (FOTOS.capa) {
      const capa = $('#capa');
      capa.classList.add('tem-foto');
      capa.style.backgroundImage = 'linear-gradient(180deg, rgba(11,10,9,.35), rgba(11,10,9,.9)), url("img/capa.webp")';
    }
  }

  function renderRodape() {
    const cred = CONFIG.credito || {};
    const credito = cred.texto
      ? '<p class="credito">' + (cred.link ? '<a href="' + esc(cred.link) + '" target="_blank" rel="noopener">' + esc(cred.texto) + '</a>' : esc(cred.texto)) + '</p>'
      : '';
    $('#rodape').innerHTML =
      '<section class="rodape-bloco" aria-labelledby="r-info"><h2 id="r-info">Informações</h2>' +
        '<ul class="info-lista">' + (DADOS.informacoes || []).map((t) => '<li>' + icone('brasa') + '<span>' + esc(t) + '</span></li>').join('') + '</ul>' +
      '</section>' +
      '<section class="rodape-bloco" aria-labelledby="r-end"><h2 id="r-end">Endereço</h2><p>' + esc(R.endereco) + '</p></section>' +
      '<section class="rodape-bloco" aria-labelledby="r-res"><h2 id="r-res">Reservas</h2>' +
        '<p>WhatsApp: <a href="' + esc(LINKS.whatsapp_reservas) + '" target="_blank" rel="noopener">' + esc(R.reservas_whatsapp) + '</a></p>' +
      '</section>' +
      '<div class="acoes">' + botaoWhatsapp() + linksSecundarios() + '</div>' +
      '<div class="rodape-final">' +
        (CONFIG.fotosIlustrativas !== false ? '<p>Imagens meramente ilustrativas.</p>' : '') +
        credito +
        '<p class="assinatura"><span>' + esc(R.nome) + '</span>' + (R.assinatura ? ' · <span>' + esc(R.assinatura) + '</span>' : '') + '</p>' +
      '</div>';
  }

  // ------------------------------------------------------------------------
  // Abas, stories, chips e seções
  // ------------------------------------------------------------------------
  let abaAtiva = GRUPOS.length ? GRUPOS[0].id : null;
  let secoes = [];
  let chipAtivo = null;
  let spyPausadoAte = 0;
  let modoBusca = false;

  const elAbas = $('#abas');
  const elStories = $('#stories');
  const elChips = $('#chips');
  const elChipsIn = $('#chips-in');
  const elDestaques = $('#destaques');
  const elSecoes = $('#secoes');
  const elPainelAba = $('#painel-aba');
  const elResultados = $('#resultados');
  const elBarraLinha = $('#barra-linha');
  const elBusca = $('#busca');
  const elBuscaInput = $('#busca-input');
  const elAbrirBusca = $('#abrir-busca');

  const ALTURA_ABAS = 56;
  const ALTURA_CHIPS = 44;

  function renderAbas() {
    elAbas.insertAdjacentHTML('beforeend', GRUPOS.map((g) =>
      '<button type="button" class="aba" role="tab" id="aba-' + esc(g.id) + '" data-grupo="' + esc(g.id) + '" ' +
      'aria-controls="painel-aba" aria-selected="false" tabindex="-1">' + esc(ROTULO_ABA[g.id] || g.nome) + '</button>'
    ).join(''));
    elAbas.style.gridTemplateColumns = 'repeat(' + GRUPOS.length + ', minmax(0, 1fr))';
    $('.abas-indicador').style.width = 'calc((100% - 6px) / ' + GRUPOS.length + ')';
  }

  const topoDaLista = () => { const t = $('#topo'); return t.offsetTop + t.offsetHeight; };

  function marcarAba(id) {
    abaAtiva = id;
    elAbas.style.setProperty('--i', GRUPOS.findIndex((g) => g.id === id));
    $$('.aba', elAbas).forEach((b) => {
      const on = b.dataset.grupo === id;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
    elPainelAba.setAttribute('aria-labelledby', 'aba-' + id);
  }

  function selecionarAba(id, rolar) {
    if (!GRUPOS.some((g) => g.id === id)) return;
    marcarAba(id);
    renderConteudoAba();
    if (rolar !== false) {
      const y = topoDaLista();
      if (window.scrollY > y) window.scrollTo({ top: y, behavior: 'auto' });
    }
    verificarChips();
  }

  function renderConteudoAba() {
    const cats = CATEGORIAS.filter((c) => c.grupo === abaAtiva);
    elStories.innerHTML = cats.map(storyHTML).join('');
    elChipsIn.innerHTML = cats.map(chipHTML).join('');
    const htmlDestaques = abaAtiva === GRUPO_DESTAQUES ? destaquesHTML() : '';
    elDestaques.innerHTML = htmlDestaques;
    elDestaques.hidden = !htmlDestaques;
    elSecoes.innerHTML = cats.map(secaoHTML).join('');
    secoes = $$('.secao', elSecoes);
    elStories.scrollLeft = 0;
    elChipsIn.scrollLeft = 0;
    chipAtivo = null;
    atualizarSpy(true);
  }

  // Chips aparecem quando a fileira de stories sai da tela
  function mostrarChips(sim) {
    elChips.classList.toggle('visivel', !!sim);
  }
  function verificarChips() {
    if (modoBusca) { mostrarChips(false); return; }
    const r = elStories.getBoundingClientRect();
    mostrarChips(r.bottom <= ALTURA_ABAS);
  }

  // Scroll-spy: o chip da categoria visível fica ativo
  function atualizarSpy(forcar) {
    if (!secoes.length) return;
    if (!forcar && Date.now() < spyPausadoAte) return;
    const limite = ALTURA_ABAS + ALTURA_CHIPS + 16;
    let atual = secoes[0];
    for (let i = 0; i < secoes.length; i++) {
      if (secoes[i].getBoundingClientRect().top - limite <= 0) atual = secoes[i];
      else break;
    }
    marcarChip(atual.dataset.cat, forcar);
  }
  function marcarChip(catId, instantaneo) {
    if (chipAtivo === catId) return;
    chipAtivo = catId;
    $$('.chip', elChipsIn).forEach((c) => {
      if (c.dataset.ir === catId) {
        c.setAttribute('aria-current', 'true');
        const alvo = c.offsetLeft - (elChipsIn.clientWidth - c.offsetWidth) / 2;
        // Durante a rolagem automática até uma categoria, a barra de chips pula direto
        // (duas rolagens suaves ao mesmo tempo podem se cancelar em alguns navegadores).
        elChipsIn.scrollTo({ left: Math.max(0, alvo), behavior: instantaneo ? 'auto' : comportamento() });
      } else {
        c.removeAttribute('aria-current');
      }
    });
  }

  function irParaCategoria(catId) {
    const secao = document.getElementById('cat-' + catId);
    if (!secao) return;
    marcarChip(catId, true);
    spyPausadoAte = Date.now() + 1200;
    secao.scrollIntoView({ behavior: comportamento(), block: 'start' });
    const titulo = $('.secao-titulo', secao);
    if (titulo) titulo.focus({ preventScroll: true });
  }

  let rafRolagem = 0;
  window.addEventListener('scroll', () => {
    if (rafRolagem) return;
    rafRolagem = requestAnimationFrame(() => {
      rafRolagem = 0;
      if (!modoBusca) { verificarChips(); atualizarSpy(false); }
    });
  }, { passive: true });
  document.addEventListener('scrollend', (e) => {
    if (e.target !== document) return; // só a rolagem da página (não a das fileiras horizontais)
    spyPausadoAte = 0;
    if (!modoBusca) atualizarSpy(true);
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(() => verificarChips(), { rootMargin: '-' + ALTURA_ABAS + 'px 0px 0px 0px' }).observe(elStories);
  }

  // ------------------------------------------------------------------------
  // Busca
  // ------------------------------------------------------------------------
  function abrirBusca() {
    modoBusca = true;
    elBarraLinha.hidden = true;
    elBusca.hidden = false;
    elAbrirBusca.setAttribute('aria-expanded', 'true');
    mostrarChips(false);
    const y = topoDaLista();
    if (Math.abs(window.scrollY - y) > 2) window.scrollTo({ top: y, behavior: 'auto' });
    elBuscaInput.focus({ preventScroll: true });
  }

  function fecharBusca() {
    elBuscaInput.value = '';
    $('#busca-limpar').hidden = true;
    mostrarAba();
    modoBusca = false;
    elBusca.hidden = true;
    elBarraLinha.hidden = false;
    elAbrirBusca.setAttribute('aria-expanded', 'false');
    elAbrirBusca.focus({ preventScroll: true });
    $('#busca-status').textContent = '';
    verificarChips();
    atualizarSpy(true);
  }

  function mostrarAba() {
    elResultados.hidden = true;
    elResultados.innerHTML = '';
    elPainelAba.hidden = false;
  }

  function buscar(consulta) {
    const termos = normalizar(consulta).split(' ').filter(Boolean);
    $('#busca-limpar').hidden = !consulta;
    const status = $('#busca-status');
    if (!termos.length) { mostrarAba(); status.textContent = ''; return; }

    const achados = INDICE_BUSCA.filter((r) => termos.every((t) => r.texto.indexOf(t) !== -1));
    elPainelAba.hidden = true;
    elResultados.hidden = false;
    const y = topoDaLista();
    if (window.scrollY > y) window.scrollTo({ top: y, behavior: 'auto' });

    if (!achados.length) {
      elResultados.innerHTML = '<div class="vazio">' + icone('busca') + '<p>Não encontramos esse item. Consulte o garçom.</p></div>';
      status.textContent = 'Nenhum item encontrado.';
      return;
    }

    // Agrupa por categoria, na ordem do cardápio
    const porCategoria = new Map();
    achados.forEach((r) => {
      if (!porCategoria.has(r.cat)) porCategoria.set(r.cat, []);
      porCategoria.get(r.cat).push(r.item);
    });
    const nomeGrupo = (id) => { const g = GRUPOS.find((x) => x.id === id); return g ? (ROTULO_ABA[g.id] || g.nome) : ''; };
    let html = '<p class="res-cab">' + plural(achados.length, 'item encontrado', 'itens encontrados') + '</p>';
    porCategoria.forEach((itens, cat) => {
      html += '<section class="res-grupo" aria-label="' + esc(cat.nome) + '">' +
        '<h2 class="res-titulo"><small>' + esc(nomeGrupo(cat.grupo)) + '</small>' + esc(cat.nome) + '</h2>' +
        '<ul class="itens">' + itens.map((i) => itemHTML(i, cat)).join('') + '</ul></section>';
    });
    elResultados.innerHTML = html;
    status.textContent = plural(achados.length, 'item encontrado', 'itens encontrados') + '.';
  }

  // ------------------------------------------------------------------------
  // Lista do pedido (localStorage com fallback em memória)
  // ------------------------------------------------------------------------
  function precoDaLinha(id, rotulo) {
    const ref = ITENS.get(id);
    if (!ref) return null;
    const p = precosDe(ref.item).find((x) => (x.rotulo == null ? null : x.rotulo) === (rotulo == null ? null : rotulo));
    return p ? centavos(p.valor) : null;
  }

  function carregarLista() {
    let bruto = [];
    try {
      bruto = JSON.parse(window.localStorage.getItem(CHAVE_LISTA) || '[]');
    } catch (e) {
      bruto = [];
    }
    if (!Array.isArray(bruto)) return [];
    // Descarta linhas de itens que saíram do cardápio ou mudaram de variação
    return bruto
      .filter((l) => l && ITENS.has(l.id) && precoDaLinha(l.id, l.rotulo) != null)
      .map((l) => ({
        id: l.id,
        rotulo: l.rotulo == null ? null : String(l.rotulo),
        qtd: Math.min(99, Math.max(1, parseInt(l.qtd, 10) || 1)),
        obs: String(l.obs || '').slice(0, 80)
      }));
  }

  function salvarLista() {
    try {
      window.localStorage.setItem(CHAVE_LISTA, JSON.stringify(lista));
    } catch (e) {
      // Armazenamento bloqueado ou cheio: a lista continua funcionando só em memória.
    }
  }

  let lista = carregarLista();

  function adicionarLinha(id, rotulo, qtd, obs) {
    const existente = lista.find((l) => l.id === id && l.rotulo === rotulo && l.obs === obs);
    if (existente) existente.qtd = Math.min(99, existente.qtd + qtd);
    else lista.push({ id, rotulo, qtd, obs });
  }

  function totais() {
    let sub = 0;
    let qtd = 0;
    lista.forEach((l) => { sub += precoDaLinha(l.id, l.rotulo) * l.qtd; qtd += l.qtd; });
    const taxa = Math.round(sub * 0.1);
    return { sub, taxa, total: sub + taxa, qtd };
  }

  const nomeDaLinha = (l) => ITENS.get(l.id).item.nome + (l.rotulo ? ' (' + l.rotulo + ')' : '');

  const elFab = $('#fab');
  function atualizarFab(animar) {
    const t = totais();
    if (!t.qtd) {
      elFab.hidden = true;
      document.body.classList.remove('tem-lista');
      return;
    }
    elFab.hidden = false;
    document.body.classList.add('tem-lista');
    elFab.innerHTML = icone('lista') + '<span>Minha lista · ' + plural(t.qtd, 'item', 'itens') + ' · <b>' + reais(t.sub) + '</b></span>';
    if (animar && !semMovimento.matches) {
      elFab.classList.remove('pulo');
      void elFab.offsetWidth;
      elFab.classList.add('pulo');
    }
  }

  let timerToast = 0;
  function avisar(msg) {
    const t = $('#toast');
    t.innerHTML = icone('check') + '<span>' + esc(msg) + '</span>';
    t.classList.add('visivel');
    clearTimeout(timerToast);
    timerToast = setTimeout(() => t.classList.remove('visivel'), 2600);
  }

  // ------------------------------------------------------------------------
  // Painéis sobrepostos: pilha + histórico (o "voltar" do celular fecha)
  // ------------------------------------------------------------------------
  const pilha = []; // { nome, el, retorno }
  let aguardandoVoltar = false;
  const FUNDO = ['topo', 'barra', 'cardapio', 'rodape', 'fab'].map((id) => document.getElementById(id));

  function atualizarFundo() {
    const bloquear = pilha.length > 0;
    FUNDO.forEach((el) => { if (el) el.inert = bloquear; });
    $('.pular').inert = bloquear;
    pilha.forEach((p, i) => { p.el.inert = i < pilha.length - 1; });
    document.documentElement.classList.toggle('travado', bloquear);
  }

  function mostrar(el) {
    el.hidden = false;
    void el.offsetWidth; // garante a transição de entrada
    el.classList.add('aberto');
  }
  function esconder(el) {
    el.classList.remove('aberto');
    const sheet = $('.sheet', el);
    if (sheet) { sheet.style.transition = ''; sheet.style.transform = ''; }
    const fim = () => { if (!el.classList.contains('aberto')) el.hidden = true; };
    if (semMovimento.matches) fim(); else setTimeout(fim, 340);
  }

  function abrirPainel(nome, el, estado, url, empurrar) {
    const st = Object.assign({ ov: nome, n: pilha.length + 1 }, estado || {});
    if (empurrar === false) history.replaceState(st, '', url); else history.pushState(st, '', url);
    pilha.push({ nome, el, retorno: document.activeElement });
    mostrar(el);
    atualizarFundo();
    const foco = el.getAttribute('role') === 'dialog' ? el : $('[role="dialog"]', el);
    if (foco) foco.focus({ preventScroll: true });
  }

  function fecharTopo() {
    const p = pilha.pop();
    if (!p) return;
    esconder(p.el);
    atualizarFundo();
    if (p.nome === 'item') itemAtual = null;
    if (p.retorno && document.contains(p.retorno) && !p.retorno.closest('[inert]')) p.retorno.focus({ preventScroll: true });
    if (!pilha.length && (document.activeElement === document.body || !document.activeElement)) {
      $('#cardapio').focus({ preventScroll: true }); // ex.: a lista foi limpa e o botão flutuante sumiu
    }
  }

  // Fechar pelo X, fundo, Esc ou arrastando: volta uma entrada do histórico
  function pedirFechar() {
    if (!pilha.length || aguardandoVoltar) return;
    if (history.state && history.state.n === pilha.length) {
      aguardandoVoltar = true;
      history.back();
      setTimeout(() => { // salvaguarda caso o navegador não dispare o popstate
        if (aguardandoVoltar) { aguardandoVoltar = false; fecharTopo(); history.replaceState({ n: pilha.length }, '', urlBase()); }
      }, 600);
    } else {
      fecharTopo();
      history.replaceState({ n: pilha.length }, '', urlBase());
    }
  }

  window.addEventListener('popstate', (e) => {
    aguardandoVoltar = false;
    const st = e.state;
    const n = (st && st.n) || 0;
    while (pilha.length > n) fecharTopo();
    if (pilha.length === 0) {
      if (st && st.ov === 'item' && ITENS.has(st.id)) {
        abrirItem(st.id, false); // "avançar" do navegador
      } else if (!st) {
        const id = idDoHash();
        if (id) abrirItem(id, false); // #id digitado na barra de endereço
      }
    }
  });

  const idDoHash = () => {
    let id = '';
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { id = ''; }
    return ITENS.has(id) ? id : null;
  };

  // Teclado: Esc fecha, Tab fica preso dentro do painel, setas trocam de item
  const SELETOR_FOCAVEL = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
  document.addEventListener('keydown', (e) => {
    if (!pilha.length) {
      if (e.key === 'Escape' && modoBusca) { e.preventDefault(); fecharBusca(); }
      return;
    }
    const topo = pilha[pilha.length - 1];
    if (e.key === 'Escape') { e.preventDefault(); pedirFechar(); return; }
    if (e.key === 'Tab') {
      const focaveis = $$(SELETOR_FOCAVEL, topo.el).filter((x) => x.getClientRects().length);
      if (!focaveis.length) { e.preventDefault(); return; }
      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];
      const dentro = topo.el.contains(document.activeElement);
      if (e.shiftKey && (!dentro || document.activeElement === primeiro || document.activeElement.getAttribute('role') === 'dialog')) {
        e.preventDefault(); ultimo.focus();
      } else if (!e.shiftKey && (!dentro || document.activeElement === ultimo)) {
        e.preventDefault(); primeiro.focus();
      }
      return;
    }
    if (topo.nome === 'item' && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      e.preventDefault();
      navegarItem(e.key === 'ArrowRight' ? 1 : -1);
    }
  });

  // ------------------------------------------------------------------------
  // Painel do prato
  // ------------------------------------------------------------------------
  const elOvItem = $('#ov-item');
  const elSheetItem = $('#sheet-item');
  let itemAtual = null; // { item, cat, pos }
  let escolha = null;   // { idx, adicionais:Set, qtd }

  function abrirItem(id, empurrar) {
    const ref = ITENS.get(id);
    if (!ref) return;
    renderItem(ref, 0);
    abrirPainel('item', elOvItem, { id: id }, urlBase() + '#' + encodeURIComponent(id), empurrar);
  }

  function renderItem(ref, direcao) {
    const item = ref.item;
    const cat = ref.cat;
    const pos = ref.pos;
    const ps = precosDe(item);
    const total = cat.itens.length;
    itemAtual = ref;
    escolha = { idx: ps.length === 1 ? 0 : -1, adicionais: new Set(), qtd: 1 };

    const ic = iconeDe(cat);
    const modo = modoFoto(item);
    let foto = '';
    if (modo === 'foto') {
      foto = '<div class="painel-foto">' + imagem(caminhoFoto(item.id), item.nome, 1200, ic, { imediata: true, textoPh: 'Foto em breve' }) + '</div>';
    } else if (modo === 'placeholder') {
      foto = '<div class="painel-foto">' + placeholder(ic, 'Foto em breve') + '</div>';
    }

    // Preços / variações
    let precos = '';
    if (ehAdicionais(item)) {
      precos = '<fieldset class="opcoes" id="item-opcoes"><legend>Escolha os adicionais <span class="obrigatorio">Mín. 1</span></legend>' +
        '<p class="opcoes-dica">Cada adicional entra na lista como uma linha separada.</p>' +
        ps.map((p, i) => '<label class="opcao"><input type="checkbox" name="adicional" value="' + i + '"' + (item.esgotado ? ' disabled' : '') + '>' +
          '<span class="opcao-rotulo">' + esc(p.rotulo) + '</span><span class="opcao-preco">+ ' + reais(centavos(p.valor)) + '</span></label>').join('') +
        '</fieldset>';
    } else if (ps.length > 1) {
      precos = '<fieldset class="opcoes" id="item-opcoes"><legend>Escolha uma opção <span class="obrigatorio">Obrigatório</span></legend>' +
        ps.map((p, i) => '<label class="opcao"><input type="radio" name="variacao" value="' + i + '"' + (item.esgotado ? ' disabled' : '') + '>' +
          '<span class="opcao-rotulo">' + esc(p.rotulo || 'Opção ' + (i + 1)) + '</span><span class="opcao-preco">' + reais(centavos(p.valor)) + '</span></label>').join('') +
        '</fieldset>';
    } else if (ps.length === 1) {
      precos = '<p class="painel-preco">' + reais(centavos(ps[0].valor)) + (ps[0].rotulo ? '<small>' + esc(ps[0].rotulo) + '</small>' : '') + '</p>';
    }

    // Disponibilidade e origem
    const disp = item.disponibilidade || cat.disponibilidade;
    const infos = [];
    if (disp) infos.push('<p class="info">' + icone('relogio') + '<span>' + esc(disp) + '</span></p>');
    if (item.origem) infos.push('<p class="info">' + icone('globo') + '<span><strong>Origem:</strong> ' + esc(item.origem) + '</span></p>');

    // Item sem descrição: mostra o texto da categoria (ex.: acompanhamentos dos executivos)
    const nota = !item.descricao && cat.descricao ? '<p class="painel-nota">' + esc(cat.descricao) + '</p>' : '';

    const navegacao = total > 1
      ? '<div class="nav-itens">' +
          '<button type="button" class="btn-icone" data-nav="-1" aria-label="Item anterior"' + (pos === 0 ? ' disabled' : '') + '>' + icone('esq') + '</button>' +
          '<span class="nav-pos">' + (pos + 1) + ' / ' + total + '</span>' +
          '<button type="button" class="btn-icone" data-nav="1" aria-label="Próximo item"' + (pos === total - 1 ? ' disabled' : '') + '>' + icone('dir') + '</button>' +
        '</div>'
      : '<span></span>';

    elSheetItem.innerHTML =
      '<div class="sheet-topo">' +
        '<span class="alca" aria-hidden="true"></span>' +
        '<div class="sheet-barra">' + navegacao +
          '<button type="button" class="btn-icone" data-fechar aria-label="Fechar">' + icone('fechar') + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="sheet-rolagem">' +
        foto +
        '<div class="painel-corpo' + (direcao > 0 ? ' entra-dir' : direcao < 0 ? ' entra-esq' : '') + '">' +
          '<p class="painel-cat">' + esc(cat.nome) + '</p>' +
          '<h2 class="painel-nome" id="item-titulo">' + esc(item.nome) + '</h2>' +
          selos(item, false) +
          (item.descricao ? '<p class="painel-desc">' + esc(item.descricao) + '</p>' : '') +
          nota +
          precos +
          (infos.length ? '<div class="infos">' + infos.join('') + '</div>' : '') +
          '<div class="obs"><label for="item-obs">Observação <span>(opcional)</span></label>' +
            '<input class="campo" id="item-obs" type="text" maxlength="80" autocomplete="off" enterkeyhint="done" placeholder="Ex.: ponto da carne, sem cebola…"' + (item.esgotado ? ' disabled' : '') + '>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="sheet-rodape"><div class="rodape-acoes">' +
        '<div class="qtd" role="group" aria-label="Quantidade">' +
          '<button type="button" data-qtd="-1" aria-label="Diminuir quantidade" disabled>' + icone('menos') + '</button>' +
          '<output id="item-qtd" aria-live="polite">1</output>' +
          '<button type="button" data-qtd="1" aria-label="Aumentar quantidade"' + (item.esgotado ? ' disabled' : '') + '>' + icone('mais') + '</button>' +
        '</div>' +
        '<button type="button" class="btn btn-brasa btn-add" id="btn-add"' + (item.esgotado ? ' disabled' : '') + '></button>' +
      '</div></div>';

    $('.sheet-rolagem', elSheetItem).scrollTop = 0;
    atualizarBotaoAdd();
  }

  function valorEscolhido() {
    const item = itemAtual.item;
    const ps = precosDe(item);
    if (ehAdicionais(item)) {
      let soma = 0;
      escolha.adicionais.forEach((i) => { soma += centavos(ps[i].valor); });
      return soma * escolha.qtd;
    }
    return escolha.idx >= 0 ? centavos(ps[escolha.idx].valor) * escolha.qtd : 0;
  }

  function atualizarBotaoAdd() {
    const btn = $('#btn-add');
    if (!btn || !itemAtual) return;
    const item = itemAtual.item;
    let pronto = true;
    let texto = 'Adicionar à lista';
    if (item.esgotado) { pronto = false; texto = 'Esgotado hoje'; }
    else if (ehAdicionais(item) && !escolha.adicionais.size) { pronto = false; texto = 'Escolha os adicionais'; }
    else if (!ehAdicionais(item) && escolha.idx < 0) { pronto = false; texto = 'Escolha uma opção'; }
    if (!item.esgotado) btn.setAttribute('aria-disabled', pronto ? 'false' : 'true');
    btn.innerHTML = '<span>' + texto + '</span>' + (pronto ? '<span class="btn-add-valor">' + reais(valorEscolhido()) + '</span>' : '');
    $('#item-qtd').textContent = escolha.qtd;
    const menos = $('[data-qtd="-1"]', elSheetItem);
    if (menos) menos.disabled = escolha.qtd <= 1 || !!item.esgotado;
    const mais = $('[data-qtd="1"]', elSheetItem);
    if (mais) mais.disabled = escolha.qtd >= 99 || !!item.esgotado;
  }

  function pedirEscolha() {
    const grupo = $('#item-opcoes');
    if (!grupo) return;
    grupo.classList.remove('alerta');
    void grupo.offsetWidth;
    grupo.classList.add('alerta');
    grupo.scrollIntoView({ behavior: comportamento(), block: 'center' });
    const primeiro = $('input', grupo);
    if (primeiro) primeiro.focus({ preventScroll: true });
  }

  function adicionarAtual() {
    if (!itemAtual) return;
    const item = itemAtual.item;
    if (item.esgotado) return;
    const ps = precosDe(item);
    const obs = ($('#item-obs').value || '').trim().slice(0, 80);
    let qtdLinhas = 0;
    if (ehAdicionais(item)) {
      if (!escolha.adicionais.size) { pedirEscolha(); return; }
      ps.forEach((p, i) => {
        if (escolha.adicionais.has(i)) { adicionarLinha(item.id, p.rotulo || null, escolha.qtd, obs); qtdLinhas++; }
      });
    } else {
      if (escolha.idx < 0) { pedirEscolha(); return; }
      adicionarLinha(item.id, ps[escolha.idx].rotulo || null, escolha.qtd, obs);
      qtdLinhas = 1;
    }
    salvarLista();
    atualizarFab(true);
    const rotulo = !ehAdicionais(item) && ps[escolha.idx].rotulo ? ' (' + ps[escolha.idx].rotulo + ')' : '';
    avisar(qtdLinhas > 1 ? qtdLinhas + ' adicionais na lista' : escolha.qtd + '× ' + item.nome + rotulo + ' na lista');
    pedirFechar();
  }

  function navegarItem(direcao) {
    if (!itemAtual) return;
    const cat = itemAtual.cat;
    const novo = cat.itens[itemAtual.pos + direcao];
    if (!novo) return;
    const focoEmNav = document.activeElement && document.activeElement.hasAttribute('data-nav');
    history.replaceState({ ov: 'item', id: novo.id, n: pilha.length }, '', urlBase() + '#' + encodeURIComponent(novo.id));
    renderItem(ITENS.get(novo.id), semMovimento.matches ? 0 : direcao);
    if (focoEmNav) {
      const alvo = $('[data-nav="' + direcao + '"]:not([disabled])', elSheetItem) || $('[data-nav]:not([disabled])', elSheetItem);
      if (alvo) alvo.focus({ preventScroll: true });
    }
  }

  elOvItem.addEventListener('click', (e) => {
    const alvo = e.target.closest('[data-fechar], [data-nav], [data-qtd], #btn-add');
    if (!alvo) return;
    if (alvo.hasAttribute('data-fechar')) { pedirFechar(); return; }
    if (alvo.hasAttribute('data-nav')) { navegarItem(parseInt(alvo.dataset.nav, 10)); return; }
    if (alvo.hasAttribute('data-qtd')) {
      escolha.qtd = Math.min(99, Math.max(1, escolha.qtd + parseInt(alvo.dataset.qtd, 10)));
      atualizarBotaoAdd();
      return;
    }
    if (alvo.id === 'btn-add') adicionarAtual();
  });

  elOvItem.addEventListener('change', (e) => {
    const input = e.target;
    if (!itemAtual || !(input instanceof HTMLInputElement)) return;
    if (input.name === 'variacao') escolha.idx = parseInt(input.value, 10);
    if (input.name === 'adicional') {
      const i = parseInt(input.value, 10);
      if (input.checked) escolha.adicionais.add(i); else escolha.adicionais.delete(i);
    }
    const grupo = $('#item-opcoes');
    if (grupo) grupo.classList.remove('alerta');
    atualizarBotaoAdd();
  });

  elOvItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.id === 'item-obs') { e.preventDefault(); e.target.blur(); }
  });

  // Gestos no celular: arrastar para baixo fecha; deslizar na foto troca de item
  (function gestos() {
    let g = null;
    elSheetItem.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1 || e.target.closest('input, textarea, label')) { g = null; return; }
      const t = e.touches[0];
      const rolagem = $('.sheet-rolagem', elSheetItem);
      g = {
        x: t.clientX, y: t.clientY, t0: Date.now(), dx: 0, dy: 0, modo: null,
        naFoto: !!e.target.closest('.painel-foto'),
        noTopo: !!e.target.closest('.sheet-topo'),
        rolagem: rolagem,
        foto: $('.painel-foto', elSheetItem)
      };
    }, { passive: true });

    elSheetItem.addEventListener('touchmove', (e) => {
      if (!g) return;
      const t = e.touches[0];
      const dx = t.clientX - g.x;
      const dy = t.clientY - g.y;
      if (!g.modo) {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        if (g.naFoto && Math.abs(dx) > Math.abs(dy) * 1.2) g.modo = 'lado';
        else if (dy > 0 && Math.abs(dy) > Math.abs(dx) && (g.noTopo || g.rolagem.scrollTop <= 0)) g.modo = 'descer';
        else g.modo = 'nada';
        if (g.modo === 'descer') elSheetItem.style.transition = 'none';
      }
      if (g.modo === 'descer') {
        e.preventDefault();
        g.dy = Math.max(0, dy);
        elSheetItem.style.transform = 'translateY(' + g.dy + 'px)';
      } else if (g.modo === 'lado' && g.foto) {
        e.preventDefault();
        g.dx = dx;
        g.foto.style.transition = 'none';
        g.foto.style.transform = 'translateX(' + dx * 0.35 + 'px)';
      }
    }, { passive: false });

    function fim() {
      if (!g) return;
      const dt = Math.max(1, Date.now() - g.t0);
      if (g.modo === 'descer') {
        elSheetItem.style.transition = '';
        if (g.dy > 120 || (g.dy > 40 && g.dy / dt > 0.6)) pedirFechar();
        else elSheetItem.style.transform = '';
      } else if (g.modo === 'lado' && g.foto) {
        g.foto.style.transition = '';
        g.foto.style.transform = '';
        if (Math.abs(g.dx) > 50) navegarItem(g.dx < 0 ? 1 : -1);
      }
      g = null;
    }
    elSheetItem.addEventListener('touchend', fim);
    elSheetItem.addEventListener('touchcancel', fim);
  })();

  // ------------------------------------------------------------------------
  // Painel da lista
  // ------------------------------------------------------------------------
  const elOvLista = $('#ov-lista');
  const elSheetLista = $('#sheet-lista');

  function abrirLista() {
    renderLista();
    abrirPainel('lista', elOvLista, null, urlBase());
  }

  function renderLista() {
    const t = totais();
    let corpo;
    let rodape = '';
    if (lista.length) {
      corpo = '<ul class="linhas">' + lista.map((l, i) => {
        const ref = ITENS.get(l.id);
        const unit = precoDaLinha(l.id, l.rotulo);
        const nome = ref.item.nome;
        return '<li class="linha" data-i="' + i + '">' +
          '<div><p class="linha-nome">' + esc(nome) + '</p>' +
            (l.rotulo ? '<p class="linha-var">' + esc(l.rotulo) + '</p>' : '') +
            (l.obs ? '<p class="linha-obs">Obs.: ' + esc(l.obs) + '</p>' : '') +
          '</div>' +
          '<p class="linha-preco">' + reais(unit * l.qtd) + (l.qtd > 1 ? '<small>' + l.qtd + ' × ' + reais(unit) + '</small>' : '') + '</p>' +
          '<div class="linha-controles">' +
            '<div class="qtd pequena" role="group" aria-label="Quantidade de ' + esc(nomeDaLinha(l)) + '">' +
              '<button type="button" data-acao="menos" aria-label="Diminuir"' + (l.qtd <= 1 ? ' disabled' : '') + '>' + icone('menos') + '</button>' +
              '<output>' + l.qtd + '</output>' +
              '<button type="button" data-acao="mais" aria-label="Aumentar"' + (l.qtd >= 99 ? ' disabled' : '') + '>' + icone('mais') + '</button>' +
            '</div>' +
            '<button type="button" class="btn-remover" data-acao="remover" aria-label="Remover ' + esc(nomeDaLinha(l)) + '">' + icone('lixeira') + '<span>Remover</span></button>' +
          '</div>' +
        '</li>';
      }).join('') + '</ul>' +
      '<dl class="totais">' +
        '<div class="total-linha"><dt>Subtotal</dt><dd>' + reais(t.sub) + '</dd></div>' +
        '<div class="total-linha"><dt>Taxa de serviço (10%, opcional)</dt><dd>' + reais(t.taxa) + '</dd></div>' +
        '<div class="total-linha total"><dt>Total estimado</dt><dd>' + reais(t.total) + '</dd></div>' +
      '</dl>';
      rodape = '<div class="lista-botoes">' +
        '<button type="button" class="btn btn-brasa" id="btn-garcom">' + icone('expandir') + '<span>Mostrar ao garçom</span></button>' +
        '<div class="limpar" id="limpar-area"><button type="button" class="btn-texto" id="btn-limpar">Limpar lista</button></div>' +
      '</div>';
    } else {
      corpo = '<div class="vazio">' + icone('lista') + '<p>Sua lista está vazia. Toque em um prato para adicionar.</p></div>';
      rodape = '<button type="button" class="btn btn-brasa" data-fechar style="width:100%">Ver o cardápio</button>';
    }

    elSheetLista.innerHTML =
      '<div class="sheet-topo"><span class="alca" aria-hidden="true"></span>' +
        '<div class="sheet-barra"><h2 class="lista-titulo" id="lista-titulo">Minha lista</h2>' +
          '<button type="button" class="btn-icone" data-fechar aria-label="Fechar">' + icone('fechar') + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="sheet-rolagem">' +
        '<div class="aviso">' + icone('info') + '<div><strong>Esta lista não envia o pedido. Mostre-a ao garçom.</strong>' +
          '<span>Valores estimados. Couvert artístico não incluído.</span></div></div>' +
        corpo +
      '</div>' +
      '<div class="sheet-rodape">' + rodape + '</div>';
  }

  elOvLista.addEventListener('click', (e) => {
    const alvo = e.target.closest('[data-fechar], [data-acao], #btn-garcom, #btn-limpar, [data-limpar]');
    if (!alvo) return;
    if (alvo.hasAttribute('data-fechar')) { pedirFechar(); return; }
    if (alvo.id === 'btn-garcom') { abrirGarcom(); return; }
    if (alvo.id === 'btn-limpar') {
      $('#limpar-area').innerHTML = '<div class="confirmar" role="group" aria-labelledby="confirmar-txt">' +
        '<p id="confirmar-txt">Limpar todos os itens da lista?</p>' +
        '<div class="confirmar-acoes">' +
          '<button type="button" class="btn btn-neutro" data-limpar="nao">Cancelar</button>' +
          '<button type="button" class="btn btn-perigo" data-limpar="sim">Sim, limpar</button>' +
        '</div></div>';
      $('[data-limpar="nao"]', elSheetLista).focus();
      return;
    }
    if (alvo.hasAttribute('data-limpar')) {
      if (alvo.dataset.limpar === 'sim') {
        lista = [];
        salvarLista();
        atualizarFab(false);
        renderLista();
        avisar('Lista limpa');
        $('[data-fechar]', elSheetLista).focus();
      } else {
        $('#limpar-area').innerHTML = '<button type="button" class="btn-texto" id="btn-limpar">Limpar lista</button>';
        $('#btn-limpar').focus();
      }
      return;
    }
    const linha = alvo.closest('.linha');
    if (!linha) return;
    const i = parseInt(linha.dataset.i, 10);
    const acao = alvo.dataset.acao;
    if (!lista[i]) return;
    if (acao === 'mais') lista[i].qtd = Math.min(99, lista[i].qtd + 1);
    if (acao === 'menos') lista[i].qtd = Math.max(1, lista[i].qtd - 1);
    if (acao === 'remover') lista.splice(i, 1);
    salvarLista();
    atualizarFab(false);
    const rolagem = $('.sheet-rolagem', elSheetLista);
    const topoRolagem = rolagem ? rolagem.scrollTop : 0;
    renderLista();
    const novaRolagem = $('.sheet-rolagem', elSheetLista);
    if (novaRolagem) novaRolagem.scrollTop = topoRolagem;
    // devolve o foco para um controle equivalente
    let foco = null;
    if (acao !== 'remover') foco = $('.linha[data-i="' + i + '"] [data-acao="' + acao + '"]:not([disabled])', elSheetLista) ||
      $('.linha[data-i="' + i + '"] [data-acao]:not([disabled])', elSheetLista);
    else foco = $('.linha[data-i="' + Math.min(i, lista.length - 1) + '"] [data-acao="remover"]', elSheetLista);
    (foco || $('[data-fechar]', elSheetLista)).focus({ preventScroll: true });
  });

  // ------------------------------------------------------------------------
  // Modo garçom
  // ------------------------------------------------------------------------
  const elGarcom = $('#ov-garcom');

  function abrirGarcom() {
    const t = totais();
    elGarcom.innerHTML = '<div class="garcom-in">' +
      '<header class="garcom-cab">' +
        '<div><p class="garcom-sub">' + esc(R.nome) + '</p><h2 class="garcom-titulo" id="garcom-titulo">Meu pedido</h2></div>' +
        '<button type="button" class="garcom-fechar" data-fechar>Fechar</button>' +
      '</header>' +
      '<ul class="garcom-linhas">' + lista.map((l) =>
        '<li><p class="garcom-item"><b>' + l.qtd + '×</b> ' + esc(nomeDaLinha(l)) + '</p>' +
        (l.obs ? '<p class="garcom-obs">Obs.: ' + esc(l.obs) + '</p>' : '') + '</li>'
      ).join('') + '</ul>' +
      '<div class="garcom-rodape"><span>' + plural(t.qtd, 'item', 'itens') + '</span><span>Subtotal: ' + reais(t.sub) + '</span></div>' +
      '<p class="garcom-nota">Lista montada no cardápio digital. Valores estimados, sem taxa de serviço e sem couvert artístico.</p>' +
    '</div>';
    elGarcom.scrollTop = 0;
    abrirPainel('garcom', elGarcom, null, urlBase());
  }

  elGarcom.addEventListener('click', (e) => {
    if (e.target.closest('[data-fechar]')) pedirFechar();
  });

  // ------------------------------------------------------------------------
  // Eventos da página
  // ------------------------------------------------------------------------
  elAbas.addEventListener('click', (e) => {
    const aba = e.target.closest('.aba');
    if (aba && aba.dataset.grupo !== abaAtiva) selecionarAba(aba.dataset.grupo);
  });
  elAbas.addEventListener('keydown', (e) => {
    const abas = $$('.aba', elAbas);
    const atual = abas.indexOf(document.activeElement);
    if (atual < 0) return;
    let novo = -1;
    if (e.key === 'ArrowRight') novo = (atual + 1) % abas.length;
    if (e.key === 'ArrowLeft') novo = (atual - 1 + abas.length) % abas.length;
    if (e.key === 'Home') novo = 0;
    if (e.key === 'End') novo = abas.length - 1;
    if (novo < 0) return;
    e.preventDefault();
    selecionarAba(abas[novo].dataset.grupo);
    abas[novo].focus();
  });

  $('#cardapio').addEventListener('click', (e) => {
    const alvo = e.target.closest('[data-id], [data-ir]');
    if (!alvo) return;
    if (alvo.dataset.id) abrirItem(alvo.dataset.id);
    else irParaCategoria(alvo.dataset.ir);
  });
  elChipsIn.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-ir]');
    if (chip) irParaCategoria(chip.dataset.ir);
  });
  // No computador, a rodinha do mouse rola a barra de chips para o lado
  elChipsIn.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    elChipsIn.scrollLeft += e.deltaY;
  }, { passive: false });

  elAbrirBusca.addEventListener('click', abrirBusca);
  $('#fechar-busca').addEventListener('click', fecharBusca);
  $('#busca-limpar').addEventListener('click', () => {
    elBuscaInput.value = '';
    buscar('');
    elBuscaInput.focus();
  });
  elBuscaInput.addEventListener('input', () => buscar(elBuscaInput.value));
  elBusca.addEventListener('submit', (e) => { e.preventDefault(); elBuscaInput.blur(); });

  elFab.addEventListener('click', abrirLista);

  // ------------------------------------------------------------------------
  // Início
  // ------------------------------------------------------------------------
  const idInicial = idDoHash();
  // Entrada "base" do histórico, sem painel aberto (também limpa estados antigos após recarregar)
  history.replaceState({ n: 0 }, '', urlBase());

  renderTopo();
  renderAbas();
  marcarAba(idInicial ? ITENS.get(idInicial).cat.grupo : abaAtiva);

  // O topo e as abas aparecem na primeira pintura; o cardápio é montado logo em seguida
  function montarCardapio() {
    renderRodape();
    selecionarAba(abaAtiva, false);
    atualizarFab(false);
    // Abrir a página com #id já abre o painel daquele item (e o "voltar" fecha)
    if (idInicial) abrirItem(idInicial);
  }
  let montado = false;
  const montarUmaVez = () => { if (!montado) { montado = true; montarCardapio(); } };
  requestAnimationFrame(() => setTimeout(montarUmaVez, 0));
  setTimeout(montarUmaVez, 120); // garantia: abas em segundo plano não disparam requestAnimationFrame
})();
