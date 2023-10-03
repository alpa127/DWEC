window.onload = inicio;

const NUM_CARTON = 5;
const NUM_BINGO = 99;

const vectorNum = [];

function inicio() {
  cuerpo = document.querySelector("body");
  let cajaP = document.createElement("div");
  cajaP.className = "container";
  cuerpo.appendChild(cajaP);

  let carton = document.createElement("fieldset");
  carton.className = "gallery";
  cajaP.appendChild(carton);

  let leyenda = document.createElement("legend");
  leyenda.textContent = "Carton del Bingo";
  carton.appendChild(leyenda);

  for (let i = 0; i < NUM_CARTON; i++) {
    num = document.createElement("div");
    num.className = "gallery div";
    carton.appendChild(num);
    let numR = Math.round(Math.random() * NUM_BINGO);
    num.textContent = numR;
    vectorNum.push(numR);
  }

  let btnNum = document.createElement("button");
  btnNum.textContent = "Generar Botón";
  cuerpo.appendChild(btnNum);
  btnNum.onclick = generarNum;
}

function generarNum() {
  cajaB = document.createElement("fieldset");
  cajaB.className = "gallery div";
  cuerpo.appendChild(cajaB);
  let numRandom = Math.round(Math.random() * NUM_BINGO);
  cajaB.textContent = numRandom;
}
