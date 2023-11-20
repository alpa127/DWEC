window.onload = inicio;
var tabla = document.querySelector("#cajaTabla");
var bloqueHtml = document.createElement("div");

function inicio() {
    let elemento = document.querySelector("#btnInsertar");
    elemento.addEventListener("click", insertarUsuario);

    cargarTabla();
}
function cargarTabla() {
    console.log("entro en cargarTabla")

    bloqueHtml.innerHTML = "<div class='row'>" +
        "<div class='col-lg-2 text-center' >ID</div>" +
        "<div class='col-lg-2 text-center' >NOMBRE</div>" +
        "<div class='col-lg-2 text-center' >PRECIO</div>" +
        "<div class='col-lg-2 text-center' >ELIMINAR</div>" +
        "<div class='col-lg-2 text-center' >MODIFICAR</div></div>";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {


        //CONTROL DE ESTADO DE LA PETICIÓN DE DATOS Y DEL ESTADO DEL SERVIDOR
        if (this.readyState == 4 && this.status == 200) {
            //he accedido al fichero de datos y está abierto el servidor
            //tengo que averiguar en qué formato me llegan los datos para hacer el parseo
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(frutas, index) {
                console.log("vector" + frutas.id);
                let vector = [frutas.id, frutas.name, frutas.price, frutas.photo];
                bloqueHtml.innerHTML += "<div class='row'> " +
                    "<div class='col-lg-2 text-center'>" + frutas.id + "</div>" +
                    "<div class='col-lg-2 text-center'>" + frutas.name + "</div>" +
                    "<div class='col-lg-2 text-center'>" + frutas.price + "</div>" +
                    "<img src='" + frutas.photo + "' alt='foto de fruta' width='100px'>" +
                    //simular botón con a href añado clase btn btn-danger (color rojo)
                    "<div class='col-lg-2 text-center mb-2'><a class='btn btn-danger btn-md'" +
                    //anulo el href, no hay link , pero sí hay evento onclick con 
                    //parámetro incluido: dni de esa tupla
                    " href='javascript:void(0)' onclick=eliminar(\'" + frutas.dni + "\')>" +
                    //texto del botón e icono
                    "ELIMINAR<i class='bi bi-trash'></i> </a></div> " +
                    //td del modificar
                    "<div class='col-lg-2 text-center'><a class='btn btn-info btn-md' " +
                    "href='javascript:void(0)' onclick=modificar('" + vector + "')>" +
                    "MODIFICAR<i class='bi bi-arrow-clockwise'></i> </a></div>";
            }
        }
    }
    //PRIMERO HAY QUE HACER LA PETICIÓN
    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/productos/index.php", true);
    xhr.send();

    tabla.appendChild(bloqueHtml);
}


function insertarUsuario() {
    console.log("entro en insertar");
    let idTxt = document.querySelector("#txtID").value;
    let nombreTxt = document.querySelector("#txtNombre").value;
    let precioTxt = document.querySelector("#txtPrecio").value;
    let photoTxt = document.querySelector("#txtPhoto").value;

    document.querySelector("#btnModificar").disabled = true;


    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/productos/create_product.php",
        type: "POST",
        data: {
            //sintaxis. variablePHP : variableJs
            id: idTxt,
            name: nombreTxt,
            price: precioTxt,
            photo: photoTxt
        },
        dataType: "JSON",
    });
    location.reload();
}
function eliminar(dni) {
    console.log("entro en eliminar" + dni);
    let respuesta = confirm("¿Estás seguro de querer eliminar?" + dni + "?");
    //Cargar el método AJAX que ejecuta el servicio eliminar.php
    if (respuesta) {
        $.ajax({
            //url del servicio
            url: "http://moralo.atwebpages.com/menuAjax/productos/delete_product.php",
            //method
            type: "POST",
            data: {
                id: id,
            },
            dataType: "JSON",
        });
        location.reload();
    }
}
function modificar(vector) {
    console.log("entro en modificar" + vector);
    let cadena = String(vector);
    let deserializar = cadena.split(",");
    document.querySelector("#txtID").value = deserializar[0];
    document.querySelector("#txtID").setAttribute("disabled", true);
    document.querySelector("#txtNombre").value = deserializar[1];
    document.querySelector("#txtPrecio").value = deserializar[2];
    document.querySelector("#txtPhoto").value = deserializar[3];

    document.querySelector("#btnInsertar").disabled = true;
    document.querySelector("#btnModificar").disabled = false;

    $('#formfrutasModal').modal("show");
    document.querySelector("#btnModificar").addEventListener("click", accionAjaxModificar);
    function accionAjaxModificar() {
        let idTxt = document.querySelector("#txtDni").value;
        let nombreTxt = document.querySelector("#txtNombre").value;
        let precioTxt = document.querySelector("#txtPrecio").value;
        let photoTxt = document.querySelector("#txtPhoto").value;

        $.ajax({
            url: "http://moralo.atwebpages.com/menuAjax/frutas/modificarfrutas.php",
            type: "POST",
            data: {
                //sintaxis. variablePHP : variableJs
                id: idTxt,
                name: nombreTxt,
                price: precioTxt,
                photo: photoTxt
            },
            dataType: "JSON",
        });
    }

}