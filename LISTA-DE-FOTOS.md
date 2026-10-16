# Lista de fotos — Chico Brasa & Grill

Checklist das fotos do cardápio para gerar com IA (ChatGPT ou Gemini). Marque `[x]` quando a foto estiver salva em `fotos-originais/`.

**Total:** 72 fotos essenciais + 35 opcionais + 19 fotos de categoria.
Itens com prioridade "não" (refrigerantes, sucos, água, café e o item "Adicionais") ficam só com texto e não aparecem aqui.

## Como usar

1. Copie o prompt do item (o texto depois do `>`) e cole no ChatGPT ou no Gemini.
2. Baixe a imagem e salve com o **nome exato** indicado (pode ser `.png` ou `.jpg`; maiúsculas não importam).
   - Pratos e bebidas: na pasta `fotos-originais/`
   - Categorias: na pasta `fotos-originais/categorias/`
3. No terminal, dentro da pasta do projeto, rode `npm run fotos` (na primeira vez, rode `npm install` antes).
   O script recorta em quadrado, gera as versões leves em WebP e avisa se algum nome de arquivo estiver errado.

**Dicas para o cardápio ficar uniforme**

- Gere todas as fotos na **mesma conversa**, para a IA manter o estilo (mesma mesa, mesma luz).
- Se vier com texto, logotipo, mãos ou pessoas, peça de novo: "refaça sem texto e sem mãos".
- Peça sempre o formato **quadrado (1:1)**. Se a IA entregar retangular, o script corta o centro.
- Tamanho ideal: **1200×1200 ou maior** (para categorias, 400×400 ou maior).
- **Cervejas e vinhos:** a IA não reproduz o rótulo verdadeiro. Para esses itens, uma foto real do produto (tirada no restaurante ou enviada pelo fornecedor) fica mais honesta e bonita. Use o mesmo nome de arquivo.
- **Parmegiana de Carne com Talharim:** confirme com o cliente se é talharim ou penne antes de gerar (ver "Pendências com o cliente" no README).
- As fotos são ilustrativas — o rodapé do site já avisa isso.

---

## 1. Destaques da casa (faça primeiro)

Estes aparecem em tamanho grande no topo da aba Comidas.

- [ ] **Ceviche Clássico** · essencial · arquivo: `fotos-originais/ceviche-classico.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Ceviche Clássico: cubos de peixe branco marinados no limão com cebola roxa em fatias finas, coentro e pimenta, com milho crocante e cubos de batata-doce. Servido em prato fundo de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Pipoquinha de Queijo Coalho** · essencial · arquivo: `fotos-originais/pipoquinha-de-queijo-coalho.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Pipoquinha de Queijo Coalho: cubinhos de queijo coalho empanados na farinha panko, dourados e crocantes, com um potinho de melaço de cana. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Medalhão de Filé Mignon ao Molho Gorgonzola** · essencial · arquivo: `fotos-originais/medalhao-de-file-mignon-ao-molho-gorgonzola.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Medalhão de Filé Mignon ao Molho Gorgonzola: medalhão alto de filé mignon coberto com molho cremoso de gorgonzola, com arroz biro-biro e legumes salteados. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Costelinha Suína ao Barbecue** · essencial · arquivo: `fotos-originais/costelinha-suina-ao-barbecue.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Costelinha Suína ao Barbecue: costelinha suína defumada, brilhante de molho barbecue, com farofa crocante ao lado. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Combo Quarteto Dom Chico** · essencial · arquivo: `fotos-originais/combo-quarteto-dom-chico.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Combo Quarteto Dom Chico: picanha fatiada, linguiça suína, bombom de alcatra e costelinha suína grelhados, com arroz com brócolis, farofa de alho crocante, batata frita e vinagrete. Servido em tábua de madeira rústica grande sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Combo Família** · essencial · arquivo: `fotos-originais/combo-familia-serve-4.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Combo Família: 700 g de picanha fatiada coberta com queijo derretido, com arroz biro-biro, farofa de banana, batata frita e vinagrete, porção farta para 4 pessoas. Servido em tábua de madeira rústica grande sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Banana Flambada** · essencial · arquivo: `fotos-originais/banana-flambada.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Banana Flambada: bananas flambadas com conhaque e laranja, com uma bola de sorvete de creme e canela polvilhada. Servido em prato de sobremesa de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Chopp Dom Chico** · essencial · arquivo: `fotos-originais/chopp-dom-chico.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Chopp Dom Chico: chopp lager dourado e cristalino com colarinho cremoso, copo suado de tão gelado. Servido em tulipa de chopp sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

---

## 2. Pratos e bebidas, por categoria

Os destaques acima não se repetem aqui.

### Entradas e Petiscos · Comidas (16)

- [ ] **Calabresa Acebolada com Batata Frita** · essencial · arquivo: `fotos-originais/calabresa-acebolada-com-batata-frita.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Calabresa Acebolada com Batata Frita: rodelas de calabresa grelhada com cebola acebolada dourada e brilhante, ao lado de batatas fritas palito crocantes. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Batata Tradicional** · essencial · arquivo: `fotos-originais/batata-tradicional.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Batata Tradicional: porção generosa de batatas fritas palito, douradas e crocantes, levemente salgadas. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Batata Rústica** · essencial · arquivo: `fotos-originais/batata-rustica.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Batata Rústica: batatas rústicas com casca cortadas em gomos, douradas e polvilhadas com páprica doce. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Batata com Cheddar e Bacon** · essencial · arquivo: `fotos-originais/batata-com-cheddar-e-bacon.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Batata com Cheddar e Bacon: batatas fritas palito cobertas com cheddar cremoso escorrendo e bacon crocante picado por cima. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Batata com Parmesão e Ervas** · essencial · arquivo: `fotos-originais/batata-com-parmesao-e-ervas.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Batata com Parmesão e Ervas: batatas fritas palito finalizadas com parmesão ralado e ervas frescas picadas (manjericão, salsa e alecrim). Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Frango a Passarinho** · essencial · arquivo: `fotos-originais/frango-a-passarinho.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Frango a Passarinho: pedaços de frango a passarinho bem dourados e crocantes, com alho frito e salsinha picada. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Bolinho de Bacalhau** · essencial · arquivo: `fotos-originais/bolinho-de-bacalhau.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Bolinho de Bacalhau: 7 bolinhos de bacalhau dourados e crocantes, um deles partido ao meio mostrando o recheio, com rodelas de limão. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Porção de Pastéis** · essencial · arquivo: `fotos-originais/porcao-de-pasteis.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Porção de Pastéis: 6 pastéis fritos dourados e crocantes, um deles aberto mostrando o recheio de queijo derretido. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Panceta Suína** · essencial · arquivo: `fotos-originais/panceta-suina.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Panceta Suína: cubos de panceta suína com a pele em pururuca estufada e crocante, com mandioca frita ao lado. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Mandioca Frita** · essencial · arquivo: `fotos-originais/mandioca-frita.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Mandioca Frita: mandioca frita em palitos grossos, crocante por fora e macia por dentro, com um potinho de maionese da casa. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Iscas de Tilápia à Milanesa** · essencial · arquivo: `fotos-originais/iscas-de-tilapia-a-milanesa.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Iscas de Tilápia à Milanesa: iscas de tilápia empanadas à milanesa, douradas e crocantes, com um potinho de molho tártaro e meia rodela de limão. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Caldo Verde** · essencial · arquivo: `fotos-originais/caldo-verde.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Caldo Verde: caldo verde cremoso de batata com couve manteiga cortada fininha e cheiro-verde por cima, com torradas ao lado. Servido em cumbuca de barro sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Caldo de Feijão** · essencial · arquivo: `fotos-originais/caldo-de-feijao.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Caldo de Feijão: caldo de feijão encorpado com bacon crocante e cheiro-verde por cima, com torradas ao lado. Servido em cumbuca de barro sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Isca de Filé ao Molho Gorgonzola** · essencial · arquivo: `fotos-originais/isca-de-file-ao-molho-gorgonzola.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Isca de Filé ao Molho Gorgonzola: iscas de filé mignon ao molho cremoso de gorgonzola, com torradas ao lado. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Salada Verde da Casa** · essencial · arquivo: `fotos-originais/salada-verde-da-casa.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Salada Verde da Casa: mix de alface crespa e roxa com cebola roxa, tomates-cereja e parmesão ralado. Servido em bowl de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Salada Caesar** · essencial · arquivo: `fotos-originais/salada-caesar.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Salada Caesar: alface americana com lascas de filé de frango grelhado, lascas de parmesão e molho Caesar. Servido em bowl de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Pratos Executivos 300g · Comidas (3)

- [ ] **Executivo de Carne** · essencial · arquivo: `fotos-originais/executivo-de-carne.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Executivo de Carne: prato executivo com 300 g de carne grelhada na parrilla e fatiada, arroz biro-biro, batata frita e molho chimichurri. Servido em prato raso de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Executivo de Frango** · essencial · arquivo: `fotos-originais/executivo-de-frango.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Executivo de Frango: prato executivo com 300 g de filé de frango grelhado na parrilla, arroz branco, legumes salteados e vinagrete. Servido em prato raso de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Executivo de Tilápia** · essencial · arquivo: `fotos-originais/executivo-de-tilapia.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Executivo de Tilápia: prato executivo com 300 g de filé de tilápia grelhado, arroz com brócolis, purê de batata e vinagrete. Servido em prato raso de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Pratos com Filé Mignon · Comidas (5)

- [ ] **Medalhão de Filé Mignon ao Molho Madeira** · essencial · arquivo: `fotos-originais/medalhao-de-file-mignon-ao-molho-madeira.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Medalhão de Filé Mignon ao Molho Madeira: medalhão alto de filé mignon ao molho madeira com cogumelos, acompanhado de arroz à piemontese. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Picadinho Dom Chico** · essencial · arquivo: `fotos-originais/picadinho-dom-chico.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Picadinho Dom Chico: picadinho de filé mignon ao molho madeira, com arroz branco, banana frita e farofa de ovo. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Strogonoff de Carne** · essencial · arquivo: `fotos-originais/strogonoff-de-carne.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Strogonoff de Carne: strogonoff de carne cremoso, com arroz branco e batata palha. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Parmegiana de Carne Clássica** · essencial · arquivo: `fotos-originais/parmegiana-de-carne-classica.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Parmegiana de Carne Clássica: filé mignon à parmegiana gratinado com queijo derretido e molho de tomate, com arroz branco e batata frita. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Parmegiana de Carne com Talharim** · essencial · arquivo: `fotos-originais/parmegiana-de-carne-com-talharim.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Parmegiana de Carne com Talharim: filé mignon à parmegiana gratinado com queijo derretido e molho de tomate, acompanhado de talharim ao molho branco. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Pescados · Comidas (2)

- [ ] **Tilápia com Molho de Alcaparras** · essencial · arquivo: `fotos-originais/tilapia-com-molho-de-alcaparras.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Tilápia com Molho de Alcaparras: filé de tilápia grelhado com molho de alcaparras, arroz branco e legumes. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Salmão ao Molho de Maracujá** · essencial · arquivo: `fotos-originais/salmao-ao-molho-de-maracuja.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Salmão ao Molho de Maracujá: posta de salmão grelhado com molho de maracujá com sementes, arroz branco e purê de mandioquinha. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Pratos com Frango · Comidas (4)

- [ ] **Filé de Frango ao Molho de Mostarda** · essencial · arquivo: `fotos-originais/file-de-frango-ao-molho-de-mostarda.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Filé de Frango ao Molho de Mostarda: filé de frango grelhado ao molho de mostarda, com arroz branco e legumes salteados. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Strogonoff de Frango** · essencial · arquivo: `fotos-originais/strogonoff-de-frango.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Strogonoff de Frango: strogonoff de frango cremoso, com arroz branco e batata palha. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Parmegiana de Frango Clássica** · essencial · arquivo: `fotos-originais/parmegiana-de-frango-classica.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Parmegiana de Frango Clássica: filé de frango à parmegiana gratinado com queijo derretido e molho de tomate, com arroz branco e batata frita. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Parmegiana de Frango com Talharim** · essencial · arquivo: `fotos-originais/parmegiana-de-frango-com-talharim.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Parmegiana de Frango com Talharim: filé de frango à parmegiana gratinado com queijo derretido, acompanhado de talharim ao molho branco. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Costelinha e Feijoada · Comidas (2)

- [ ] **Feijoada para dois** · essencial · arquivo: `fotos-originais/feijoada-para-dois.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Feijoada para dois: feijoada farta com feijão preto, costelinha, carne de sol e calabresa, com arroz, rodelas de laranja e farofa em cumbucas ao lado, porção para duas pessoas. Servido em panela de barro sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Feijoada Individual** · essencial · arquivo: `fotos-originais/feijoada-individual.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Feijoada Individual: feijoada com feijão preto, costelinha, carne de sol e calabresa, com arroz, rodelas de laranja e farofa ao lado. Servido em cumbuca de barro sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Combos Parrilla · Comidas (7)

- [ ] **Combo Costelinha ao Molho Barbecue e Linguiça de Frango** · essencial · arquivo: `fotos-originais/combo-costelinha-ao-molho-barbecue-e-linguica-de-frango.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Combo Costelinha ao Molho Barbecue e Linguiça de Frango: costelinha suína ao molho barbecue e linguiça de frango grelhada, com arroz branco, farofa de ovos e purê de batata em potinhos. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Combo Chorizo** · essencial · arquivo: `fotos-originais/combo-chorizo.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Combo Chorizo: chorizo grelhado e fatiado, com farofa, vinagrete, arroz biro-biro e batata frita em potinhos. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Combo Bombom da Alcatra** · essencial · arquivo: `fotos-originais/combo-bombom-da-alcatra.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Combo Bombom da Alcatra: bombom de alcatra grelhado e fatiado mostrando o ponto rosado, com arroz biro-biro, vinagrete, farofa e batata frita. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Combo Família** · essencial · arquivo: `fotos-originais/combo-familia-serve-2.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Combo Família: 500 g de picanha fatiada coberta com queijo derretido, com arroz biro-biro, farofa de banana, batata frita e vinagrete, porção para 2 pessoas. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Combo de Linguiça Suína** · essencial · arquivo: `fotos-originais/combo-de-linguica-suina.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Combo de Linguiça Suína: linguiça suína grelhada em gomos, com arroz biro-biro, batata frita, vinagrete e farofa. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Combo Carne de Sol** · essencial · arquivo: `fotos-originais/combo-carne-de-sol.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Combo Carne de Sol: carne de sol angus grelhada e fatiada, com arroz branco, mandioca frita e salada verde. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Combo de Flat Iron 500g** · essencial · arquivo: `fotos-originais/combo-de-flat-iron-500g.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Combo de Flat Iron 500g: flat iron grelhado e fatiado mostrando o ponto rosado, com arroz branco, farofa de ovos, mandioca frita e molho chimichurri. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Espetos Premium · Comidas (6)

- [ ] **Espeto Filé de Angus** · essencial · arquivo: `fotos-originais/espeto-file-de-angus.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Espeto Filé de Angus: espeto de cubos de filé bovino grelhados na brasa, suculentos, com farofa da casa. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Espeto de Frango** · essencial · arquivo: `fotos-originais/espeto-de-frango.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Espeto de Frango: espeto de cubos de frango grelhados na brasa, dourados e suculentos, com farofa da casa. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Espeto de Frango/Bacon** · essencial · arquivo: `fotos-originais/espeto-de-frango-bacon.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Espeto de Frango/Bacon: espeto de frango envolto em bacon grelhado na brasa, com farofa da casa. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Espeto Linguiça de Frango** · essencial · arquivo: `fotos-originais/espeto-linguica-de-frango.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Espeto Linguiça de Frango: espeto de linguiça de frango grelhada na brasa, com farofa da casa. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Espeto Linguiça c/ Pimenta** · essencial · arquivo: `fotos-originais/espeto-linguica-c-pimenta.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Espeto Linguiça c/ Pimenta: espeto de linguiça suína apimentada grelhada na brasa, com pimentas dedo-de-moça ao lado e farofa da casa. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Espeto Linguiça s/ Pimenta** · essencial · arquivo: `fotos-originais/espeto-linguica-s-pimenta.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Espeto Linguiça s/ Pimenta: espeto de linguiça suína grelhada na brasa, dourada, com farofa da casa. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Acompanhamentos · Comidas (6)

- [ ] **Feijão** · opcional · arquivo: `fotos-originais/feijao.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Feijão: feijão preto cremoso e brilhante. Servido em cumbuca de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Arroz Branco** · opcional · arquivo: `fotos-originais/arroz-branco.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Arroz Branco: arroz branco soltinho. Servido em cumbuca de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Arroz Biro-Biro** · opcional · arquivo: `fotos-originais/arroz-biro-biro.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Arroz Biro-Biro: arroz biro-biro com batata palha, bacon, ovo e cebolinha. Servido em cumbuca de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Mandioca** · opcional · arquivo: `fotos-originais/mandioca.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Mandioca: porção de mandioca macia e dourada. Servido em cumbuca de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Vinagrete** · opcional · arquivo: `fotos-originais/vinagrete.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Vinagrete: vinagrete de cebola branca e roxa, pimentão e tomate em cubinhos. Servido em cumbuca de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Legumes Salteados** · opcional · arquivo: `fotos-originais/legumes-salteados.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Legumes Salteados: brócolis, couve-flor, chuchu, vagem e cenoura salteados e brilhantes. Servido em cumbuca de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Hambúrgueres · Comidas (4)

- [ ] **Braseiro Burguer** · essencial · arquivo: `fotos-originais/braseiro-burguer.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Braseiro Burguer: hambúrguer artesanal de 180 g no pão brioche, com queijo coalho, alface, tomate e molho especial. Servido em tábua de madeira com papel manteiga sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Braseiro Burguer Bacon** · essencial · arquivo: `fotos-originais/braseiro-burguer-bacon.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Braseiro Burguer Bacon: hambúrguer artesanal de 180 g no pão brioche, com queijo coalho, duas fatias de bacon crocante, alface, tomate e molho especial. Servido em tábua de madeira com papel manteiga sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Braseiro Agridoce** · essencial · arquivo: `fotos-originais/braseiro-agridoce.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Braseiro Agridoce: hambúrguer artesanal de 180 g no pão brioche, com queijo coalho grelhado, geleia de pimenta, cebola caramelizada, alface e tomate. Servido em tábua de madeira com papel manteiga sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Braseiro Australiano** · essencial · arquivo: `fotos-originais/braseiro-australiano.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Braseiro Australiano: hambúrguer artesanal de 180 g no pão australiano escuro, com mussarela derretida, cebola crispy, alface, tomate e molho barbecue. Servido em tábua de madeira com papel manteiga sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Sobremesas · Comidas (4)

- [ ] **Mousse de Limão ou Maracujá** · essencial · arquivo: `fotos-originais/mousse-de-limao-ou-maracuja.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Mousse de Limão ou Maracujá: duas mousses lado a lado, uma de limão e outra de maracujá, cremosas e aeradas. Servido em taças de vidro baixas sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Brownie com Sorvete** · essencial · arquivo: `fotos-originais/brownie-com-sorvete.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Brownie com Sorvete: brownie de chocolate artesanal com uma bola de sorvete de creme, calda e raspas de chocolate. Servido em prato de sobremesa de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Banoffee** · essencial · arquivo: `fotos-originais/banoffee.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Banoffee: fatia de banoffee com base de biscoito, doce de leite, rodelas de banana, chantilly e raspas de chocolate. Servido em prato de sobremesa de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Pudim Doce de Leite** · essencial · arquivo: `fotos-originais/pudim-doce-de-leite.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Pudim Doce de Leite: pudim de doce de leite liso e brilhante, com calda escorrendo pelas laterais. Servido em prato de sobremesa de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Chopps · Bebidas (3)

- [ ] **Chopp Poder e Punk** · essencial · arquivo: `fotos-originais/chopp-poder-e-punk.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Chopp Poder e Punk: chopp Double IPA âmbar-alaranjado, levemente turvo, com colarinho cremoso. Servido em tulipa de chopp sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Chopp Brahma** · essencial · arquivo: `fotos-originais/chopp-brahma.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Chopp Brahma: chopp claro dourado com colarinho cremoso, copo suado de tão gelado. Servido em tulipa de chopp sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Chopp Schornstein** · essencial · arquivo: `fotos-originais/chopp-schornstein.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Chopp Schornstein: chopp IPA de cor âmbar escura com colarinho cremoso. Servido em tulipa de chopp sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Drinks · Bebidas (8)

- [ ] **Caipirinha** · essencial · arquivo: `fotos-originais/caipirinha.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Caipirinha: caipirinha de limão com gelo picado e pedaços de limão. Servido em copo baixo de vidro grosso sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Margarita** · essencial · arquivo: `fotos-originais/margarita.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Margarita: margarita gelada com borda de sal e rodela de limão. Servido em taça de margarita sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Caipiroska Nacional** · essencial · arquivo: `fotos-originais/caipiroska-nacional.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Caipiroska Nacional: caipiroska de morango com gelo picado e pedaços da fruta. Servido em copo baixo de vidro grosso sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Caipiroska Importada** · essencial · arquivo: `fotos-originais/caipiroska-importada.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Caipiroska Importada: caipiroska de maracujá com gelo picado e sementes da fruta, visual sofisticado. Servido em copo baixo de cristal sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Mojito** · essencial · arquivo: `fotos-originais/mojito.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Mojito: mojito com folhas de hortelã, rodelas de limão, gelo e água com gás. Servido em copo alto (long drink) sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Aperol** · essencial · arquivo: `fotos-originais/aperol.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Aperol: Aperol spritz laranja vibrante com gelo e rodela de laranja. Servido em taça grande de vinho sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Gin Tropical** · essencial · arquivo: `fotos-originais/gin-tropical.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Gin Tropical: gin tropical alaranjado com gelo e rodela de laranja. Servido em taça bojuda de gin sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Motorista da Vez (sem álcool)** · essencial · arquivo: `fotos-originais/motorista-da-vez-sem-alcool.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Motorista da Vez (sem álcool): drink sem álcool colorido de xarope de frutas, limão e água com gás, com gelo e hortelã. Servido em copo alto (long drink) sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Cervejas Especiais · Bebidas (11)

- [ ] **Chope Schornstein IPA 330ml** · opcional · arquivo: `fotos-originais/chope-schornstein-ipa-330ml.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Chope Schornstein IPA 330ml: cerveja IPA levemente âmbar com espuma cremosa, com a embalagem de 330 ml ao lado (rótulo sem texto legível). Servido em copo tulipa de cerveja sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Chope Colombina Puro Malte 330ml** · opcional · arquivo: `fotos-originais/chope-colombina-puro-malte-330ml.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Chope Colombina Puro Malte 330ml: cerveja lager puro malte dourada e cristalina com espuma, com a embalagem de 330 ml ao lado (rótulo sem texto legível). Servido em copo caldereta sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Schornstein APA 500ml** · opcional · arquivo: `fotos-originais/schornstein-apa-500ml.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Schornstein APA 500ml: cerveja APA levemente âmbar com espuma cremosa, com a garrafa de 500 ml ao lado (rótulo sem texto legível). Servido em copo pint sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Schornstein IPA 500ml** · opcional · arquivo: `fotos-originais/schornstein-ipa-500ml.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Schornstein IPA 500ml: cerveja IPA dourada-clara com espuma cremosa, com a garrafa de 500 ml ao lado (rótulo sem texto legível). Servido em copo pint sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Criolipa IPA Tropical 355ml** · opcional · arquivo: `fotos-originais/criolipa-ipa-tropical-355ml.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Criolipa IPA Tropical 355ml: cerveja IPA tropical dourada e levemente turva, com a embalagem de 355 ml ao lado (rótulo sem texto legível). Servido em copo tulipa de cerveja sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Roleta Russa IPA 355ml** · opcional · arquivo: `fotos-originais/roleta-russa-ipa-355ml.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Roleta Russa IPA 355ml: cerveja IPA americana dourada com espuma cremosa, com a embalagem de 355 ml ao lado (rótulo sem texto legível). Servido em copo tulipa de cerveja sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Roleta Russa Easy IPA 355ml** · opcional · arquivo: `fotos-originais/roleta-russa-easy-ipa-355ml.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Roleta Russa Easy IPA 355ml: cerveja Easy IPA amarelo-palha, leve, com espuma, com a embalagem de 355 ml ao lado (rótulo sem texto legível). Servido em copo tulipa de cerveja sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Roleta Russa IPA 500ml** · opcional · arquivo: `fotos-originais/roleta-russa-ipa-500ml.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Roleta Russa IPA 500ml: cerveja IPA americana dourada com espuma cremosa, com a garrafa de 500 ml ao lado (rótulo sem texto legível). Servido em copo pint sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Colombina Puro Malte 600ml** · opcional · arquivo: `fotos-originais/colombina-puro-malte-600ml.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Colombina Puro Malte 600ml: cerveja lager puro malte cristalina e dourada, com a garrafa de 600 ml ao lado (rótulo sem texto legível). Servido em copo caldereta sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Colombina IPA 600ml** · opcional · arquivo: `fotos-originais/colombina-ipa-600ml.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Colombina IPA 600ml: cerveja IPA cor de caramelo com espuma cremosa, com a garrafa de 600 ml ao lado (rótulo sem texto legível). Servido em copo pint sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Colombina Session IPA 600ml** · opcional · arquivo: `fotos-originais/colombina-session-ipa-600ml.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Colombina Session IPA 600ml: cerveja Session IPA dourada e leve com espuma, com a garrafa de 600 ml ao lado (rótulo sem texto legível). Servido em copo pint sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Espumantes · Carta de Vinhos (3)

- [ ] **1913 Sparkling Brut** · opcional · arquivo: `fotos-originais/1913-sparkling-brut.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de 1913 Sparkling Brut: espumante brut dourado-claro com perlage fina, com a garrafa ao lado (rótulo sem texto legível). Servido em taça flute sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **1913 Sparkling Brut Moscatel** · opcional · arquivo: `fotos-originais/1913-sparkling-brut-moscatel.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de 1913 Sparkling Brut Moscatel: espumante moscatel dourado com perlage fina, com a garrafa ao lado (rótulo sem texto legível). Servido em taça flute sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **1913 Sparkling Brut Rosé** · opcional · arquivo: `fotos-originais/1913-sparkling-brut-rose.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de 1913 Sparkling Brut Rosé: espumante rosé cor de salmão com perlage fina, com a garrafa ao lado (rótulo sem texto legível). Servido em taça flute sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Vinhos Brancos · Carta de Vinhos (3)

- [ ] **Donoso Estate Chardonnay** · opcional · arquivo: `fotos-originais/donoso-estate-chardonnay.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Donoso Estate Chardonnay: vinho branco Chardonnay dourado, com a garrafa ao lado (rótulo sem texto legível). Servido em taça de vinho branco sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Ribera Reserva Sauvignon Blanc** · opcional · arquivo: `fotos-originais/ribera-reserva-sauvignon-blanc.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Ribera Reserva Sauvignon Blanc: vinho branco Sauvignon Blanc amarelo-palha claro, com a garrafa ao lado (rótulo sem texto legível). Servido em taça de vinho branco sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Luz Vinho Verde** · opcional · arquivo: `fotos-originais/luz-vinho-verde.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Luz Vinho Verde: vinho verde português, branco bem claro e levemente frisante, com a garrafa ao lado (rótulo sem texto legível). Servido em taça de vinho branco sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Vinhos Rosés · Carta de Vinhos (2)

- [ ] **Cuvée Sidoine Rosé** · opcional · arquivo: `fotos-originais/cuvee-sidoine-rose.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Cuvée Sidoine Rosé: vinho rosé rosa-claro estilo provençal, com a garrafa ao lado (rótulo sem texto legível). Servido em taça de vinho sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **State Spring 4 Estaciones Rose** · opcional · arquivo: `fotos-originais/state-spring-4-estaciones-rose.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de State Spring 4 Estaciones Rose: vinho rosé de Malbec, rosa intenso, com a garrafa ao lado (rótulo sem texto legível). Servido em taça de vinho sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

### Vinhos Tintos · Carta de Vinhos (10)

- [ ] **Le Petit Maynne** · opcional · arquivo: `fotos-originais/le-petit-maynne.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Le Petit Maynne: vinho tinto de Bordeaux, cor rubi profunda, com a garrafa ao lado (rótulo sem texto legível). Servido em taça bojuda de vinho tinto sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Governato Toscana Rosso** · opcional · arquivo: `fotos-originais/governato-toscana-rosso.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Governato Toscana Rosso: vinho tinto toscano de Sangiovese, rubi intenso, com a garrafa ao lado (rótulo sem texto legível). Servido em taça bojuda de vinho tinto sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Collezione Chianti** · opcional · arquivo: `fotos-originais/collezione-chianti.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Collezione Chianti: vinho tinto Chianti, rubi brilhante, com a garrafa ao lado (rótulo sem texto legível). Servido em taça bojuda de vinho tinto sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Rossi Vulcanici Primitivo Puglia** · opcional · arquivo: `fotos-originais/rossi-vulcanici-primitivo-puglia.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Rossi Vulcanici Primitivo Puglia: vinho tinto Primitivo encorpado, violáceo escuro, com a garrafa ao lado (rótulo sem texto legível). Servido em taça bojuda de vinho tinto sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Yllera Roble 9 meses** · opcional · arquivo: `fotos-originais/yllera-roble-9-meses.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Yllera Roble 9 meses: vinho tinto espanhol de Tempranillo, rubi-violáceo, com a garrafa ao lado (rótulo sem texto legível). Servido em taça bojuda de vinho tinto sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Esperança Regional Alentejo** · opcional · arquivo: `fotos-originais/esperanca-regional-alentejo.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Esperança Regional Alentejo: vinho tinto do Alentejo, rubi intenso, com a garrafa ao lado (rótulo sem texto legível). Servido em taça bojuda de vinho tinto sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Badoxa Douro DOC Tinto** · opcional · arquivo: `fotos-originais/badoxa-douro-doc-tinto.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Badoxa Douro DOC Tinto: vinho tinto do Douro, rubi profundo, com a garrafa ao lado (rótulo sem texto legível). Servido em taça bojuda de vinho tinto sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Corazón Del Indio** · opcional · arquivo: `fotos-originais/corazon-del-indio.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Corazón Del Indio: vinho tinto chileno encorpado, rubi muito escuro, com a garrafa ao lado (rótulo sem texto legível). Servido em taça bojuda de vinho tinto sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Casa Donoso Estate Blend** · opcional · arquivo: `fotos-originais/casa-donoso-estate-blend.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Casa Donoso Estate Blend: vinho tinto chileno de corte, rubi, com a garrafa ao lado (rótulo sem texto legível). Servido em taça bojuda de vinho tinto sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Bourbon Barrel Aged Cabernet Sauvignon** · opcional · arquivo: `fotos-originais/bourbon-barrel-aged-cabernet-sauvignon.png`
  > Fotografia profissional de gastronomia, ultrarrealista, de Bourbon Barrel Aged Cabernet Sauvignon: vinho tinto Cabernet Sauvignon envelhecido em barril de carvalho, rubi escuro, com a garrafa ao lado (rótulo sem texto legível) e um barril desfocado ao fundo. Servido em taça bojuda de vinho tinto sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, prato centralizado ocupando ~70% do quadro, formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

---

## 3. Fotos das categorias (19)

Aparecem nos círculos da fileira de categorias, no topo de cada aba. Ficam recortadas em círculo, então o assunto precisa estar bem no centro.

- [ ] **Entradas e Petiscos** · Comidas · arquivo: `fotos-originais/categorias/entradas.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Entradas e Petiscos": petiscos variados — batatas fritas douradas, bolinhos de bacalhau e calabresa acebolada. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Pratos Executivos 300g** · Comidas · arquivo: `fotos-originais/categorias/executivos.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Pratos Executivos 300g": prato executivo com carne grelhada fatiada, arroz, batata frita e vinagrete. Servido em prato raso de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Pratos com Filé Mignon** · Comidas · arquivo: `fotos-originais/categorias/file-mignon.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Pratos com Filé Mignon": medalhão alto de filé mignon ao molho madeira com cogumelos. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Pescados** · Comidas · arquivo: `fotos-originais/categorias/pescados.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Pescados": posta de salmão grelhado com molho de maracujá. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Pratos com Frango** · Comidas · arquivo: `fotos-originais/categorias/frango.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Pratos com Frango": filé de frango à parmegiana gratinado com queijo derretido. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Costelinha e Feijoada** · Comidas · arquivo: `fotos-originais/categorias/suinos.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Costelinha e Feijoada": costelinha suína defumada brilhante de molho barbecue. Servido em prato de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Combos Parrilla** · Comidas · arquivo: `fotos-originais/categorias/combos.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Combos Parrilla": churrasco com picanha fatiada, linguiça e costelinha grelhadas. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Espetos Premium** · Comidas · arquivo: `fotos-originais/categorias/espetos.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Espetos Premium": espetos de carne, frango e linguiça grelhados na brasa. Servido em tábua de madeira rústica sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Acompanhamentos** · Comidas · arquivo: `fotos-originais/categorias/acompanhamentos.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Acompanhamentos": cumbucas pequenas com arroz biro-biro, feijão preto, vinagrete e farofa. Servido em cumbucas de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Hambúrgueres** · Comidas · arquivo: `fotos-originais/categorias/hamburgueres.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Hambúrgueres": hambúrguer artesanal alto no pão brioche com queijo derretido. Servido em tábua de madeira com papel manteiga sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Sobremesas** · Comidas · arquivo: `fotos-originais/categorias/sobremesas.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Sobremesas": banana flambada com bola de sorvete de creme e canela. Servido em prato de sobremesa de cerâmica escura sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Refrigerantes, Sucos e Outros** · Bebidas · arquivo: `fotos-originais/categorias/nao-alcoolicos.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Refrigerantes, Sucos e Outros": refrigerante com gelo e suco natural de laranja. Servido em copo alto com gelo e jarra de vidro sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Chopps** · Bebidas · arquivo: `fotos-originais/categorias/chopps.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Chopps": chopp gelado dourado com colarinho cremoso. Servido em tulipa de chopp sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Drinks** · Bebidas · arquivo: `fotos-originais/categorias/drinks.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Drinks": caipirinha de limão e mojito lado a lado, com gelo. Servido em copos de drink sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Cervejas Especiais** · Bebidas · arquivo: `fotos-originais/categorias/cervejas.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Cervejas Especiais": cerveja artesanal IPA âmbar com espuma cremosa. Servido em copo tulipa de cerveja sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Espumantes** · Carta de Vinhos · arquivo: `fotos-originais/categorias/espumantes.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Espumantes": duas taças de espumante com perlage fina. Servido em taças flute sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Vinhos Brancos** · Carta de Vinhos · arquivo: `fotos-originais/categorias/vinhos-brancos.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Vinhos Brancos": vinho branco dourado com a garrafa ao lado (rótulo sem texto legível). Servido em taça de vinho branco sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Vinhos Rosés** · Carta de Vinhos · arquivo: `fotos-originais/categorias/vinhos-roses.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Vinhos Rosés": vinho rosé rosa-claro com a garrafa ao lado (rótulo sem texto legível). Servido em taça de vinho sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

- [ ] **Vinhos Tintos** · Carta de Vinhos · arquivo: `fotos-originais/categorias/vinhos-tintos.png`
  > Fotografia profissional de gastronomia, ultrarrealista, para a categoria "Vinhos Tintos": vinho tinto rubi com a garrafa ao lado (rótulo sem texto legível). Servido em taça bojuda de vinho tinto sobre mesa de madeira rústica escura, fundo escuro desfocado com leve brilho de brasa, luz quente lateral, ângulo de 45°, assunto centralizado ocupando ~60% do quadro com folga nas bordas (a imagem será recortada em círculo), formato quadrado 1:1, sem texto, sem logotipos, sem pessoas, sem mãos.

---

## 4. Opcional: logo, capa e prévia de link

- [x] **Logo** · arquivo: `fotos-originais/logo.webp` (logo oficial, fundo transparente). O `npm run fotos` gera `img/logo.webp`.
- [ ] **Capa do topo** · arquivo: `fotos-originais/capa.jpg` (horizontal, de preferência 1600×600 ou maior). Uma foto real da parrilla ou do salão é o ideal.
  > Fotografia profissional ultrarrealista de uma parrilla com carnes grelhando sobre brasas incandescentes, chamas baixas e faíscas subindo, ambiente escuro com luz quente laranja, formato horizontal panorâmico, sem texto, sem logotipos, sem pessoas, sem mãos.
- [ ] **Prévia de link (WhatsApp)** · arquivo: `img/og.jpg` (1200×630). Pode ser a capa com o logo por cima.
