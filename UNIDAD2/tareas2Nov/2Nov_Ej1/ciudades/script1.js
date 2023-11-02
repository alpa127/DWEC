window.addEventListener("load", inicio);
function inicio() {


    function metodo() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var objeto = JSON.parse(this.responseText);

                let cuerpo = document.getElementById("caja");

                objeto.forEach(accion);

                function accion(item, indice) {
                    //Crear las filas y las celdas.
                    let fila = document.createElement("tr");
                    cuerpo.appendChild(fila);

                    let celdaId = document.createElement("td");
                    celdaId.innerHTML = item.ciudad_ID;
                    fila.appendChild(celdaId);

                    let celdaCiudad = document.createElement("td");
                    celdaCiudad.innerHTML = item.ciudad_nombre;
                    fila.appendChild(celdaCiudad);

                    let celdaHabitantes = document.createElement("td");
                    celdaHabitantes.innerHTML = item.ciudad_poblacion;
                    fila.appendChild(celdaHabitantes);

                    let celdaVideo = document.createElement("td");
                    celdaVideo.innerHTML = item.video;
                    fila.appendChild(celdaVideo);

                    let celdaImagen = document.createElement("td");
                    celdaImagen.innerHTML = item.imagen;
                    fila.appendChild(celdaImagen);

                    let celdaMapa = document.createElement("td");
                    celdaMapa.innerHTML = item.mapa;
                    fila.appendChild(celdaMapa);











                }


            }
        };

        xhr.open("GET", "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php", true);
        xhr.send();
    }
}