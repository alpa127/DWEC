window.onload=inicio;
function inicio(){

    console.log("entro en inicio");

    let btnJugar = document.getElementById("jugar");
    btnJugar.onclick=Jugar;
}

function Jugar(){

    let rutaImg="img/";

    const numFoto=[];

    const cajaPadre=document.getElementById("cajaPadre");
    let spRepetidas=document.getElementById("sppuntos2");
    let spNoRepetidas=document.getElementById("sppuntos2");

    cajaPadre.innerHTML = "";

    for(let i=0;i<5;i++){

        let imagenes=document.createElement("img");
        cajaPadre.appendChild(imagenes);

        let numeroFoto=Math.round(Math.random()*19);
        numFoto[i]=numeroFoto;

        let srcImagenes=rutaImg+numeroFoto+".jpg";
        imagenes.setAttribute("src",srcImagenes);
    }

    if(numFoto[1]==numFoto[2] || numFoto[1]==numFoto[3] || numFoto[1]==numFoto[4] || numFoto[1]==numFoto[5]){
        spRepetidas.textContent="HAY REPETIDAS";
     }else if(numFoto[2]==numFoto[1] || numFoto[2]==numFoto[3] || numFoto[2]==numFoto[4] || numFoto[2]==numFoto[5]){
         spRepetidas.textContent="HAY REPETIDAS";
     }else if(numFoto[3]==numFoto[1] || numFoto[3]==numFoto[2] || numFoto[3]==numFoto[4] || numFoto[3]==numFoto[5]){
         spRepetidas.textContent="HAY REPETIDAS";
     }else if(numFoto[4]==numFoto[1] || numFoto[4]==numFoto[2] || numFoto[4]==numFoto[3] || numFoto[4]==numFoto[5]){
         spRepetidas.textContent="HAY REPETIDAS";
     }else if(numFoto[5]==numFoto[1] || numFoto[5]==numFoto[2] || numFoto[5]==numFoto[3] || numFoto[5]==numFoto[4]){
         spRepetidas.textContent="HAY REPETIDAS";
     }else{
         spNoRepetidas.textContent="NO HAY REPETIDAS";
     }

    }


