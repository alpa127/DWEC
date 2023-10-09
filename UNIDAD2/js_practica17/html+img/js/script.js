window.onload = inicio;

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
