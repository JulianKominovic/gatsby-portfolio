const status = ["done", "into", "ended", "fail"];
const techs = {
  javascript: ["#javascript", "#CDC677"],
  react: ["#react", "#78AACC"],
  fetch: ["#fetch", "#BAC0C9"],
  styledComponents: ["#styled-components", "#CE98AE"],
  reactSpring: ["#react-spring", "#BAC0C9"],
  axios: ["#axios", "#AB98CB"],
  css: ["#css", "#AB98CB"],
  html: ["#html", "#AB98CB"],
};

export const cardsData = [
  {
    title: "Time tracking dashboard",
    imgSrc: "/imgs/time-tracking-dashboard.png",
    desc: "Challenge de Frontend mentor. Tablero que muestra la cantidad de tiempo invertido en cada actividad. Hecho en React y Styled components, usando ademas useContext.",
    status: [
      ["mvp", "done"],
      ["terminado", "done"],
    ],
    techTags: [techs.react, techs.styledComponents, techs.css],
    url: "https://jk-time-tracking-dashboard.netlify.app/",
    urlGithub: "https://github.com/JulianKominovic/time-tracking-dashboard",
    offsetY: 0,
  },
  {
    title: "Countries API REST",
    imgSrc: "/imgs/api-rest-countries.png",
    desc: "Challenge de Frontend mentor. Pagina que muestra todos los paises del mundo dentro de tarjetas y al clickearlos nos muestra informacion adicional y los paises vecinos, usando Context API, async fetchy useEffect.",
    status: [
      ["mvp", "done"],
      ["terminado", "done"],
    ],
    techTags: [techs.react, techs.styledComponents, techs.css, techs.fetch],
    url: "https://jk-api-rest-countries.netlify.app/",
    urlGithub:
      "https://github.com/JulianKominovic/rest-api-countries-challenge",
    offsetY: 0,
  },
  {
    title: "Simple Calendar",
    imgSrc: "/imgs/simple-calendar.png",
    desc: "Un calendario simple. Con animaciones, cambios de fondo dinamicos, progressive web app y persistencia respaldada en el LocalStorage.",
    status: [
      ["mvp", "done"],
      ["en proceso", "into"],
    ],
    techTags: [
      techs.react,
      techs.javascript,
      techs.reactSpring,
      techs.styledComponents,
    ],
    url: "https://jk-simple-calendar.netlify.app/",
    urlGithub: "https://github.com/JulianKominovic/react-calendar",
    offsetY: "200 px",
  },
  {
    title: "Monstercat clon",
    imgSrc: "/imgs/monstercat-clon.png",
    desc: "El segundo proyecto que usé para practicar fetching a una API de música, con fetch y axios.",
    status: [
      ["mvp", "fail"],
      ["retirado", "ended"],
    ],
    techTags: [techs.javascript, techs.fetch, techs.axios],
    url: "https://juliankominovic.github.io/monstercat-clone/",
    urlGithub: "https://github.com/JulianKominovic/monstercat-clone",
    offsetY: 0,
  },
  {
    title: "Anterior portfolio",
    imgSrc: "/imgs/portfolio.png",
    desc: "Porfolio anterior. Hecho en Vanilla Javascript, Html y CSS, practicando la metodología BEM.",
    status: [
      ["mvp", "done"],
      ["terminado", "done"],
    ],
    techTags: [techs.javascript, techs.css, techs.html],
    url: "https://juliankominovic.github.io/portfolio/",
    urlGithub: "https://github.com/JulianKominovic/portfolio",
    offsetY: "-200px",
  },
  {
    title: "Netflix clon",
    imgSrc: "/imgs/netflix-clon.png",
    desc: "El primer proyecto de práctica que hice. Principalmente hecho para practicar los position de css, fetching de datos, manejo de eventos y maquetado de contenido multimedia",
    status: [
      ["mvp", "fail"],
      ["retirado", "ended"],
    ],
    techTags: [techs.html, techs.css, techs.javascript],
    url: "https://juliankominovic.github.io/netflix-clon/",
    urlGithub: "https://github.com/JulianKominovic/netflix-clon",
    offsetY: 0,
  },
];
