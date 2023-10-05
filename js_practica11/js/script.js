window.onload = inicio;

const NUM_COLUMNAS = 3;
const NUM_CAJAS = 50;
const NUM_CAJAS_SORTEO = 6;

const vectorCajas = [];
let v_numeros = [];

let contAciertos = 0;

function inicio() {
  cuerpo = document.querySelector("body");
  let contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);

  let btnSorteo = document.createElement("button");
  cuerpo.appendChild(btnSorteo);
  btnSorteo.textContent = "Sorteo";
  btnSorteo.onclick = sorteo;

  let btnReset = document.createElement("button");
  cuerpo.appendChild(btnReset);
  btnReset.textContent = "Resetear";
  btnReset.onclick = reset;

  let n_colum = [];
  for (let i = 0; i < NUM_COLUMNAS; i++) {
    let contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);

    contenedorP.appendChild(contenedorS);
    contenedorS.appendChild(leyenda);

    let cont = 0;

    n_colum[i] = [];
    for (let x = 0; x < NUM_CAJAS; x++) {
      let cajasNumeros = document.createElement("div");
      cajasNumeros.className = "gallery div";
      cajasNumeros.textContent = x + 1;
      contenedorS.appendChild(cajasNumeros);
      // const columnaIndex = x % NUM_COLUMNAS;
      // n_colum[columnaIndex].appendChild(cajasNumeros);

      cajasNumeros.onclick = marcar;

      function marcar() {
        if (v_numeros.length < 6 && !v_numeros.includes(x + 1)) {
          console.log("Entro en marcar");
          vectorCajas.push(cajasNumeros);
          console.log("Soy X " + (x + 1));
          v_numeros.push(x + 1);
          cajasNumeros.style.backgroundColor = "red";
          cont++;
        }
        // if (cont == 6) {
        //   vectorCajas.forEach(accion);

        //   function accion(item, indice) {
        //     if (item.style.backgroundColor == "red") {
        //       console.log(item);
        //     }
        //   }
        // } else {
        //   cont++;
        //   cajasNumeros.style.backgroundColor = "red";
        // }
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
      numR = Math.ceil(Math.random() * 50);
    } while (vectorN.includes(numR));

    vectorN.push(numR);
    vectorN.sort();
    let cajasNumR = document.createElement("div");
    cajasNumR.className = "gallery2 div";
    cajasNumR.textContent = numR;
    contenedorSorteo.appendChild(cajasNumR);
  }

  //vectorCajas.forEach(recorrido);

  let resul = document.createElement("div");
  resul.className = "gallery2 div";
  resul.style.backgroundColor = "rgb(0,160,0)";
  resul.textContent = contAciertos;
  contenedorSorteo.appendChild(resul);

  console.log(v_numeros);
  console.log(vectorN);

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (v_numeros[i] == vectorN[j]) {
        contAciertos++;
      }
    }
  }

  // function recorrido(item, index) {
  //   vectorN.forEach(recorrido2);

  //   function recorrido2(item2, index2) {
  //     let contAciertos = 0;
  //     if (item.textContent == item2.textContent) {
  //       contAciertos++;
  //     }
  //   }
  // }
  // alert(contAciertos);

  resul.textContent = contAciertos;

  let contenedorBombo = document.createElement("div");
  contenedorBombo.className = "gallery2";
  cuerpo.appendChild(contenedorBombo);

  for (let i = 0; i < v_numeros.length; i++) {
    let box = document.createElement("div");
    box.className = "gallery2 div";
    box.textContent = v_numeros[i];
    box.style.backgroundColor = "yellow";
    contenedorBombo.appendChild(box);

    if (vectorN.includes(v_numeros[i])) {
      box.style.backgroundColor = "red";
    }
  }
}

function reset() {
  let resultado = prompt(
    "Elige la columna a resetear: - 0 todo \n - 1 columna 1 \n - 2 columna 2 \n - 3 columna 3"
  );

  if (resultado == 1) {
    vectorCajas.forEach(accion1);

    function accion1(item, index) {
      item.style.backgroundColor = " rgb(95, 255, 20)";
    }
    v_numeros = [];
  }
}
