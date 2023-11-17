window.onload = inicio;
let cajaFrutas = document.querySelector("#cajaFrutas");
cajaFrutas.innerHTML = "";
let bloqueHtml = document.createElement("div");
let contenedorCesta = document.querySelector("#cestaCompra");
let precioTotal = document.getElementById("precio");
var total = 0;

let pwd = document.getElementById("idPwd");
let btnGestionAl = document.getElementById("confirmar");
btnGestionAl.onclick = login;


function inicio() {


    cargarFrutas();

}

function cargarFrutas() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(frutas, index) {
                let vector = [frutas.id, frutas.name, frutas.photo, frutas.price];
                bloqueHtml.className = "row";
                bloqueHtml.innerHTML += '<div class="col-lg-4">' +
                    '<img class="card-img-top" src="' + frutas.photo + '" width="100%" alt="' + frutas.id + '"' +
                    'onclick=anyadirCesta("' + vector + '")>' +
                    '<div class="card-body" onclick="anyadirCesta">' +
                    '<h4 class="card-title">' + frutas.name + '</h4>' +
                    '<p class="card-text">' + frutas.price + '</p>' +
                    '</div>' +
                    '</div>';


            }

        }
    }
    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/productos/index.php", true);
    xhr.send();

    cajaFrutas.appendChild(bloqueHtml);
}

function anyadirCesta(vector) {
    console.log(vector);
    let cajaTr = document.createElement("tr");
    let vectorX = vector.split(",");
    let peso = prompt("Teclea los kgs de " + vectorX[1]);
    var calculoPrecio = peso * parseFloat(vectorX[3]);
    total = total + calculoPrecio;
    precioTotal.textContent = total;


    if (peso && !isNaN(peso)) {
        cajaTr.innerHTML = '<td>' + vectorX[1] + '</td></tr>' +
            '<tr><td>' + peso + '</td></tr>' +
            '<tr><td>' + vectorX[3] + '</td></tr>' +
            '<td>' + calculoPrecio + '</td>' +
            //simular botón con a href añado clase btn btn-danger (color rojo)
            '<td><div class="col-lg-2 text-center mb-2"><a class="btn btn-danger btn-md"' +
            //anulo el href, no hay link , pero sí hay evento onclick con 
            //parámetro incluido: dni de esa tupla
            'href="javascript:void(0)" onclick=eliminar(this,"' + calculoPrecio + '")>' +
            //texto del botón e icono
            'ELIMINAR<i class="bi bi-trash"></i> </a></div></td> ';
    }

    cestaCompra.appendChild(cajaTr);
}

function eliminar(fila, calculo) {
    //Subir de nivel hasta llegar a elemento padre tabla
    let filaTabla = fila.parentNode.parentNode;
    //Subir un nivel mas para conseguir el elemento  tr de esa tabla y eliminarlo
    filaTabla.parentNode.remove(filaTabla);
    total = total - calculo;
    precioTotal.textContent = total;
}

function login() {
    if (pwd.value == "frutas") {
        window.open();
        window.send();
    }
}