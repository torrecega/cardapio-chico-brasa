# Cardápio digital — Chico Brasa & Grill

Cardápio no estilo iFood (com fotos, abas, busca e lista do pedido) para o **Chico Brasa & Grill**, Jardim Botânico, Brasília-DF. O cliente abre pelo QR code da mesa, no celular.

É um site **estático**: só HTML, CSS e JavaScript, sem framework, sem servidor e sem banco de dados. A única coisa que vem da internet são as fontes do Google Fonts.

```
index.html                 a página
css/styles.css             o visual
js/app.js                  o funcionamento (abas, busca, painel do prato, lista)
dados/cardapio.js          TODOS os textos, preços e links  ← é aqui que você edita
dados/fotos.js             lista das fotos que existem (gerado pelo "npm run fotos")
img/                       fotos já otimizadas (geradas pelo script) + favicon
fotos-originais/           onde você coloca as fotos geradas por IA
scripts/otimizar-fotos.mjs script que otimiza as fotos
referencia/                o JSON original, só para consulta
LISTA-DE-FOTOS.md          checklist das fotos com os prompts prontos
```

---

## 1. Como abrir o site

### No computador

**Jeito mais rápido:** dê dois cliques no `index.html`. Ele abre no navegador e funciona sem servidor.

**Jeito recomendado (igual ao site publicado):** com o [Node.js](https://nodejs.org) instalado, abra o terminal na pasta do projeto e rode:

```bash
npx serve .
```

Depois abra o endereço que aparecer (normalmente `http://localhost:3000`). Para parar, aperte `Ctrl + C` no terminal.

### No celular (na mesma rede Wi-Fi do computador)

1. Rode `npx serve .` no computador, como acima.
2. O terminal mostra uma linha **Network**, por exemplo `http://192.168.0.15:3000`. (Se não mostrar, rode `ipconfig` no Windows e procure "Endereço IPv4".)
3. No celular, conectado ao **mesmo Wi-Fi**, abra esse endereço no navegador.
4. Não abriu? O Firewall do Windows pode estar bloqueando: quando ele perguntar, permita o Node.js em "Redes privadas".

---

## 2. Como mudar um preço, um nome ou uma descrição

Tudo fica em **`dados/cardapio.js`**. Abra com um editor de código (o [VS Code](https://code.visualstudio.com) é gratuito e aponta erros de digitação) e use `Ctrl + F` para achar o item.

Exemplo — a Batata Tradicional:

```js
{
  "id": "batata-tradicional",
  "nome": "Batata Tradicional",
  "descricao": "Porção de Batata Tradicional macia e crocante!",
  "precos": [
    {
      "rotulo": "Pequena",
      "valor": 18.9
    },
    {
      "rotulo": "Grande",
      "valor": 29.9
    }
  ],
  ...
}
```

Para a Grande passar a custar R$ 32,90, troque `29.9` por `32.9`. Salve e recarregue a página.

Regras importantes:

- **Preço usa ponto**, não vírgula: `32.9` = R$ 32,90. Não escreva "R$".
- Textos ficam **entre aspas**. Se precisar de aspas dentro do texto, use aspas simples: `"Chopp 'da casa'"`.
- **Não mude o `"id"`.** Ele é o nome do arquivo da foto e o endereço do item (ex.: `.../#batata-tradicional`).
- Cuidado com as **vírgulas** entre os campos e entre os itens. Se a página mostrar "Não foi possível carregar o cardápio", quase sempre é uma vírgula ou uma aspa faltando — desfaça a última alteração (`Ctrl + Z`).
- Item com um preço só: `"rotulo": null`. Item com variações: um bloco para cada (ex.: 300ml, 500ml, 1 litro).
- A ordem dos itens no arquivo é a ordem em que aparecem no cardápio.

### Para adicionar um item novo

Copie um item parecido inteiro (do `{` até o `}`), cole logo abaixo dele, ponha uma vírgula entre os dois e mude o `id` para um nome único, sem acento e sem espaço (ex.: `"picanha-na-chapa"`).

### Configurações do rodapé

No começo de `dados/cardapio.js` existe o bloco `window.CONFIG`:

```js
window.CONFIG = {
  fotosIlustrativas: true,            // false esconde "Imagens meramente ilustrativas."
  credito: { texto: '', link: '' }    // crédito opcional, ex.: { texto: 'Site por Fulano', link: 'https://...' }
};
```

---

## 3. Como ocultar um item ou marcar como esgotado

Dentro das chaves `{ }` do item, acrescente uma linha (por exemplo, logo depois do `"id"`):

**Esgotado hoje** — o item continua aparecendo, com o selo "Esgotado hoje" e o botão de adicionar desativado:

```js
{
  "id": "feijoada-individual",
  "esgotado": true,
  "nome": "Feijoada Individual",
  ...
```

**Oculto** — o item some do cardápio, da busca e dos destaques:

```js
{
  "id": "salada-caesar",
  "oculto": true,
  "nome": "Salada Caesar",
  ...
```

Para voltar ao normal, apague a linha (ou troque `true` por `false`).

**Destaques da casa:** o carrossel do topo da aba Comidas mostra os itens com `"destaque_sugerido": true`. Para tirar um item de lá, troque para `false`; para incluir, troque para `true`.

---

## 4. Como adicionar as fotos

As fotos são geradas por IA (ChatGPT ou Gemini) com os prompts da **`LISTA-DE-FOTOS.md`**. Enquanto um prato não tem foto, o site mostra um espaço reservado elegante ("Foto em breve").

1. Gere a foto com o prompt e salve com o **nome exato** da lista, por exemplo `batata-tradicional.png` (png ou jpg).
2. Coloque o arquivo em **`fotos-originais/`** (pratos e bebidas) ou em **`fotos-originais/categorias/`** (fotos redondas das categorias).
3. **Só na primeira vez:** instale o [Node.js](https://nodejs.org) (versão LTS) e, no terminal, dentro da pasta do projeto, rode:

   ```bash
   npm install
   ```

4. Sempre que colocar fotos novas, rode:

   ```bash
   npm run fotos
   ```

   O script recorta em quadrado, cria a foto grande (1200×1200) e a miniatura (240×240) em WebP, atualiza `dados/fotos.js` e avisa:
   - arquivos com **nome errado** (e sugere o nome certo);
   - fotos pequenas demais;
   - quais itens essenciais ainda estão **sem foto**.

5. Recarregue a página.

Outras situações:

- **Trocar uma foto:** substitua o arquivo em `fotos-originais/` e rode `npm run fotos` de novo (ele só refaz o que mudou). Para refazer todas: `npm run fotos:forcar`.
- **Remover uma foto:** apague o original em `fotos-originais/` e os arquivos com o mesmo nome em `img/pratos/` e `img/pratos/thumb/`, depois rode `npm run fotos`.
- **Logo:** coloque o logo em `img/logo.png` (ou em `fotos-originais/logo.png`) e rode `npm run fotos`. Sem logo, o topo mostra o nome em letras.
- **Capa do topo:** coloque `fotos-originais/capa.jpg` e rode `npm run fotos`. Sem capa, o topo usa o gradiente de brasa.
- **Prévia no WhatsApp:** salve uma imagem 1200×630 como `img/og.jpg` (veja a observação na seção 5).

Quando cada foto aparece (campo `foto_prioridade` de cada item):

| Valor | No cardápio |
|---|---|
| `"sim"` | sempre mostra a miniatura; sem foto, mostra o espaço reservado |
| `"opcional"` | mostra a miniatura **só se a foto existir**; senão, a linha fica só com texto |
| `"nao"` (ou `"foto": null`) | só texto |

---

## 5. Como publicar

O site publicado precisa só destes arquivos e pastas: **`index.html`, `css/`, `js/`, `dados/` e `img/`**. As pastas `node_modules/`, `fotos-originais/`, `referencia/` e `scripts/` não precisam ir (o `node_modules` é pesado).

### Netlify (arrastar e soltar — o mais simples)

1. Crie uma pasta nova, por exemplo `publicar`, e copie para ela: `index.html`, `css`, `js`, `dados` e `img`.
2. Acesse [app.netlify.com/drop](https://app.netlify.com/drop) e crie uma conta grátis.
3. Arraste a pasta `publicar` para a página. Em segundos sai um link como `https://nome-aleatorio.netlify.app`.
4. Para mudar o nome do link: **Site configuration → Change site name**.
5. Para atualizar depois: em **Deploys**, arraste a pasta de novo.

### Vercel (pelo terminal)

1. Na pasta do projeto, rode `npx vercel` e siga as perguntas (login, nome do projeto; aceite as opções padrão — não há build).
2. Ele mostra um link de prévia. Para o link definitivo: `npx vercel --prod`.
3. O arquivo `.vercelignore` já impede que `node_modules` e as fotos originais sejam enviados.

### Para colocar no lugar do `/cardapio/` atual do cliente

O endereço atual é `https://chicobrasaegrill.com.br/cardapio/` (é para ele que o QR code aponta). Para trocar o cardápio antigo pelo novo:

1. **Acesso:** você vai precisar do acesso à hospedagem do site (painel tipo cPanel, FTP ou o gerenciador de arquivos) — ou falar com quem cuida do site.
2. **Backup:** baixe uma cópia do que existe hoje em `/cardapio/`.
3. **Envio:** coloque `index.html`, `css`, `js`, `dados` e `img` dentro da pasta `cardapio` (na pasta pública do site, geralmente `public_html/cardapio/`). Todos os caminhos do projeto são relativos, então funciona dentro de `/cardapio/` sem mudar nada.
4. **Se o site for WordPress** e o `/cardapio/` for uma página do WordPress: uma pasta real chamada `cardapio` normalmente passa na frente da página. Depois de testar, despublique ou renomeie a página antiga para não haver confusão.
5. **Teste** no celular `https://chicobrasaegrill.com.br/cardapio/` (se aparecer a versão antiga, limpe o cache ou espere alguns minutos). O QR code continua o mesmo.
6. **Prévia no WhatsApp:** o WhatsApp só lê a imagem de prévia com o endereço completo. No `index.html`, troque `content="img/og.jpg"` por `content="https://chicobrasaegrill.com.br/cardapio/img/og.jpg"`.

**Alternativa sem mexer na hospedagem:** publicar na Vercel/Netlify e pedir a quem cuida do site um redirecionamento de `/cardapio/` para o novo link (ou um subdomínio, como `cardapio.chicobrasaegrill.com.br`).

---

## 6. Pendências com o cliente

Pontos para confirmar com o dono antes da versão final (vieram do arquivo de dados, campo `revisar_com_o_cliente`; não aparecem no site):

- Parmegiana de Carne com Talharim: a descrição diz 'com penne ao molho branco ou sugo'. É talharim ou penne?
- Espeto Filé de Angus: a descrição fala em 'Filé de Mignon'. É angus ou mignon?
- A introdução do Menu Dom Chico cita 'criações vegetarianas', mas não há prato vegetariano no cardápio.
- Combo Bombom da Alcatra, Combo de Linguiça Suína e Combo de Flat Iron não dizem quantas pessoas servem.
- 'Le Petit Maynne' (Château Mayne): conferir a grafia no rótulo.
- 'State Spring 4 Estaciones Rose': conferir o nome exato no rótulo.
- Erros de digitação corrigidos na demo: Cane→Carne de Sol, Quartetodom→Quarteto Dom, Mouse→Mousse, Shweppes→Schweppes, Marguerita→Margarita, Ylera→Yllera, Run→Rum, Larger→Lager, Chornstein→Schornstein.
- Quais são os 6–8 pratos mais vendidos ou de maior margem? Eles vão para os destaques no topo (os atuais são uma sugestão).

Outros pontos que notei ao montar a demo:

- **Destaques:** o Chopp Dom Chico está marcado como destaque, então aparece no carrossel da aba Comidas (junto com os pratos). Confirmar se ele deve ficar lá.
- **Chopp de 1 litro:** a categoria avisa que é só para viagem, com R$ 3,80 do growler. A lista do pedido soma só os R$ 34,90 do chopp, sem o growler.
- **Feijoada:** a descrição diz "couve-flor" como acompanhamento; o mais comum é "couve". Vale confirmar.
- **"Destaques da casa"** é o nome usado no carrossel. Quando o dono confirmar os mais vendidos, dá para trocar por "Mais pedidos".

---

## 7. Como funciona por dentro (para quem quiser entender)

- **Abas e categorias:** cada categoria em `dados/cardapio.js` tem um `"grupo"` (`comidas`, `bebidas` ou `vinhos`), que define em qual aba ela aparece. Só a aba ativa é desenhada na tela, para ficar leve.
- **Painel do prato:** abrir um prato muda o endereço para `#id-do-item`. Por isso o botão "voltar" do celular fecha o painel, e dá para mandar o link direto de um prato (ex.: `.../cardapio/#combo-quarteto-dom-chico`).
- **Lista do pedido:** fica salva no próprio celular do cliente (`localStorage`). Ela **não envia nada** para a cozinha — o cliente mostra a tela ao garçom. Se o navegador bloquear o armazenamento (modo anônimo, por exemplo), a lista funciona normalmente, só não fica salva ao recarregar.
- **Fotos:** o site consulta `dados/fotos.js` para saber quais fotos existem e nunca pede um arquivo que não está lá.
- **Acessibilidade:** dá para navegar pelo teclado (Tab, setas, Esc), há foco visível, contraste adequado e textos alternativos nas fotos. Quem prefere menos movimento no celular/computador vê o site sem animações.
