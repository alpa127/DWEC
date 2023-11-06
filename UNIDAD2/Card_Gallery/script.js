window.onload = inicio;

function inicio() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            //Cogemos la lista y el div contenedor del DOM
            let contenedorIndices = document.querySelector(".carousel-indicators");
            let contenedorImagenes = document.querySelector(".carousel-inner");
            let contenedorCar = document.querySelector("#cards");
            //Al hacer parse nos devuelve un objeto
            var arrayJson = JSON.parse(this.responseText);
            var nItems = String(arrayJson).length / 4;

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
                    caja.className = "carousel-item active";
                } else {
                    caja.className = "carousel-item";
                }

                //PARTE 3: IMAGEN
                //Creamos la imagen y le damos atributos

                let fila = document.createElement("row");
                let imag = document.createElement("img");
                imag.setAttribute("src", fotoCamacho.imagen);

                imag.style = "width:100%;height:50vh;";

                //Crear texto para añadir nombre del empleado
                let nombre = document.createElement("span");
                nombre.textContent = fotoCamacho.nombre;


                //Meto la imagen en la caja y la caja en el contenedor
                caja.appendChild(imag);
                //caja.appendChild(nombre);
                contenedorImagenes.appendChild(caja);

                let columna4 = document.createElement("div");
                columna4.className = "col-lg-4";
                let equipo = document.createElement("div");
                equipo.className = "equipo";

                let equipo_foto = document.createElement("div");
                equipo_foto.className = "equipo_foto";

                columna4.appendChild(equipo);
                equipo.appendChild(equipo_foto);

                let imagen = document.createElement("img");
                imagen.setAttribute("src", fotoCamacho.imagen);
                equipo_foto.appendChild(imagen);

                let nombreEmpleado = document.createElement("h3");
                nombreEmpleado.innerHTML = fotoCamacho.nombre;

                equipo.appendChild(nombreEmpleado);

                let textoDireccion = document.createElement("div");
                textoDireccion.className = "equipo_texto";

                let spanDireccion = document.createElement("span");
                spanDireccion.innerHTML = fotoCamacho.direccion;

                textoDireccion.appendChild(spanDireccion);

                contenedorCar.appendChild(columna4);

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




//  <div class="col-lg-4">

// <div class="equipo">

//     <div class="equipo_foto">
//         <img src="https://randomuser.me/api/portraits/women/17.jpg" class="img-fluid" />
//         <h3>Lola</h3>
//         <p>Web Designer</p>
//     </div>

//     <div class="equipo_texto">
//         <span>
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque penatibus et magnis dis parturient montes,
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque.
//         </span>
//     </div>

// </div>
// </div>
// <!--team-1-->

// <!--team-2-->
// <div class="col-lg-4">
// <div class="equipo">

//     <div class="equipo_foto">
//         <img src="https://randomuser.me/api/portraits/men/82.jpg" class="img-fluid" />
//         <h3>Paco</h3>
//         <p>Web Designer</p>
//     </div>

//     <div class="equipo_texto">
//         <span>
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque penatibus et magnis dis parturient montes,
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque.
//         </span>
//     </div>

// </div>
// </div>
// <!--team-2-->

// <!--team-3-->
// <div class="col-lg-4">
// <div class="equipo">

//     <div class="equipo_foto">
//         <img src="https://randomuser.me/api/portraits/men/58.jpg" class="img-fluid" />
//         <h3>Pepe</h3>
//         <p>Web Designer</p>
//     </div>

//     <div class="equipo_texto">
//         <span>
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque penatibus et magnis dis parturient montes,
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque.
//         </span>
//     </div>

// </div>
// </div>
// <!--team-3-->

// <!--team-4-->
// <div class="col-lg-4">
// <div class="equipo">

//     <div class="equipo_foto">
//         <img src="https://randomuser.me/api/portraits/men/60.jpg" class="img-fluid" />
//         <h3>Manuel</h3>
//         <p>Web Designer</p>
//     </div>

//     <div class="equipo_texto">
//         <span>
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque penatibus et magnis dis parturient montes,
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque.
//         </span>
//     </div>

// </div>
// </div>
// <!--team-4-->

// <!--team-5-->
// <div class="col-lg-4">
// <div class="equipo">

//     <div class="equipo_foto">
//         <img src="https://randomuser.me/api/portraits/women/58.jpg" class="img-fluid" />
//         <h3>Carmela</h3>
//         <p>Web Designer</p>
//     </div>

//     <div class="equipo_texto">
//         <span>
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque penatibus et magnis dis parturient montes,
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque.
//         </span>
//     </div>

// </div>
// </div>
// <!--team-5-->

// <!--team-6-->
// <div class="col-lg-4">
// <div class="equipo">

//     <div class="equipo_foto">
//         <img src="https://randomuser.me/api/portraits/men/34.jpg" class="img-fluid" />
//         <h3>José Carlos</h3>
//         <p>Web Designer</p>
//     </div>

//     <div class="equipo_texto">
//         <span>
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque penatibus et magnis dis parturient montes,
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
//             Aenean massa. Cum sociis
//             natoque.
//         </span>
//     </div>

// </div>
// </div>
// </div>