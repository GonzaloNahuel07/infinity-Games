// Plantilla de constructor

export class Game {
  constructor(
    name,
    image,
    category,
    assessment,
    synopsis,
    characteristics,
    description,
    soMin,
    procesadorMin,
    memoriaMin,
    graficosMin,
    directxMin,
    redMin,
    almacenamientoMin,
    soRec,
    procesadorRec,
    memoriaRec,
    graficosRec,
    directxRec,
    redRec,
    almacenamientoRec,
    carousel
  ) {
    this.name = name;
    this.image = image;
    this.category = category;
    this.assessment = assessment;
    this.synopsis = synopsis;
    this.characteristics = characteristics;
    this.description = description;
    this.soMin = soMin;
    this.procesadorMin = procesadorMin;
    this.memoriaMin = memoriaMin;
    this.graficosMin = graficosMin;
    this.directxMin = directxMin;
    this.redMin = redMin;
    this.almacenamientoMin = almacenamientoMin;
    this.soRec = soRec;
    this.procesadorRec = procesadorRec;
    this.memoriaRec = memoriaRec;
    this.graficosRec = graficosRec;
    this.directxRec = directxRec;
    this.redRec = redRec;
    this.almacenamientoRec = almacenamientoRec;
    this.carousel = carousel;
  }
}

// Objetos de juego

export var fifa = new Game(
  "Fifa 23",
  new URL(
    "https://www.global-esports.news/wp-content/uploads/2022/09/FIFA-23.png"
  ),
  "sports",
  "5",
  "FIFA 23 te trae todo el realismo del Juego de Todos con la tecnología HyperMotion2, la FIFA World Cup™ masculina y femenina, que estarán disponibles durante la temporada, equipos de clubes femeniles, el Cross-Play* y mucho más.",
  [
    "JcJ en linea",
    " Un jugador",
    " JcJ en pantalla dividida",
    " Cooperativo en linea",
    " Logros de Infinity Games",
  ],
  "FIFA 23 es un videojuego de simulación de fútbol publicado por Electronic Arts. Es la trigésima entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo el estandarte de FIFA, y lanzada en todo el mundo el 30 de septiembre de 2022 para PC, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X. /S y Google Stadia. Sin embargo, los jugadores que reservaron la Ultimate Edition recibieron tres días de acceso anticipado y pudieron jugar el juego a partir del 27 de septiembre.",
  "Windows 10 64-bits",
  "Intel Core i5 6600k or AMD Ryzen 5 1600",
  "8 GB de RAM",
  "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570",
  "Versión 12",
  "Conexión de banda ancha a Internet",
  "100 GB de espacio disponible",
  "Windows 10 64-bits",
  "Intel Core i7 6700 or AMD Ryzen 7 2700X",
  "12 GB de RAM",
  " NVIDIA GeForce GTX 1660 or AMD Radeon RX 5600 XT",
  "Versión 12",
  "Conexión de banda ancha a Internet",
  "100 GB de espacio disponible",
  [
    new URL(
      "https://www.global-esports.news/wp-content/uploads/2022/09/FIFA-23.png"
    ),
    new URL("https://images2.alphacoders.com/127/1276415.jpg"),
    new URL("https://cdn.mos.cms.futurecdn.net/mjUXyarXTCqwUa5Zo9UUPX.jpg"),
  ]
);

export var GOW = new Game(
  "God of War",
  new URL(
    "https://wallpapercave.com/wp/wp3282825.jpg"
  ),
  "action",
  "4",
  "Habiendo consumado su venganza contra los dioses el Olimpo años atrás, Kratos ahora vive como un hombre en el reino de los dioses y los monstruos nórdicos. En este hostil e inhóspito mundo, debe pelear por sobrevivir... y enseñarle a su hijo a hacer lo mismo.",
  ["Un jugador", " Logros Infinity Games", " Compatible con mando"],
  "God of War Ragnarök es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment (SIE). Se lanzó en todo el mundo el 9 de noviembre de 2022 para PlayStation 4 y PlayStation 5, lo que marca el primer lanzamiento entre generaciones de la serie. Es la novena entrega de la saga de God of War, la novena cronológicamente y la secuela de God of War de 2018. Basado libremente en la mitología nórdica, el juego se desarrolla en la antigua Escandinavia y presenta al protagonista de la serie Kratos y su hijo adolescente Atreus. Concluyendo la era nórdica de la serie, el juego cubre el Ragnarök, el evento escatológico que es central en la mitología nórdica y se predijo que sucedería en el juego anterior después de que Kratos matara al dios Æsir Baldur.",
  "Windows 10 64-bits",
  " Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",
  "8 GB de RAM",
  "NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)",
  " Versión 11",
  "Conexión de banda ancha a Internet",
  "70 GB de espacio disponible",
  "Windows 10 64-bits",
  "Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)",
  "8 GB de RAM",
  "NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)",
  "Versión 11",
  "Conexión de banda ancha a Internet",
  "70 GB de espacio disponible",
  [
    new URL("https://t3.ftcdn.net/jpg/05/48/85/94/360_F_548859458_nSIXtT9ML7ksTgjRAOmLsqP3egKc1prC.jpg"),
    new URL("https://wallpapershome.com/images/pages/pic_h/11593.jpg"),
    new URL(
      "https://mobimg.b-cdn.net/v3/fetch/2c/2c87e8e9f5d5373176b6772216da16a6.jpeg"
    ),
  ]
);

export var hogwarts = new Game(
  "Hogwarts Legacy",
  new URL("https://wallpapercave.com/wp/wp8172984.jpg"),
  "adventure",
  "4.5",
  "Hogwarts Legacy es un RPG de acción en un mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.",
  ["Un jugador", " Logros Infinity Games", " Compatible con mando"],
  "Hogwarts Legacy es un juego de rol de acción de 2023 desarrollado por Avalanche Software y publicado por Warner Bros. Games bajo su sello Portkey Games. El juego está ambientado en el universo Wizarding World, basado en las novelas de Harry Potter, y fue lanzado para PlayStation 5, Windows y Xbox Series X/S en 2023. Su lanzamiento está programado para PlayStation 4, Xbox One y Nintendo Switch más adelante en 2023.",
  "Windows 10 64-bits",
  " Intel Core i5-6600 (3.3Ghz) or AMD Ryzen 5 1400 (3.2Ghz)",
  "16 GB de RAM",
  "NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 470 4GB",
  "Versión 12",
  "Conexión de banda ancha a Internet",
  "85 GB de espacio disponible",
  "Windows 10 64-bits",
  " Intel Core i7-8700 (3.2Ghz) or AMD Ryzen 5 3600 (3.6 Ghz)",
  "16 GB de RAM",
  "NVIDIA GeForce 1080 Ti or AMD Radeon RX 5700 XT or INTEL Arc A770",
  "Versión 12",
  "Conexión de banda ancha a Internet",
  "85 GB de espacio disponible",
  [
    new URL("https://wallpapercave.com/wp/wp8172984.jpg"),
    new URL("https://wallpapershome.com/images/pages/pic_h/23027.jpg"),
    new URL("https://wallpapershome.com/images/pages/pic_h/23026.jpg"),
  ]
);

export var spiderman = new Game(
  "Marvel Spider-Man",
  new URL(
    "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg?t=1673999865"
  ),
  "action",
  "5",
  "Marvel Spider-Man Remasterizado nos presenta una historia original llena de acción en la que veremos cómo las vidas de Peter Parker y Spider-Man chocan entre sí. Juega con un Peter Parker más experimentado que lucha contra organizaciones criminales y villanos emblemáticos en la Nueva York deMarvel",
  ["Un jugador", " Logros Infinity Games", " Compatible con mando"],
  "Marvel's Spider-Man es un videojuego de acción y aventura basado en el popular superhéroe hómonimo de la editorial Marvel Comics. Fue desarrollado por Insomniac Games y publicado por Sony Interactive Entertainment en exclusiva para la consola PlayStation. Se trata del primer videojuego licenciado desarrollado por Insomniac. Su lanzamiento internacional se produjo el 7 de septiembre de 2018.",
  "Windows 10 64-bits",
  " Intel Core i3-4160, 3.6 GHz or AMD equivalent",
  "8 GB de RAM",
  "NVIDIA GTX 950 or AMD Radeon RX 470",
  "Versión 12",
  "Conexión de banda ancha a Internet",
  "75 GB de espacio disponible",
  "Windows 10 64-bits",
  "Intel Core i5-4670, 3.4 Ghz or AMD Ryzen5 1600, 3.2 Ghz",
  "16 GB de RAM",
  " NVIDIA GTX 1060 6GB or AMD Radeon RX 580 8GB",
  "Versión 12",
  "Conexión de banda ancha a Internet",
  "75 GB de espacio disponible",
  [
    new URL(
      "https://p4.wallpaperbetter.com/wallpaper/1000/316/848/spider-man-2018-game-wallpaper-preview.jpg"
    ),
    new URL("https://wallpaperaccess.com/full/895177.jpg"),
    new URL(
      "https://i.pinimg.com/originals/8f/3c/f3/8f3cf3bcbd06c1d660ec05435ad1c427.jpg"
    ),
  ]
);

export var destiny2 = new Game(
  "Destiny 2",
  new URL(
    "https://cdn.akamai.steamstatic.com/steam/apps/1085660/header_latam.jpg?t=1677611723"
  ),
  "action",
  "5",
  "Sumérgete en el mundo de Destiny 2 para explorar los misterios del sistema solar y vivir sus dinámicos combates de disparos en primera persona. Desbloquea poderosas habilidades elementales y obtén equipamiento único para personalizar tu apariencia y tu estilo de juego. Disfruta la historia cinemática de Destiny 2, desafiantes misiones cooperativas y varios modos PvP en solitario o con amigos. Descárgalo gratis hoy y escribe tu historia en las estrellas.",
  ["Un jugador", " Logros Infinity Games", " Compatible con mando"],
  "La historia retoma desde los acontecimientos de Destiny: Rise of Iron y la crisis de la siva, el último contenido descargable del primer título de la franquicia, en esta instancia de la historia, la facción de la Legión Roja de los Cabal, una raza extraterrestre basada en un imperio militar-industrial, han atacado La Última Ciudad con fuerzas abrumadoras, dirigidas por su comandante emperador y supremo líder de los cabal, Dominus Ghaul. Los guardianes han sido despojados de sus poderes otorgados por el viajero y obligados a huir de la torre. Los guardianes deben redescubrir la luz y reactivar sus poderes para enfrentar a Ghaul y la Legión Roja, todo mientras se lanzan a aventurarse a nuevos mundos y aprenden más de los orígenes de la luz y la oscuridad, y también del viajero.",
  "Windows 10 64-bits",
  "Intel Core i5 6600k or AMD Ryzen 5 1600",
  "8 GB de RAM",
  "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570",
  "Versión 12",
  "Conexión de banda ancha a Internet",
  "105 GB de espacio disponible",
  "Windows 10 64-bits",
  "Intel Core i7 6700 or AMD Ryzen 7 2700X",
  "12 GB de RAM",
  " NVIDIA GeForce GTX 1660 or AMD Radeon RX 5600 XT",
  "Versión 12",
  "Conexión de banda ancha a Internet",
  "105 GB de espacio disponible",
  [
    new URL(
      "https://w0.peakpx.com/wallpaper/336/45/HD-wallpaper-destiny-2-games-destiny-video-2.jpg"
    ),
    new URL(
      "https://areajugones.sport.es/wp-content/uploads/2018/04/PLS_EXPANSION_KA_FINAL_VERTICAL_HORIZONTAL_Simple_72dpi_004R7_2202018_Horizontal.jpg"
    ),
    new URL(
      "https://cdn.akamai.steamstatic.com/steam/apps/1085660/ss_7fcc82f468fcf8278c7ffa95cebf949bfc6845fc.1920x1080.jpg?t=1678813250"
    ),
  ]
);

export var gtaV = new Game(
  "Grand Theft Auto V",
  new URL(
    "https://wallpaper.dog/large/5479753.jpg"
  ),
  "action",
  "5",
  "Grand Theft Auto V: Edición Premium te permite disfrutar por completo de la trama de Grand Theft Auto V, acceder gratuitamente al mundo en constante evolución de Grand Theft Auto Online y a todas las mejoras y contenidos existentes, como El Golpe del Fin del Mundo, Tráfico de armas, Contrabando, Motociclistas y mucho más. También se incluye el Pack de inicio Negocios criminales, la forma más rápida de dar un impulso a tu imperio criminal en Grand Theft Auto Online.",
  ["Un jugador", " Logros Infinity Games", " Compatible con mando"],
  "Un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se meten en problemas, y tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad en la que no pueden confiar en nadie, y mucho menos los unos en los otros. Descubre un mundo en constante evolución repleto de opciones y formas de jugar mientras llegas a lo más alto del escalafón criminal de Los Santos y Blaine County en la mejor experiencia compartida en línea.",
  "Windows 10 64-bits",
  "Intel Core i5 6600k or AMD Ryzen 5 1600",
  "8 GB de RAM",
  "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570",
  "Versión 12",
  "Conexión de banda ancha a Internet",
  "90 GB de espacio disponible",
  "Windows 10 64-bits",
  "Intel Core i7 6700 or AMD Ryzen 7 2700X",
  "12 GB de RAM",
  " NVIDIA GeForce GTX 1660 or AMD Radeon RX 5600 XT",
  "Versión 12",
  "Conexión de banda ancha a Internet",
  "90 GB de espacio disponible",
  [
    new URL(
      "https://as01.epimg.net/meristation/imagenes/2020/05/20/noticias/1589953288_448757_1589953463_noticia_normal.jpg"
    ),
    new URL(
      "https://c4.wallpaperflare.com/wallpaper/561/117/145/the-city-rockstar-grand-theft-auto-v-los-santos-wallpaper-preview.jpg"
    ),
    new URL("https://wallpapershome.com/images/pages/pic_h/11620.jpg"),
  ]
);


/*
const gamesIndex = gamesArray.findIndex((item) => item.name === Game.name)

export function agregarJuego() {
    if (gamesIndex === -1) {
        gamesArray.push(Game);
    } else {
        gamesArray[gamesIndex].gamesIndex++;
    }

    mostrarJuego()

}*/
