window.onload=inicio;
function inicio(){
    console.log("entro en inicio");
const colores=["#FF0000","#00FF00","#0000FF","#FFFF00"]
const nombres=["Red","Green","Blue","Yellow"]
var btnJugar=document.getElementById("jugar")
btnJugar.onclick=empezar;
let btnParar=document.getElementById("parar").onclick=parar;
let caja=document.getElementsByClassName("fondo");
let spTiempo=document.getElementById("spTiempo");
let spPuntos=document.getElementById("spPuntos");
var tiempo=0;
var puntos=0;
var contadorSegundos=30;

function empezar(){
    btnJugar.disabled=true;
    tiempo=setInterval(juego,1000);
}

function juego(){
    let num1=Math.round(Math.random()*3);
    caja.style.backgroundColor=colores[num1];
    let num2=Math.round(Math.random()*3);
    document.getElementsByTagName("p").textContent=nombres[num2];
    spTiempo.textContent=contadorSegundos;
    contadorSegundos--;
    if(contadorSegundos==0){
        clearInterval(tiempo);
    }
    caja.onclick=comprobar;
    function comprobar(){
        if(num1==num2){
            puntos++;
        }else{
            puntos--;
        }
    }
}
}

