window.addEventListener("load", inicio);
function inicio() {
    let btnMostrar = document.getElementById("mostrar");
    btnMostrar.addEventListener("click", mostrar);
}

function mostrar() {
    //crear un objeto XMLhttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;
    function cargar() {
        //CONTROL DE ESTADO DE LA PETICIÓN DE DATOS Y DEL ESTADO DEL SERVIDOR
        if (this.readyState == 4 && this.status == 200) {
            //He accedidio al fichero de datos y esta abieto el servidor
            //Tengo que averiguar en que formato me llegan los datos para hacer el parseo
            var objeto = JSON.parse(this.responseText);
            let container = document.querySelector("#contendedor");
            container.innerHTML = "";
            let numR = Math.floor(Math.random() * 7);

            let divX = document.createElement("div");
            divX.className = "col-lg-3";
            divX.innerHTML = "<video src='" + objeto(numR).url + "' width='200' height='100'" +
                "autoplay loop> </video>";
            container.appendChild(divX);
        }
    }
    //PRIMERO HAY QUE HACER LA PETICIÓN
    xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
    xhr.send();

}