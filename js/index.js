import { GOW, fifa, hogwarts, destiny2, gtaV, spiderman } from "./app.js";

var templateCard = document.querySelector("#templateCard");
var cards = document.querySelector(".container-cards");
var cardGameName = document.querySelector(".card-gameName");
var cardStars = document.querySelector(".card-stars");
var fragment = document.createDocumentFragment();
var cardImage = document.querySelector(".card-image");
var rate = document.querySelector("#rate");
var carouselImage1Mobile = document.getElementById("carouselImage1Mobile");
var carouselImage2Mobile = document.getElementById("carouselImage2Mobile");
var carouselImage3Mobile = document.getElementById("carouselImage3Mobile");
var carouselImage1 = document.getElementById("carouselImage1");
var carouselImage2 = document.getElementById("carouselImage2");
var carouselImage3 = document.getElementById("carouselImage3");

const gamesArray = [GOW, fifa, hogwarts, destiny2, gtaV, spiderman];

// Funcion para cargar objeto de juego a template y al DOM

const mostrarJuego = () => {
  gamesArray.forEach((item) => {
    const clone = templateCard.content.cloneNode(true);
    clone.querySelector(".card-gameName").textContent = item.name;
    clone.querySelector(".card-image").src = item.image;
    clone.querySelector("#rate").textContent = item.assessment;
    clone.querySelector(".container-cards-card").id = item.name;
    fragment.appendChild(clone);
  });

  cards.appendChild(fragment);
};

mostrarJuego();

// Funcion para cargar imagenes al carousel

const agregarImagenCarousel = () => {
  carouselImage1.src = fifa.image;
  carouselImage2.src = gtaV.image;
  carouselImage3.src = GOW.image;
  carouselImage1Mobile.src = new URL(
    "https://wallpaperaccess.com/full/1416122.jpg"
  );
  carouselImage1Mobile.className = "d-block d-md-none w-100";
  carouselImage2Mobile.src = new URL(
    "https://www.renderhub.com/loodi/gallery/valerie-cyberpunk-2077-fan-art-wallpaper.jpg"
  );
  carouselImage3Mobile.src = new URL(
    "https://i.pinimg.com/564x/27/b2/16/27b21646d12a1ba1acbfce534d84a3e8.jpg"
  );
};

agregarImagenCarousel();

// PORTADA E INDEX DINÁMICOS

const scrollTop = () => {
  window.scroll({
    top: "0px",
    left: "0px",
    behavior: "smooth",
  });
};
const indexPrompt = () => {
  document.querySelector(".header").classList.remove("d-none");
  document.querySelector(".main").classList.remove("d-none");
  document.querySelector(".container-footer").classList.remove("d-none");
  document.querySelector(".front-page").classList.add("d.none");
};
const frontPageAnimation = () => {
  document.querySelector(".header").classList.add("d-none");
  document.querySelector(".main").classList.add("d-none");
  document.querySelector(".container-footer").classList.add("d-none");
  document.querySelector(".front-page").classList.remove("d.none");
  scrollTop();
  setTimeout(indexPrompt(), 6000);
};
frontPageAnimation();

// REDIRECCIONAR CARDS A INICIAR SESIÓN

document.addEventListener("click", (e) => {
  if (e.target.id === "card-image") {
    window.location = "../pages/loginPage.html";
  }
});
