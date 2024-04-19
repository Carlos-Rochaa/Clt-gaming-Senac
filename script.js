const jogos = [
  {
    preco: "115,00",
    imagem: "Assets/1.png",
  },
  {
    preco: "59,99",
    imagem: "Assets/2.png",
  },
  {
    preco: "199,50",
    imagem: "Assets/3.png",
  },
  {
    preco: "116,61",
    imagem: "Assets/4.png",
  },
  {
    preco: "249,90",
    imagem: "Assets/5.png",
  },
  {
    preco: "289,90",
    imagem: "Assets/6.png",
  },

  {
    preco: "189,99",
    imagem: "Assets/7.png",
  },
  {
    preco: "35,85",
    imagem: "Assets/8.png",
  },
  {
    preco: "349,99",
    imagem: "Assets/9.png",
  },
];

function criarCardJogo(jogo) {
  return `
  <div class="flex flex-wrap items-center border-8 border-cards">
      <img src="${jogo.imagem}" alt="Imagem do jogo" class="w-full">
      <div class="flex w-full bg-cards">
        <button class="text-white bg-azul-btn font-semibold flex-1 mr-[0.3rem] p-[0.3rem]">COMPRAR</button>
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
