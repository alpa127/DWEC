window.onload = inicio;
let cajaFrutas = document.querySelector("#cajaFrutas");
cajaFrutas.innerHTML = "";
let bloqueHtml = document.createElement("div");
let contenedorCesta = document.querySelector("#cestaCompra");
let precioTotal = document.getElementById("precio");
var total = 0;

let vectorFrutas = [];

let pwd = document.getElementById("idPwd");
let btnGestionAl = document.getElementById("confirmar");
btnGestionAl.onclick = login;

let btnPDF = document.getElementById("imprimirPDF");
btnPDF.onclick = mostrarPDF;

let btnEnviarM = document.getElementById("enviarMail");
btnEnviarM.onclick = enviarMail;

function inicio() {


    cargarFrutas();

}
function mostrarPDF() {
    let ticket1 = document.getElementById("cestaCompra").innerHTML;
    var estilo = "<style>" +
        "table {width: 100%;font: 17px Calibri;}" +
        "table, th, td {border: solid 1px #DDD; border-collapse: collapse;" +
        "padding: 2px 3px;text-align: center;}" +
        "</style>";

    console.log(ticket1);


    // crear una ventana window
    var win = window.open('ticket.pdf', 'Fruteria', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>Ticket</title>'); //cabecera del pdf
    win.document.write(estilo); // estilo cabecera
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write("<table>");
    win.document.write(ticket1);
    win.document.write("</table>");
    win.document.write("Total: " + precio.textContent); // contenidos dentro del body
    win.document.write('</body></html>');

    win.document.close(); //cerrar ventana
    win.print(); // escribir contenidos

}

function actualizarAlmacen() {
    let infoCliente = prompt("DNI del cliente:");
    for (let i = 0; i < vectorFrutas.length; i++) {
        let nombreFruta = vectorFrutas[i];

        $.ajax({
            url: "http://moralo.atwebpages.com/menuAjax/productos3/insertarFacturacion.php",
            type: "POST",
            data: {
                precioTotal: precioTotal,
                name: nombreFruta,
                info: infoCliente
            },
            dataType: "JSON"

        });
    }

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
    let id = vectorX[0];


    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/productos3/actualizarAlmacen.php",
        type: "POST",
        data: {
            id: id,
            kgs: peso
        },
        dataType: "JSON"

    });



    if (peso && !isNaN(peso)) {
        cajaTr.innerHTML = '<td>' + vectorX[1] + '</td></tr>' +
            '<tr><td>' + peso + '</td></tr>' +
            '<tr><td>' + vectorX[3] + '</td></tr>' +
            '<td>' + calculoPrecio + '</td>' +
            //simular botón con a href añado clase btn btn-danger (color rojo)
            '<td><div class="col-lg-2 text-center mb-2"><a class="btn btn-danger btn-md"' +
            //anulo el href, no hay link , pero sí hay evento onclick con 
            //parámetro incluido: dni de esa tupla
            'href="javascript:void(0)" onclick=eliminar(this,"' + id + calculoPrecio + peso + '")>' +
            //texto del botón e icono
            'ELIMINAR<i class="bi bi-trash"></i> </a></div></td> ';


    }

    contenedorCesta.appendChild(cajaTr);
}

function eliminar(fila, id, calculo, peso) {
    //Subir de nivel hasta llegar a elemento padre tabla
    let filaTabla = fila.parentNode.parentNode;
    //Subir un nivel mas para conseguir el elemento  tr de esa tabla y eliminarlo
    filaTabla.parentNode.remove(filaTabla);
    total = total - parseFloat(calculo);
    precioTotal.textContent = total;

    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/productos3/retornarAlmacen.php",
        type: "POST",
        data: {
            id: id,
            kgs: peso
        },
        dataType: "JSON"

    });
}

function login() {
    if (pwd.value == "frutas") {
        window.open("../CRUD/index.html");

    }
}

// function enviarMail() {
//     alert("enviar mail");
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "apachonc05@educarex.es",
//         Password: "dnctijmtjztflakl",
//         To: 'profeaugustobriga@gmail.com',
//         From: 'apachonc05@educarex.es',
//         Subject: "Enviar mail usuario JS",
//         Body: "TODO OK!!",
//         // Attachments: [
//         // {
//         // name : "factura.pdf",
//         // path : pdfBase64
//         // }]
//     }).then(function () {
//         alert("MAIL ENVIADO OK")
//     });

// }
