import { GOW, spiderman, fifa, gtaV, destiny2, hogwarts } from "../js/app.js";
var templateCard = document.querySelector("#templateCard");
var fragment = document.createDocumentFragment();
var cards = document.querySelector(".container-cards");
var templateMain = document.querySelector(".template-main");
var containerMain = document.querySelector(".main_container");
var productPrompt = document.querySelector(".productPrompt");
var containerCards = document.querySelector(".container-cards");
var containerCardPrompt = document.querySelector("#productPromptContainer");
const containerTemplateCart = document.querySelector(".containerTemplateCart");
const containerTemplateFav = document.querySelector(".containerTemplateFav");
const templateCart = document.querySelector(".templateCart");
const templateFav = document.querySelector(".templateFav");


const gamesArray = [GOW, spiderman, fifa, gtaV, destiny2, hogwarts];
let cartArray = [];
let favArray = [];

//Mostrar carrito

const promptCart = () => {
  localStorage.setItem("cartArray", JSON.stringify(cartArray));

  containerTemplateCart.textContent = "";
  cartArray.forEach((item) => {
    const clone = templateCart.content.cloneNode(true);
    clone.querySelector(".cart-img").src = item.img;
    clone.querySelector(".game-cart-name").textContent = item.title;
    clone.querySelector("#removeFromCart").dataset.name = item.title;
    clone.querySelector(".card").dataset.name = item.title;
    fragment.appendChild(clone);
  });
  containerTemplateCart.appendChild(fragment);
};

//Mostrar Favoritos

const promptFav = () => {
  localStorage.setItem("favArray", JSON.stringify(favArray));

  containerTemplateFav.textContent = "";
  favArray.forEach((item) => {
    const clone = templateFav.content.cloneNode(true);
    clone.querySelector(".fav-img").src = item.img;
    clone.querySelector(".game-fav-name").textContent = item.title;
    clone.querySelector("#removeFromFav").dataset.name = item.title;
    clone.querySelector(".card-fav").dataset.name = item.title;
    fragment.appendChild(clone);
  });
  containerTemplateFav.appendChild(fragment);
};



document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("favArray")) {
    favArray = JSON.parse(localStorage.getItem("favArray"));
    promptFav();
  }
  if (localStorage.getItem("cartArray")) {
    cartArray = JSON.parse(localStorage.getItem("cartArray"));

    promptCart();
  }

// Mostrar main dinámico

  const mostrarDestacado = () => {
    const clone = templateMain.content.cloneNode(true);
    clone.querySelector(".main_img").src = gamesArray[2].image;
    clone.querySelector(".main_text").textContent = gamesArray[2].name;
    clone.querySelector(".rate_main").textContent = gamesArray[2].assessment;
    clone.querySelector(".main_img").id = gamesArray[2].name;
    clone.querySelector(".main_text").id = gamesArray[2].name;
    fragment.appendChild(clone);
    containerMain.appendChild(fragment);
  };

  mostrarDestacado();

  // Mostrar cards dinámicas

  const mostrarJuego = () => {
    gamesArray.forEach((item) => {
      const clone = templateCard.content.cloneNode(true);
      clone.querySelector(".card-title").textContent = item.name;
      clone.querySelector(".card-img-top").src = item.image;
      clone.querySelector(".rate").textContent = item.assessment;
      clone.querySelector(".rate-hover").textContent = item.assessment;
      clone.querySelector(".card").id = item.name;
      clone.querySelector(".star-hover").id = item.name;
      clone.querySelector(".card-img-top").id = item.name;
      clone.querySelector(".icon_star-hover").id = item.name;
      clone.querySelector(".rate-hover").id = item.name;
      clone.querySelector(".card-title").id = item.name;
      fragment.appendChild(clone);
    });

    cards.appendChild(fragment);
  };

  mostrarJuego();

  // Evento click en cards

  const mostrarProducto = () => {};

  const scrollTop = () => {
    window.scroll({
      top: "0px",
      left: "0px",
      behavior: "smooth",
    });
  };

  document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id === "back-arrow") {
      window.location = "../pages/storeUser.html";
    }

    gamesArray.forEach((item) => {
      if (e.target.id === item.name) {
        scrollTop();
        productPrompt.classList.remove("d-none");
        containerCards.classList.add("d-none");
        containerMain.classList.add("d-none");

        const clone = productPrompt.content.cloneNode(true);
        clone.querySelector("#gameTitlePrompt").textContent = item.name;
        clone.querySelector(".rate-hover").textContent = item.assessment;
        clone.querySelector("#gameCategory").textContent = item.category;

        clone.querySelector(".btn-cart").dataset.game = item.name;
        clone.querySelector(".favorite").dataset.fav = item.name;

        clone.querySelector(".carousel-1").src = item.carousel[0];
        clone.querySelector(".carousel-2").src = item.carousel[1];
        clone.querySelector(".carousel-3").src = item.carousel[2];
        clone.querySelector("#synopsis").textContent = item.synopsis;
        clone.querySelector("#genders").textContent = item.category;
        clone.querySelector("#characteristics").textContent =
          item.characteristics;
        clone.querySelector("#description").textContent = item.description;
        clone.querySelector("#soMin").textContent = item.soMin;
        clone.querySelector("#procesadorMin").textContent = item.procesadorMin;
        clone.querySelector("#memoriaMin").textContent = item.memoriaMin;
        clone.querySelector("#graficosMin").textContent = item.graficosMin;
        clone.querySelector("#directxMin").textContent = item.directxMin;
        clone.querySelector("#redMin").textContent = item.redMin;
        clone.querySelector("#almacenamientoMin").textContent =
          item.almacenamientoMin;
        clone.querySelector("#soRec").textContent = item.soRec;
        clone.querySelector("#procesadorRec").textContent = item.procesadorRec;
        clone.querySelector("#memoriaRec").textContent = item.memoriaRec;
        clone.querySelector("#graficosRec").textContent = item.graficosRec;
        clone.querySelector("#directxRec").textContent = item.directxRec;
        clone.querySelector("#redRec").textContent = item.redRec;
        clone.querySelector("#almacenamientoRec").textContent =
          item.almacenamientoRec;

        fragment.appendChild(clone);
      }

      containerCardPrompt.appendChild(fragment);
      return;
    });
  });

  // Agregar al carrito

  document.addEventListener("click", (e) => {
    if (e.target.dataset.game) {
      addCart(e);
      document.querySelector("#addButton").textContent = "Agregado al carrito✔";

      localStorage.setItem(cartArray, cartArray);
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "removeFromCart") {
      cartArray = cartArray.filter(
        (item) => item.title !== e.target.dataset.name
      );
      document.querySelector("#addButton").textContent = "Obtener";
    }
    promptCart();
  });

  const addCart = (e) => {
    const game = {
      title: "",
      img: "",
    };

    gamesArray.forEach((item) => {
      if (item.name === e.target.dataset.game) {
        (game.title = item.name), (game.img = item.image);
      }
    });

    const posicion = cartArray.findIndex((item) => item.title === game.title);
    if (posicion === -1) {
      cartArray.push(game);
    } else {
      cartArray.forEach((item) => {
        if (item.title !== game.title) {
          cartArray.push(game);
        } else {
          return;
        }
      });
    }
  };

  /////////////////////

  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("cartArray")) {
      cartArray = JSON.parse(localStorage.getItem("cartArray"));

      promptCart();
    }
  });

  //////////// FAVORITOS

  // Agregar a favoritos

  document.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.dataset.fav) {
      addFav(e);
      document.querySelector(".favorite-icon").classList.remove("text-light");
      document.querySelector(".favorite-icon").classList.add("text-pink");
      localStorage.setItem(favArray, favArray);
      return;
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "removeFromFav") {
      favArray = favArray.filter(
        (item) => item.title !== e.target.dataset.name
      );
      document.querySelector(".favorite-icon").classList.add("text-light");
      document.querySelector(".favorite-icon").classList.remove("text-pink");
    }
    promptFav();
  });
  console.log(favArray);
  const addFav = (e) => {
    const game = {
      title: "",
      img: "",
    };

    gamesArray.forEach((item) => {
      if (item.name === e.target.dataset.fav) {
        (game.title = item.name), (game.img = item.image);
      }
    });

    const posicion = favArray.findIndex((item) => item.title === game.title);
    if (posicion === -1) {
      favArray.push(game);
    } else {
      favArray.forEach((item) => {
        if (item.title !== game.title) {
          favArray.push(game);
        } else {
          return;
        }
      });
    }
  };
});
