window.onload=inicio;
function inicio(){
    console.log("entro en inicio");
const colores=["#FF0000","#00FF00","#0000FF","#FFFF00"]
const nombres=["Red","Green","Blue","Yellow"]
var btnJugar=document.getElementById("jugar")
btnJugar.onclick=empezar;
let btnParar=document.getElementById("parar").onclick=parar;
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
    let caja=document.getElementById("fondo");
    let num1=Math.round(Math.random()*3);
    let num2=Math.round(Math.random()*3);
    console.log(colores[num1])
    caja.style.backgroundColor=colores[num1];
    document.getElementById("nom").textContent=""+nombres[num2];
    spTiempo.textContent="Tiempo: " + contadorSegundos;
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
        spPuntos.textContent="Puntos: " + puntos;
    }
}
function fin(){

}
}

