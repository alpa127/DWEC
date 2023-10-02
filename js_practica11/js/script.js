window.onload = inicio;

const NUM_COLUMNAS = 3;
const NUM_CAJAS = 20;
const NUM_CAJAS_SORTEO = 6;

const vectorCajas = [];

function inicio() {
  cuerpo = document.querySelector("body");
  let contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);

  let btnSorteo = document.createElement("button");
  cuerpo.appendChild(btnSorteo);
  btnSorteo.textContent = "Sorteo";
  btnSorteo.onclick = sorteo;

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    let contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);

    contenedorP.appendChild(contenedorS);
    contenedorS.appendChild(leyenda);

    let cont = 0;

    for (let x = 0; x < NUM_CAJAS; x++) {
      let cajasNumeros = document.createElement("div");
      cajasNumeros.className = "gallery div";
      cajasNumeros.textContent = x + 1;
      contenedorS.appendChild(cajasNumeros);

      cajasNumeros.onclick = marcar;
      vectorCajas.push(cajasNumeros);

      function marcar() {
        if (cont == 6) {
          vectorCajas.forEach(accion);

          function accion(item, indice) {
            if (item.style.backgroundColor == "red") {
              console.log(item);
            }
          }
        } else {
          cont++;
          cajasNumeros.style.backgroundColor = "red";
        }
      }
    }
  }
}

function sorteo() {
  //btnSorteo.disabled = true;
  let contenedorSorteo = document.createElement("div");
  contenedorSorteo.className = "gallery2";
  cuerpo.appendChild(contenedorSorteo);

  let vectorN = [];

  for (let i = 0; i < NUM_CAJAS_SORTEO; i++) {
    do {
      numR = Math.round(Math.random() * 20);
    } while (vectorN.includes(numR));

    vectorN.push(numR);

    let cajasNumR = document.createElement("div");
    cajasNumR.className = "gallery2 div";
    cajasNumR.textContent = numR;
    contenedorSorteo.appendChild(cajasNumR);
  }

  vectorCajas.forEach(recorrido);

  let contAciertos = 0;

  let resul = document.createElement("div");
  resul.className = "gallery2 div";
  resul.style.backgroundColor = "blue";
  resul.textContent = contAciertos;
  contenedorSorteo.appendChild(resul);

  function recorrido(item, index) {
    vectorN.forEach(recorrido2);

    function recorrido2(item2, index2) {
      let contAciertos = 0;
      if (item.textContent == item2.textContent) {
        contAciertos++;
      }
    }
  }
  alert(contAciertos);
}
