const jogos = [
  {
    nome: "Assassins Creed Valhalla",
    preco: "115,00",
    imagem: "assets/1.png",
    imagemCarrinho: "assets/Carrinho Assassins.jpg",
  },
  {
    nome: "Planet of Lana",
    preco: "59,99",
    imagem: "assets/2.png",
    imagemCarrinho: "assets/Carrinho Planet.jpg",
  },
  {
    nome: "Helldivers",
    preco: "199,50",
    imagem: "assets/3.png",
    imagemCarrinho: "assets/Carrinho Helldivers.jpeg",
  },
  {
    nome: "Resident Evil 4",
    preco: "116,61",
    imagem: "assets/4.png",
    imagemCarrinho: "assets/Carrinho Resident.jpg",
  },
  {
    nome: "Horizon Forbidden West",
    preco: "249,90",
    imagem: "assets/5.png",
    imagemCarrinho: "assets/Carrinho Horizon.jpg",
  },
  {
    nome: "Red dead redemption II",
    preco: "289,90",
    imagem: "assets/6.png",
    imagemCarrinho: "assets/Carrinho Red dead.jpg",
  },

  {
    nome: "Destiny 2 - The final shape",
    preco: "189,99",
    imagem: "assets/7.png",
    imagemCarrinho: "assets/Carrinho Destiny.jpg",
  },
  {
    nome: "Grand theft auto - GTA V",
    preco: "35,85",
    imagem: "assets/8.png",
    imagemCarrinho: "assets/Carrinho gta.jpg",
  },
  {
    nome: "Star wars - outlaws",
    preco: "349,99",
    imagem: "assets/9.png",
    imagemCarrinho: "assets/Carrinho Star.jpeg",
  },
];

function criarCardJogo(jogo) {
  return `
  <div class="flex flex-wrap items-center border-8 border-cards">
      <img src="${jogo.imagem}" alt="Imagem do jogo" class="w-full">
      <div class="flex w-full bg-cards">
        <button onclick="adicionarAoCarrinho('${jogo.imagemCarrinho}', '${jogo.preco}', '${jogo.nome}')" class="text-white bg-azul-btn font-semibold flex-1 mr-[0.3rem] p-[0.3rem]">COMPRAR</button>
        <button class="text-white bg-azul-btn font-normal flex-1">R$ ${jogo.preco}</button>
      </div>
    </div>
  `;
}

const main = document.querySelector("#lista-jogos");

jogos.forEach((jogo) => {
  const cardJogo = criarCardJogo(jogo);
  main.innerHTML += cardJogo;
});

function adicionarAoCarrinho(imagemCarrinho, preco, nome) {
  localStorage.setItem("jogoImagem", imagemCarrinho);
  localStorage.setItem("jogoPreco", preco);
  localStorage.setItem("jogoNome", nome);
  window.location.href = "carrinho.html";
}
