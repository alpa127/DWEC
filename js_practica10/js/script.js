window.onload=inicio;

let btn1=document.getElementById("btnA");
let btn2=document.getElementById("btnA2");
let cuerpo =document.querySelector("body");

const componentes=[];

function inicio(){

    btn1.onclick=avanzar;
    btn2.onclick=avanzar2;

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

        componentes.forEach(accion);
        function accion(item,indice){
            item.style.backgroundColor="green";
        }
        
       var numeroCaja=0;
       let contador1=setInterval(cambioR,200);
        function cambioR(){
            if(componentes[numeroCaja].style.backgroundColor= "green"){
            componentes[numeroCaja].style.backgroundColor="red";
            numeroCaja++;
            }else{
                componentes[numeroCaja].style.backgroundColor="green";
                numeroCaja++;
            }
        }
    }
    let contador2=setInterval(cambioR,200);
    function avanzar2(){
        clearInterval()
        var numeroCaja=0;
        let contador2=setInterval(cambioR,200);
        function cambioR(){
            if(numeroCaja<componentes.length){
            componentes[numeroCaja].style.backgroundColor="red";
            if(numeroCaja>0){
                componentes[numeroCaja -1].style.backgroundColor="green";
            }numeroCaja++;
            }else{
                componentes[numeroCaja-1].style.backgroundColor="green";
                numeroCaja=0;
            }
            
        }
        }
    
}