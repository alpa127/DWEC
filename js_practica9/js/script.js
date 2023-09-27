window.onload=inicio;

let btnM = document.getElementById("btn1");
let cuerpo = document.querySelector("body");
const componentes = [];

function inicio(){
    
    let contenedorP = document.createElement("div");
    contenedorP.className="container";
    cuerpo.appendChild(contenedorP);

    let contenedorTodos = document.createElement("fieldset");
    contenedorTodos.className="gallery";
    let contenedorAzul = document.createElement("fieldset");
    let contenedorVerde = document.createElement("fieldset");
    let contenedorRojo= document.createElement("fieldset");
    let contenedorNaranja = document.createElement("fieldset");

    let leyendaTodos = document.createElement("legend");
    let leyendaAzul = document.createElement("legend");
    let leyendaVerde = document.createElement("legend");
    let leyendaRojo = document.createElement("legend");
    let leyendaNaranja = document.createElement("legend");

    
    contenedorP.appendChild(contenedorTodos);
    contenedorP.appendChild(contenedorAzul);
    contenedorP.appendChild(contenedorVerde);
    contenedorP.appendChild(contenedorRojo);
    contenedorP.appendChild(contenedorNaranja);

    leyendaTodos.textContent="Todos";
    contenedorTodos.appendChild(leyendaTodos);

    leyendaAzul.textContent="Azul";
    contenedorAzul.appendChild(leyendaAzul);

    leyendaVerde.textContent="Verde";
    contenedorVerde.appendChild(leyendaVerde);

    leyendaRojo.textContent="Rojo";
    contenedorRojo.appendChild(leyendaRojo);

    leyendaNaranja.textContent="Naranja";
    contenedorNaranja.appendChild(leyendaNaranja);

    let colores = ["Orange","Blue","Green","Red"];
    let coloresT =["Naranja","Azul","Verde","Rojo"];

    for(let i=0;i<20;i++){
        let num1 = Math.round(Math.random()*3);
        let cajaColor = document.createElement("div");
        cajaColor.textContent = coloresT[num1];
        cajaColor.style.backgroundColor = colores[num1];
        cajaColor.className= "gallery";

        componentes.push(cajaColor);
        contenedorTodos.appendChild(cajaColor);
    }


}