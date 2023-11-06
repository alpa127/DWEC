window.onload = inicio;

function inicio() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            //Cogemos la lista y el div contenedor del DOM
            let contenedorIndices = document.querySelector("carousel-indicators");
            //let lista = document.getElementById("lista");
            let contenedorImagenes = document.querySelector("carousel-inner");
            //Al hacer parse nos devuelve un objeto
            var arrayJson = JSON.parse(this.responseText);

            arrayJson.forEach(function (fotoCamacho, posicion) {

                //PARTE 1: LISTA OL
                //Creamos el elemento li de la lista para cada imagen
                let elemento = document.createElement("li");
                elemento.setAttribute("data-target", "#carouselId");
                elemento.setAttribute("data-slide-to", posicion);

                //Compruebo si es el primer li
                if (posicion == 0) {
                    elemento.className = "active";
                }

                //Meto los li a la lista
                contenedorIndices.appendChild(elemento);

                //PARTE 2: DIV DE LA IMAGEN
                //Creamos el div que  va a tener las clases y la imagen
                let caja = document.createElement("div");

                //Compruebo si la caja es el primer item del carousel
                if (posicion == 0) {
                    caja.className = "item active";
                } else {
                    caja.className = "item";
                }

                //PARTE 3: IMAGEN
                //Creamos la imagen y le damos atributos
                let imag = document.createElement("img");
                imag.setAttribute("src", fotoCamacho.imagen);

                imag.style = "width:100%;height:50vh;";

                //Crear texto para añadir nombre del empleado
                let nombre = document.createElement("span");
                nombre.textContent = fotoCamacho.nombre;


                //Meto la imagen en la caja y la caja en el contenedor
                caja.appendChild(imag);
                caja.appendChild(nombre);
                contenedor.appendChild(caja);

            });

        }
    };



    xhr.open("GET", "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php", true);
    xhr.send();
}



//  < div class="row" >
//     <div class="col-md-3">
//         <a href="#">
//             <img src="https://picsum.photos/200/201/?random" alt="Image" style="max-width:100%;">
//         </a>
//         <div class="carousel-caption d-none d-md-block">
//             <h3>Título 1</h3>
//             <p>Descripción</p>
//         </div>
//     </div> 