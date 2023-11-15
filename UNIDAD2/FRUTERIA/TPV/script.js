window.onload = inicio;
let cajaFrutas = document.querySelector("#cajaFrutas");
cajaFrutas.innerHTML = "";
let bloqueHtml = document.createElement("div");
let bloqueCesta = document.createElement("div");
let tbody = document.querySelector("tbody");
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

    let vectorX = vector.split(",");
    let peso = prompt("Teclea los kgs de " + vectorX[1]);

    if (peso && !isNaN(peso)) {
        bloqueCesta.innerHTML = '<tr><td>' + vectorX[1] + '</td></tr>' +
            '<tr><td>' + peso + '</td></tr>' +
            '<tr><td>' + vectorX[3] + '</td></tr>' +
            '<tr><td>' + (peso * parseFloat(vectorX[3])) + '</td></tr>';
    }


    tbody.appendChild(bloqueCesta);
}