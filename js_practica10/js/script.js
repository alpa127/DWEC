window.onload=inicio;

let btn1=document.getElementById("btnA");
let btn2=document.getElementById("btnA2");
let cuerpo =document.querySelector("body");

const componentes=[];

function inicio(){

    btn1.onclick=avanzar;

    let contenedorP=document.createElement("div");
    contenedorP.className="container";
    let contenedorS=document.createElement("div");
    contenedorS.className="gallery";
    contenedorP.appendChild(contenedorS);
    cuerpo.appendChild(contenedorP);

    crearCajas();

    function crearCajas(){
        for(let i=0;i<40;i++){
            let caja=document.createElement("div");
            caja.className="fondo";

            componentes.push(caja);
            contenedorS.appendChild(caja);
        }
    }

    function avanzar(){
        
       var numeroCaja=0;

        let contador1=setInterval(cambioR,500);
        
        function cambioR(){
            componentes[numeroCaja].style.backgroundColor="red";
            numeroCaja++;
        
          
           
            
        }
    }
}