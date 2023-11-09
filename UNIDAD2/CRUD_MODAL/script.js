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
    var xhr = new XMLHttpRequest();
    tabla.appendChild(bloqueHtml);
}

function insertarUsuario() {

}