window.onload=inicio;
function inicio(){

    console.log("entro en inicio");

    let btnJugaz = document.getElementById("mostrarJS");
    btnCargar.onclick=cargarImg;
}

function Jugar(){

    let rutaImg="/js_practica7/img/";

    var cajaPadre=document.getElementById("cajaPadre");
    cajaPadre.setAttribute("display","flex");

    cajaImg.innerHTML = "";

    for(let i=0;i<5;i++){

        let imagenes=document.createElement("img");
        cajaPadre.appendChild(imagenes);

        let numeroFoto=Math.round(Math.random()*93);

        let srcImagenes=rutaImg+numeroFoto+".jpg";
        imagenes.setAttribute("src",srcImagenes);
    
        }

    }