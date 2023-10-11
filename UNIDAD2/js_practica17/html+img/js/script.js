window.onload = inicio;
const imagenes = [
  "./img/gallery/gallery-1.jpg",
  "./img/gallery/gallery-2.jpg",
  "./img/gallery/gallery-3.jpg",
  "./img/gallery/gallery-4.jpg",
  "./img/gallery/gallery-5.jpg",
  "./img/gallery/gallery-6.jpg",
  "./img/gallery/gallery-7.jpg",
  "./img/gallery/gallery-8.jpg",
];
const ciudades = [
  "Londres",
  "Tokyo",
  "Roma",
  "Berlín",
  "New York",
  "Toril",
  "Talayuela",
  "Navalmoral",
];
const traduccionMenu = ["Team A", "Team B", "Team C", "Team D", "Team E"];
const Servicios = [
  "RRHH",
  "Contabilidad",
  "Marketing",
  "Diseño",
  "Producción",
  "Desarrollo",
];
const nombreWeb = "DWEC";
const subTitulo = "Desarrollo web entorno cliente";
let logotipo = "./img/apple-touch-icon.png";
let nuevoPlaceHolder = "teclea un correo de educarex";
let nuevoServicio = "Nuevos Servicios";
let contenidoServicios = [
  "./img/chefs/chefs-1.jpg",
  "./img/chefs/chefs-2.jpg",
  "./img/chefs/chefs-3.jpg",
  "./img/chefs/chefs-4.jpg",
  "./img/chefs/chefs-5.jpg",
  "./img/chefs/chefs-6.jpg",
];

const itemContenido = [
  "cuarto slash",
  "quinto slash",
  "sexto slash",
  "septimo slash",
];
const autor = ["Lola", "Paca", "Berta", "Ramira"];
NuevoPrecio = ["Precio X", "Precio Y", "Precio Z"];
A = [20, 30, 50, 20];
B = [340, 345, 344, 320];
C = [30, 20, 30, 10];
D = [100, 200, 300, 400];

function inicio() {
  let navegacion = document.querySelectorAll("nav ul li a");
  console.log(navegacion);

  let logo = document.querySelector("[href='#myPage']");
  logo.textContent = "";
  let imagen = document.createElement("img");
  imagen.src = "img/apple-touch-icon.png";
  logo.appendChild(imagen);

  let cabecera = document.querySelector("h1");
  cabecera.textContent = "2ºDAW";

  let subtitulo = document.querySelector("div p");
  subtitulo.textContent = "Los pitbull de javascript";

  let servicios = document.querySelector("#services > h2");
  servicios.textContent = "Nuevos Servicios";

  let listaServicios = document.querySelectorAll("span ~ h4");

  listaServicios.forEach(mostrarServicios);

  function mostrarServicios(item, indice) {
    item.textContent = Servicios[indice];
    let imgS = document.createElement("img");
    imgS.src = contenidoServicios[indice];
    item.appendChild(imgS);
  }

  let galeria = document.querySelectorAll("#galeria img");

  galeria.forEach(mostrarPortfolio);

  function mostrarPortfolio(item, indice) {
    item.src = imagenes[indice];
  }

  let teamDaw = ["Manuel", "Mario", "Mauro", "Alvaro", "Raul"];
  let enlaceDaw = [
    "http://practicasmanuelbote.atwebpages.com",
    "http://raulblazquez.web.community.org",
    "http://mariojuarez.atwebpages.com",
    "http://mariojuarez.atwebpages.com",
    "http://mariojuarez.atwebpages.com",
  ];

  navegacion.forEach(accion);

  function accion(item, indice) {
    item.textContent = teamDaw[indice];
    item.href = enlaceDaw[indice];
    item.setAttribute("target", "_blank");
    // item.target = "_blank";
  }
}
