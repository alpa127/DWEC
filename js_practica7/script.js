window.onload=inicio;
function inicio(){

    console.log("entro en inicio");

    let btnJugar = document.getElementById("jugar");
    btnJugar.onclick=Jugar;
}

function Jugar(){

    let rutaImg="js_practica7\img\0.JPG";

    var cajaPadre=document.getElementById("cajaPadre");
    cajaPadre.setAttribute("display","flex");

    cajaPadre.innerHTML = "";

    let imagenes=document.createElement("img");
    cajaPadre.appendChild(imagenes);


    let srcImagenes=rutaImg;
    imagenes.setAttribute("src",srcImagenes);



}