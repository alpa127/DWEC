window.onload = inicio;

const NUM_COLUMNAS = 6;
const NUM_CAJAS = 50;
const NUM_CAJAS_SORTEO = 6;

const vectorCajas = [];
let v_numeros = [];

let contAciertos = 0;

const columnas = [];
const vectorColumnas = [];

function inicio() {
  cuerpo = document.querySelector("body");
  let contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);

  let contenedorP2 = document.createElement("div");
  contenedorP2.className = "container2";
  cuerpo.appendChild(contenedorP2);

  let btnSorteo = document.createElement("button");
  contenedorP2.appendChild(btnSorteo);
  btnSorteo.textContent = "Sorteo";
  btnSorteo.classList = "disabledDiv";
  btnSorteo.onclick = sorteo;

  let btnReset = document.createElement("button");
  contenedorP2.appendChild(btnReset);
  btnReset.textContent = "Resetear";
  btnReset.onclick = reset;

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    let contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);

    contenedorP.appendChild(contenedorS);
    contenedorS.appendChild(leyenda);

    let cont = 0;

    columnas.push(contenedorS);
    if (i != 0) {
      contenedorS.classList.add("disabledDiv");
    }
    for (let x = 0; x < NUM_CAJAS; x++) {
      let cajasNumeros = document.createElement("div");
      cajasNumeros.className = "gallery div";
      cajasNumeros.textContent = x + 1;
      contenedorS.appendChild(cajasNumeros);

      cajasNumeros.onclick = marcar;

      function marcar() {
        if (v_numeros.length < 6) {
          if (!v_numeros.includes(x + 1)) {
            console.log("Entro en marcar");
            vectorCajas.push(cajasNumeros);
            console.log("Soy X " + (x + 1));
            v_numeros.push(x + 1);
            cajasNumeros.style.backgroundColor = "red";
            cont++;
            if (cont == 6) {
              columnas[i].classList.add("disabledDiv");
              vectorColumnas.push(v_numeros);
              cont = 0;
              v_numeros = [];
              if (i == NUM_COLUMNAS - 1) {
                btnSorteo.classList.remove("disabledDiv");
              } else {
                columnas[i + 1].classList.remove("disabledDiv");
              }
            }
          } else {
            cont++;
            cajasNumeros.style.backgroundColor = "red";
          }
        } else {
          cajasNumeros.style;
          backgroundColor = "rgb(0,160,0)";
          let n = cajasNumeros.textContent;
          let posicion = v_numeros.indexOf(n);
          v_numeros.splice(posicion, 1);
          cont--;
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
  for (let p = 0; p < columnas.length; p++) {
    let resul = document.createElement("div");
    resul.className = "gallery2 div";
    resul.style.backgroundColor = "rgb(0,160,0)";
    resul.textContent = contAciertos;
    contenedorSorteo.appendChild(resul);

    console.log(vectorColumnas);
    console.log(vectorN);

    for (let z = 0; z < columnas.length; z++) {
      for (let i = 0; i < vectorColumnas.length; i++) {
        if (vectorN.includes(vectorColumnas[z][i])) {
          contAciertos++;
        }
      }
      resul.textContent = contAciertos;
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
  }
  let contenedorBombo = document.createElement("div");
  contenedorBombo.className = "gallery2";
  cuerpo.appendChild(contenedorBombo);

  for (let z = 0; z < columnas.length; z++) {
    for (let i = 0; i < vectorColumnas.length; i++) {
      let box = document.createElement("div");
      box.className = "gallery2 div";
      box.style.backgroundColor = "yellow";
      contenedorBombo.appendChild(box);
      box.textContent = vectorColumnas[z][i];

      if (vectorN.includes(vectorColumnas[z][i])) {
        box.style.backgroundColor = "red";
      }
    }
  }
}

function reset() {
  contenedorP.remove();
  contenedorS.remove();
  v_numeros = [];
  vectorCajas = [];
}
