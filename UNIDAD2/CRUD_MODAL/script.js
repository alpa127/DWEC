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

    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(clientes, index) {
                let vector = [clientes.dni, clientes.nombre, clientes.apellido, clientes.telefono];
                bloqueHtml.innerHTML += "<div class='row'>" +
                    "<div class='col-lg-2 text-center'>" + clientes.dni + "</div>" +
                    "<div class='col-lg-2 text-center'>" + clientes.nombre + "</div>" +
                    "<div class='col-lg-2 text-center'>" + clientes.apellido + "</div>" +
                    "<div class='col-lg-2 text-center'>" + clientes.telefono + "</div>" +
                    //Simular boton con a href añado clase btn btn-danger (color rojo)
                    "<div class='col-lg-2 text-center'><a class='btn btn-danger btn-md'" +
                    //anulo el href, no hay link, pero si hay evento onclick con
                    //parametro incluido: dni de esa tupla
                    "href='javascript:void(0)' onclick=eliminar(\'" + clientes.dni + "\')>" +
                    //texto del boton e icono
                    "ELIMINAR<span class='glyphicon glyphicon-trash'></span></a></div>" +
                    //td del modificar
                    "<div class='col-lg-2 text-center'><a class='btn btn-danger btn-md' href='javascript:void(0)' onclick=modificar(" + vector + ")" +
                    "MODIFICAR<span class='glyphicon glyphicon-pencil'></span></a></div></div>";
            }
        }
    }


    xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php", true);
    xhr.send();
}

function insertarUsuario() {

}

function eliminar(dni) {

}

function modificar(vector) {

}