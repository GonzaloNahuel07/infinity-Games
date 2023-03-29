import { GOW, fifa, hogwarts, spiderman, destiny2, gtaV } from "../js/app.js";
import { Game } from "../js/app.js";

var templateCard = document.querySelector(".templateCard");
var fragment = document.createDocumentFragment();
var cards = document.querySelector(".container-cards");
var templateMain = document.querySelector(".template-main");
var containerMain = document.querySelector(".main_container");
var productPromptAdmin = document.querySelector(".productPromptAdmin");
var containerCards = document.querySelector(".container-cards");
var containerCardPromptAdmin = document.querySelector(
  ".productPromptAdminContainer"
);

// Arreglo juegos Local Storage

export let gamesArray = [GOW, fifa, hogwarts, spiderman, destiny2, gtaV];

const scrollTop = () => {
  window.scroll({
    top: "0px",
    left: "0px",
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("gamesArrayLocal")) {
    let gamesArrayLocal = JSON.parse(localStorage.getItem("gamesArrayLocal"));
    gamesArray = gamesArrayLocal;
  }

  // Mostrar main dinámico

  const mostrarDestacado = () => {
    const clone = templateMain.content.cloneNode(true);
    clone.querySelector(".main_img-admin").src = gamesArray[2].image;
    clone.querySelector(".main_text").textContent = gamesArray[2].name;
    clone.querySelector(".rate_main").textContent = gamesArray[2].assessment;
    clone.querySelector(".main_img-admin").id = gamesArray[2].name;
    clone.querySelector(".main_pencil").id = gamesArray[2].name;
    clone.querySelector(".main_text").id = gamesArray[2].name;
    fragment.appendChild(clone);
    containerMain.appendChild(fragment);
  };

  // Mostrar cards dinámicas

  const mostrarJuego = () => {
    gamesArray.forEach((item) => {
      const clone = templateCard.content.cloneNode(true);

      clone.querySelector(".card_pencil").id = item.name;
      clone.querySelector(".card-title").textContent = item.name;
      clone.querySelector(".card-img-top").src = item.image;
      clone.querySelector(".rate").textContent = item.assessment;
      clone.querySelector(".card").id = item.name;
      clone.querySelector(".card-img-top").id = item.name;
      clone.querySelector(".card-title").id = item.name;
      fragment.appendChild(clone);
    });

    cards.appendChild(fragment);
  };

  mostrarDestacado();
  mostrarJuego();

  // Evento click en cards

  document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id === "back-arrow") {
      window.location = "../pages/storeAdmin.html";
    }

    gamesArray.forEach((item) => {
      if (e.target.id === item.name) {
        scrollTop();
        productPromptAdmin.classList.remove("d-none");
        containerCards.classList.add("d-none");
        containerMain.classList.add("d-none");
        document.querySelector("#button_add").classList.add("d-none");

        const clone = productPromptAdmin.content.cloneNode(true);
        clone.querySelector("#gameTitlePrompt").value = item.name;
        clone.querySelector("#gameTitlePrompt").dataset.name = item.name;
        clone.querySelector("#gameCategory").value = item.category;
        clone.querySelector("#game-rate").value = item.assessment;
        clone.querySelector("#img-card").value = item.image;
        clone.querySelector(".carousel-1").src = item.carousel[0];
        clone.querySelector(".carousel-2").src = item.carousel[1];
        clone.querySelector(".carousel-3").src = item.carousel[2];
        clone.querySelector("#carousel-1").value = item.carousel[0];
        clone.querySelector("#carousel-2").value = item.carousel[1];
        clone.querySelector("#carousel-3").value = item.carousel[2];
        clone.querySelector("#synopsis").value = item.synopsis;
        clone.querySelector("#genders").value = item.category;
        clone.querySelector("#characteristics").value = item.characteristics;
        clone.querySelector("#description").value = item.description;
        clone.querySelector("#soMin").value = item.soMin;
        clone.querySelector("#procesadorMin").value = item.procesadorMin;
        clone.querySelector("#memoriaMin").value = item.memoriaMin;
        clone.querySelector("#graficosMin").value = item.graficosMin;
        clone.querySelector("#directxMin").value = item.directxMin;
        clone.querySelector("#redMin").value = item.redMin;
        clone.querySelector("#almacenamientoMin").value =
          item.almacenamientoMin;
        clone.querySelector("#soRec").value = item.soRec;
        clone.querySelector("#procesadorRec").value = item.procesadorRec;
        clone.querySelector("#memoriaRec").value = item.memoriaRec;
        clone.querySelector("#graficosRec").value = item.graficosRec;
        clone.querySelector("#directxRec").value = item.directxRec;
        clone.querySelector("#redRec").value = item.redRec;
        clone.querySelector("#almacenamientoRec").value =
          item.almacenamientoRec;

        fragment.appendChild(clone);
      }

      containerCardPromptAdmin.appendChild(fragment);

      return;
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "submit_changes") {
      gamesArray.forEach((item) => {
        if (
          !document.querySelector("#gameTitlePrompt").value.trim() ||
          !document.querySelector("#gameCategory").value.trim() ||
          !document.querySelector("#img-card").value.trim() ||
          !document.querySelector("#game-rate").value.trim() ||
          !document.querySelector("#carousel-1").value.trim() ||
          !document.querySelector("#carousel-2").value.trim() ||
          !document.querySelector("#carousel-3").value.trim() ||
          !document.querySelector("#synopsis").value.trim() ||
          !document.querySelector("#characteristics").value.trim() ||
          !document.querySelector("#genders").value.trim() ||
          !document.querySelector("#description").value.trim() ||
          !document.querySelector("#soMin").value.trim() ||
          !document.querySelector("#procesadorMin").value.trim() ||
          !document.querySelector("#memoriaMin").value.trim() ||
          !document.querySelector("#graficosMin").value.trim() ||
          !document.querySelector("#directxMin").value.trim() ||
          !document.querySelector("#redMin").value.trim() ||
          !document.querySelector("#almacenamientoMin").value.trim() ||
          !document.querySelector("#soRec").value.trim() ||
          !document.querySelector("#procesadorRec").value.trim() ||
          !document.querySelector("#memoriaRec").value.trim() ||
          !document.querySelector("#graficosRec").value.trim() ||
          !document.querySelector("#directxRec").value.trim() ||
          !document.querySelector("#redRec").value.trim() ||
          !document.querySelector("#almacenamientoRec").value
        ) {
          document.querySelector(".alert-message").classList.remove("d-none");
          return;
        }

        if (
          document.querySelector("#gameTitlePrompt").dataset.name === item.name
        ) {
          item.name = document.querySelector("#gameTitlePrompt").value;
          item.category = document.querySelector("#gameCategory").value;
          item.assessment = document.querySelector("#game-rate").value;
          item.image = document.querySelector("#img-card").value;
          item.carousel[0] = document.querySelector("#carousel-1").value;
          item.carousel[1] = document.querySelector("#carousel-2").value;
          item.carousel[2] = document.querySelector("#carousel-3").value;
          item.synopsis = document.querySelector("#synopsis").value;
          item.characteristics =
            document.querySelector("#characteristics").value;
          item.category = document.querySelector("#genders").value;
          item.description = document.querySelector("#description").value;
          item.soMin = document.querySelector("#soMin").value;
          item.procesadorMin = document.querySelector("#procesadorMin").value;
          item.memoriaMin = document.querySelector("#memoriaMin").value;
          item.graficosMin = document.querySelector("#graficosMin").value;
          item.directxMin = document.querySelector("#directxMin").value;
          item.redMin = document.querySelector("#redMin").value;
          item.almacenamientoMin =
            document.querySelector("#almacenamientoMin").value;
          item.soRec = document.querySelector("#soRec").value;
          item.procesadorRec = document.querySelector("#procesadorRec").value;
          item.memoriaRec = document.querySelector("#memoriaRec").value;
          item.graficosRec = document.querySelector("#graficosRec").value;
          item.directxRec = document.querySelector("#directxRec").value;
          item.redRec = document.querySelector("#redRec").value;
          item.almacenamientoRec =
            document.querySelector("#almacenamientoRec").value;

          localStorage.setItem("gamesArrayLocal", JSON.stringify(gamesArray));

          window.location = "../pages/storeAdmin.html";
        }
      });
    }
  });

  // AGREGAR NUEVO JUEGO

  document.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.id === "button_add") {
      if (e.target.id === "back-arrow") {
        window.location = "../pages/storeAdmin.html";
      }
      scrollTop();
      productPromptAdmin.classList.remove("d-none");
      containerCards.classList.add("d-none");
      containerMain.classList.add("d-none");

      const clone = productPromptAdmin.content.cloneNode(true);
      clone.querySelector(".carousel").classList.add("d-none");
      clone.querySelector("#gameTitlePrompt").value = "";
      clone.querySelector("#gameTitlePrompt").dataset.name = "";
      clone.querySelector("#game-rate").value = "";
      clone.querySelector("#gameCategory").value = "";
      clone.querySelector("#img-card").value = "";
      clone.querySelector("#carousel-1").value = "";
      clone.querySelector("#carousel-2").value = "";
      clone.querySelector("#carousel-3").value = "";
      clone.querySelector("#synopsis").value = "";
      clone.querySelector("#genders").value = "";
      clone.querySelector("#genders").value = "";
      clone.querySelector("#characteristics").value = "";
      clone.querySelector("#description").value = "";
      clone.querySelector("#soMin").value = "";
      clone.querySelector("#procesadorMin").value = "";
      clone.querySelector("#memoriaMin").value = "";
      clone.querySelector("#graficosMin").value = "";
      clone.querySelector("#directxMin").value = "";
      clone.querySelector("#redMin").value = "";
      clone.querySelector("#almacenamientoMin").value = "";
      clone.querySelector("#soRec").value = "";
      clone.querySelector("#procesadorRec").value = "";
      clone.querySelector("#memoriaRec").value = "";
      clone.querySelector("#graficosRec").value = "";
      clone.querySelector("#directxRec").value = "";
      clone.querySelector("#redRec").value = "";
      clone.querySelector("#almacenamientoRec").value = "";

      fragment.appendChild(clone);
    }
    containerCardPromptAdmin.appendChild(fragment);
  });
  const noPushGame = () => {
    document.querySelector(".alert-message").classList.remove("d-none");
    document.querySelector(".alert-message").textContent =
      "El juego ya está cargado";
  };

  document.addEventListener("click", (e) => {
    if (e.target.id === "submit_changes") {
      if (
        !document.querySelector("#gameTitlePrompt").value.trim() ||
        !document.querySelector("#gameCategory").value.trim() ||
        !document.querySelector("#img-card").value.trim() ||
        !document.querySelector("#game-rate").value.trim() ||
        !document.querySelector("#carousel-1").value.trim() ||
        !document.querySelector("#carousel-2").value.trim() ||
        !document.querySelector("#carousel-3").value.trim() ||
        !document.querySelector("#synopsis").value.trim() ||
        !document.querySelector("#characteristics").value.trim() ||
        !document.querySelector("#genders").value.trim() ||
        !document.querySelector("#description").value.trim() ||
        !document.querySelector("#soMin").value.trim() ||
        !document.querySelector("#procesadorMin").value.trim() ||
        !document.querySelector("#memoriaMin").value.trim() ||
        !document.querySelector("#graficosMin").value.trim() ||
        !document.querySelector("#directxMin").value.trim() ||
        !document.querySelector("#redMin").value.trim() ||
        !document.querySelector("#almacenamientoMin").value.trim() ||
        !document.querySelector("#soRec").value.trim() ||
        !document.querySelector("#procesadorRec").value.trim() ||
        !document.querySelector("#memoriaRec").value.trim() ||
        !document.querySelector("#graficosRec").value.trim() ||
        !document.querySelector("#directxRec").value.trim() ||
        !document.querySelector("#redRec").value.trim() ||
        !document.querySelector("#almacenamientoRec").value
      ) {
        document.querySelector(".alert-message").classList.remove("d-none");
        return;
      } else {
        gamesArray.forEach((item) => {
          if (document.querySelector("#gameTitlePrompt").value === item.name) {
            noPushGame();
            return;
          }
          const pushGame = () => {
            gamesArray.push(newGame);
            localStorage.setItem("gamesArrayLocal", JSON.stringify(gamesArray));
            window.location = "../pages/storeAdmin.html";
            return
          };
          if (document.querySelector("#gameTitlePrompt").value !== item.name) {
            var newGame = new Game(
              document.querySelector("#gameTitlePrompt").value,
              document.querySelector("#img-card").value,
              document.querySelector("#gameCategory").value,
              document.querySelector("#game-rate").value,
              document.querySelector("#synopsis").value,
              document.querySelector("#characteristics").value,
              document.querySelector("#description").value,
              document.querySelector("#soMin").value,
              document.querySelector("#procesadorMin").value,
              document.querySelector("#memoriaMin").value,
              document.querySelector("#graficosMin").value,
              document.querySelector("#directxMin").value,
              document.querySelector("#redMin").value,
              document.querySelector("#almacenamientoMin").value,
              document.querySelector("#soRec").value,
              document.querySelector("#procesadorRec").value,
              document.querySelector("#memoriaRec").value,
              document.querySelector("#graficosRec").value,
              document.querySelector("#directxRec").value,
              document.querySelector("#redRec").value,
              document.querySelector("#almacenamientoRec").value,
              [
                document.querySelector("#carousel-1").value,
                document.querySelector("#carousel-2").value,
                document.querySelector("#carousel-3").value,
              ]
            );
            pushGame();
            return;
          }
        });
      }
      return;
    }
  });
  console.log(gamesArray);
});
localStorage.clear()