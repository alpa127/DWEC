window.onload = inicio;
var tabla = document.querySelector("#cajaTabla");;
var bloqueHtml = document.createElement("div");;
function inicio() {
    let elemento = document.querySelector("#botonAdd");
    elemento.addEventListener("click", insertarUsuario);
    cargarTabla();
}

function cargarTabla() {
    bloqueHtml.innerHTML = "<div class='row'>" +
        "<div class='col-lg-2 text-center'>DNI</div>" +
        "<div class='col-lg-2 text-center'>NOMBRE</div>" +
        "<div class='col-lg-2 text-center'>APELLIDO</div>" +
        "<div class='col-lg-2 text-center'>TELEFONO</div>" +
        "<div class='col-lg-2 text-center'>ELIMINAR</div>" +
        "<div class='col-lg-2 text-center'>MODIFICAR</div></div>";
    tabla.appendChild(bloqueHtml);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;


    if (this.readyState == 4 && this.status == 200) {
        var objeto = JSON.parse(this.responseText);

        objeto.forEach(recorrer);

        function recorrer(clientes, index) {
            bloqueHtml.innerHTML += "<tr>" +
                "<td>" + clientes + "</td>";
        }
    }


    xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php", true);
    xhr.send();
}

function insertarUsuario() {

}