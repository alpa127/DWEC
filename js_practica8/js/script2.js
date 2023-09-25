window.onload=inicio;
function inicio(){

    console.log("entro en inicio");

    let btnCargar = document.getElementById("mostrarJS");
    btnCargar.onclick=cargarImg;
}

function cargarImg(){

    
    let rutaImgHombres="https://randomuser.me/api/portraits/men/";
    let rutaImgMujeres="https://randomuser.me/api/portraits/women/";

    var cajaImg=document.getElementById("cajaImagenes");
    cajaImg.setAttribute("display","flex");

    cajaImg.innerHTML = "";

    for(let i=0;i<10;i++){

        let imagenes=document.createElement("img");
        cajaImg.appendChild(imagenes);

        let numeroFoto=Math.round(Math.random()*93);

        let srcImagenes=rutaImgHombres+numeroFoto+".jpg";
        imagenes.setAttribute("src",srcImagenes);
    
        }

    for(let i=0;i<10;i++){

        let imagenes=document.createElement("img");
        cajaImg.appendChild(imagenes);
    
        let numeroFoto=Math.round(Math.random()*93);
    
        let srcImagenes=rutaImgMujeres+numeroFoto+".jpg";
        imagenes.setAttribute("src",srcImagenes);
        
        }
        
       
        
    }

     

