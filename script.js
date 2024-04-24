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
        <button onclick="adicionarAoCarrinho('${jogo.imagemCarrinho}', '${jogo.preco}', '${jogo.nome}')" class="text-white hover:text-zinc-400 bg-azul-btn font-semibold flex-1 mr-[0.3rem] p-[0.3rem]">COMPRAR</button>
        <button class="text-white cursor-text bg-azul-btn font-normal flex-1">R$ ${jogo.preco}</button>
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


const jogosDestaque = [
  {
    nome: "Ghost of Tshushima - Directors cut",
    preco: "199,50",
    imagem: "assets/Ghost2 4K.jpeg",
    imagemCarrinho: "assets/Ghost 4K.jpeg",
  },
  {
    nome: "Sekiro shadows die twice",
    preco: "149,50",
    imagem: "assets/Sekiro 4k.jpg",
    imagemCarrinho: "assets/Sekiro 4k.jpg",
  },
  {
    nome: "Elden Ring",
    preco: "249,99",
    imagem: "assets/Elden 4k.jpg",
    imagemCarrinho: "assets/Elden Ring 4k.png",
  },
];

const slidesContainer = document.getElementById("slides-container");
const carouselIndicators = document.getElementById("carousel-indicators");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

jogosDestaque.forEach((jogo, index) => {
  const slide = document.createElement("div");
  slide.classList.add("w-full", "flex-shrink-0");

  const content = `
    <div class="relative h-[501px]">
      <img src="${jogo.imagem}" alt="${jogo.nome}" class="w-full h-full bg-center">
      <div class="absolute bottom-0 left-0 right-0 bg-text-color p-4 flex justify-around gap-48">
        <div class="text-amarelo-dourado font-[490] text-3xl">${jogo.nome}</div>
        <div class="flex items-center">
          <div class="font-extrabold text-3xl bg-gradient-to-r from-gradiente-price-1 to-gradiente-price-2 inline-block text-transparent bg-clip-text">${jogo.preco}</div>
          <button
            class="font-medium text-xl text-white hover:text-zinc-400 bg-azul-btn px-5 py-2 ml-3"
            onclick="adicionarAoCarrinho('${jogo.imagemCarrinho}', '${jogo.preco}', '${jogo.nome}')"
          >
            <i class="fa-solid fa-cart-shopping"></i> COMPRAR
          </button>
        </div>
      </div>
    </div>
  `;

  slide.innerHTML = content;
  slidesContainer.appendChild(slide);

  const indicator = document.createElement("button");
  indicator.classList.add("w-4", "h-4", "rounded-full", "bg-gray-300");
  indicator.setAttribute("data-index", index);
  indicator.addEventListener("click", () => {
    showSlide(index);
  });
  carouselIndicators.appendChild(indicator);
});

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = jogosDestaque.length - 1;
  } else if (index >= jogosDestaque.length) {
    index = 0;
  }

  const translateValue = -index * 100;
  slidesContainer.style.transform = `translateX(${translateValue}%)`;
  currentIndex = index;
  updateIndicators();
}

function updateIndicators() {
  const indicators = carouselIndicators.querySelectorAll("button");
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add("bg-gray-800");
    } else {
      indicator.classList.remove("bg-gray-800");
    }
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 7000);
showSlide(currentIndex);
