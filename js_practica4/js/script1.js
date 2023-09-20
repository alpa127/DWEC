window.onload=inicio;
function inicio(){
    console.log("entro en inicio");
const colores=["#FF0000","#00FF00","#0000FF","#FFFF00"]
const nombres=["Red","Green","Blue","Yellow"]
let btnJugar=document.getElementById("jugar").onclick=jugar;
let btnParar=document.getElementById("parar").onclick=parar;
let caja=document.getElementsByClassName("fondo");
let spTiempo=document.getElementById("spTiempo");
let spPuntos=document.getElementById("spPuntos");
var tiempo=0;
var puntos=0;


function jugar(){
    btnJugar.disabled=true;
}
}

