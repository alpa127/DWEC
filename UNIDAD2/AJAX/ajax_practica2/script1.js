window.onload = inicio;

let contador = 0;
let tiempo;


function inicio() {



    tiempo = setInterval(cargar, 5000);
    var etiquetaVideo;
    var etiquetaId = document.createElement("span");
    etiquetaId.className = "contenedor";



    //crear un objeto XMLhttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {


        //CONTROL DE ESTADO DE LA PETICIÓN DE DATOS Y DEL ESTADO DEL SERVIDOR
        if (this.readyState == 4 && this.status == 200) {
            //He accedidio al fichero de datos y esta abieto el servidor
            //Tengo que averiguar en que formato me llegan los datos para hacer el parseo

            var objeto = JSON.parse(this.responseText);

            let contenedor = document.getElementById("contenedor");

            if (contenedor.children.length > 0) {
                contenedor.removeChild(etiquetaVideo);

            }
            etiquetaVideo = document.createElement("video");
            contenedor.appendChild(etiquetaId);
            etiquetaId.textContent = objeto[contador].id;

            etiquetaVideo.setAttribute("src", objeto[contador].url);
            etiquetaVideo.setAttribute("autoplay", true);

            contenedor.appendChild(etiquetaVideo);

            console.log("cont" + contador + ".total" + objeto.length);

            if (contador == (objeto.length - 1)) {
                contador = 0;
            } else {
                contador++;
            }
            // <video>src=oifeh autoplay</video>

        }
    }
    //PRIMERO HAY QUE HACER LA PETICIÓN
    xhr.open("GET", "getWebcam.json", true);
    xhr.send();
}




