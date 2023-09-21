window.addEventListener("load",inicio);
//identificar componentes html
let btnJugar=document.getElementById("jugar");
let spPuntos=document.getElementById("sppuntos");
let contenedorPrincipal=document.getElementById("contenedorP");
//declar vectores
const colores=["Red","Green","Blue","Orange","Yellow"];
const nombres=["Red","Green","Blue","Orange","Yellow"];
//variables
let tiempo;
let contadorSegundos=0;
let puntos=0;

function inicio(){
    console.log("entro en inicio");
    let campo=document.createElement("fieldset");
    //Incorpora al nuevo componente creado
    //El estilo de clase .container que está en el css
    campo.className="container";

    let leyenda=document.createElement("legend");
    leyenda.textContent="Juegos 21 S";
    campo.appendChild(leyenda);

    let contenedorFlex=document.createElement("div");
    contenedorFlex.className="gallery";

    //Crear los 15 botones
    for (let i=0;i<15; i++){
        let divs=document.createElement("div");
        divs.className="fondo";
        divs.setAttribute("Name","cajasJuego");
        contenedorFlex.appendChild(divs);
    }
    //Campo se añade a su inmediato superior
    campo.appendChild(contenedorFlex);

    //añadir campo al contenedor principal
    contenedorPrincipal.appendChild(campo);
    btnJugar.onclick=Jugar;
}

function Jugar(){
    console.log("Entro en jugar")
    contadorSegundos=30;
    puntos=0;
    btnJugar.disables=false;
    cargarInfo();
    coloresJuego();
    //temporizador
    tiempo=setInterval(accion,1000);
    function accion(){
        if(contadorSegundos>0){
            contadorSegundos--;
            cargarInfo();
        }else{
            limpiarDivs();
            alert("fin de partida")
            clearInterval(tiempo);
        }
    }
}

function cargarInfo(){

}
function coloresJuego(){
    let arrayCajasJuego=document
}
function limpiarDivs(){

}