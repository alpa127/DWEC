console.log("entro al js");

window.addEventListener("load", inicio);

function inicio() {

    console.log("entro al inicio");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            //Cogemos la lista y el div contenedor del DOM
            let contenedor = document.getElementById("contenedor");
            let lista = document.getElementById("lista");

            //Al hacer parse nos devuelve un objeto
            var arrayJson = JSON.parse(this.responseText);

            arrayJson.forEach(function (videoCamacho, posicion) {

                //PARTE 1: LISTA OL
                //Creamos el elemento li de la lista para cada video
                let elemento = document.createElement("li");
                elemento.setAttribute("data-target", "#myCarousel");
                elemento.setAttribute("data-slide-to", posicion);

                //Compruebo si es el primer li
                if (posicion == 0) {
                    elemento.className = "active";
                }

                //Meto los li a la lista
                lista.appendChild(elemento);

                //PARTE 2: DIV DEL VIDEO
                //Creamos el div que  va a tener las clases y el video
                let caja = document.createElement("div");

                //Compruebo si la caja es el primer item del carousel
                if (posicion == 0) {
                    caja.className = "item active";
                } else {
                    caja.className = "item";
                }

                //PARTE 3: IMAGEN
                //Creamos el video y le damos atributos
                let vid = document.createElement("video");
                vid.setAttribute("src", videoCamacho.url);
                vid.setAttribute("autoplay", true);
                vid.style = "width:100%;height:500px";

                //Meto el video en la caja y la caja en el contenedor
                caja.appendChild(vid);
                contenedor.appendChild(caja);

            });

        }
    };

    xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
    xhr.send();

}