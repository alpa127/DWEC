window.onload = inicio;

function inicio() {
    
    let contenedorP = document.createElement("div");
    contenedorP.className = "container";
    let cuerpo = document.querySelector("body");
    cuerpo.appendChild(contenedorP);

    let contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    contenedorP.appendChild(contenedorS);

    let leyenda = document.createElement("legend");
    leyenda.textContent = "Practica 8";
    contenedorS.appendChild(leyenda);

    var contadorBordes = 0;

    var segundos = 30;
    var temporizador = setInterval(refrescar, 10000);

    refrescar();


    function refrescar() {
        // contenedorS.innerHTML="";
         let arrayimg=document.querySelectorAll("img");
         arrayimg.forEach(function(item,indice){
                contenedorS.removeChild(item);
         });
            
        

        for (let i = 0; i < 20; i++) {
            let numR = Math.round(Math.random() * 20);

            let rutaImgH = "https://randomuser.me/api/portraits/men/";
            let rutaImgM = "https://randomuser.me/api/portraits/women/";

            let imagenes = document.createElement("img");
            imagenes.className = "gallery img";
            contenedorS.appendChild(imagenes);


            if (i % 2 == 0) {
                imagenes.src = rutaImgH + numR + ".jpg";
            } else {
                imagenes.src = rutaImgM + numR + ".jpg";
            }

            imagenes.onmouseover = expandir;
            imagenes.onmouseleave = encoger;
            imagenes.onclick = bordes;


            function expandir() {
                imagenes.style.transform = "scale(1.5)";
            }

            function encoger() {
                imagenes.style.transform = "scale(1)";
            }
            function bordes() {


                if (imagenes.className == "ponerBorde") {
                    imagenes.className = "quitarBorde";
                    contadorBordes--;
                } else {
                    if (contadorBordes == 6) {
                        return;
                    }
                    imagenes.className = "ponerBorde";
                    contadorBordes++;

                }
                // if(contadorBordes==6){
                //      let arrayimg=document.querySelectorAll("img");
                //      arrayimg.forEach(function(item, indice){
                //      item.disabled=true;
                //      });

                // }



            }

        }

    }

}