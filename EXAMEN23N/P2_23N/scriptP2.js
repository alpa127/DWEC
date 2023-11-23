window.onload = inicio;

function inicio() {


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let contenedorIndices = document.querySelector(".carousel-indicators");
            let contenedorImagenes = document.querySelector(".carousel-inner");
            let caja = document.createElement("div");



            var arrayJson = JSON.parse(this.responseText);

            arrayJson.forEach(recorrer);


            function recorrer(empleados, index) {

                let elemento = document.createElement("li");
                elemento.setAttribute("data-target", "#carousel-example-generic");
                elemento.setAttribute("data-slide-to", index);

                if (index == 0) {
                    elemento.className = "active";
                }

                contenedorIndices.appendChild(elemento);

                caja = document.createElement("div");

                if (index == 0) {
                    caja.className = "item active";
                } else {
                    caja.className = "item";
                }

                caja.innerHTML +=
                    '<div class="mask">' +
                    '<img src="' + empleados.imagen + '">' +
                    '</div>' +
                    '<div class="carousel-testimonial-caption">' +
                    '<p>' + empleados.cargo + '</p>' +
                    '<h3>' + empleados.nombre + '</h3>' +
                    '</div>' +
                    '</div>';
                contenedorImagenes.appendChild(caja);


            };

        };


    };
    xhr.open("GET", "http://moralo.atwebpages.com/Empleados/getEmpleados.php", true);
    xhr.send();

}