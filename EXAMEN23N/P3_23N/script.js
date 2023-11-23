window.onload = inicio;
let bloqueHtml = document.createElement("tr");
let contenedorCesta = document.querySelector("#pdf");

var total = 0;

let vectorFrutas = [];





function inicio() {

    let btnPDF = document.getElementById("imprimirPDF");
    btnPDF.onclick = mostrarPDF;

}
function mostrarPDF() {

    var estilo = "<style>" +
        "table {width: 100%;font: 17px Calibri;}" +
        "table, th, td {border: solid 1px #DDD; border-collapse: collapse;" +
        "padding: 2px 3px;text-align: center;}" +
        "</style>";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {


        if (this.readyState == 4 && this.status == 200) {

            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(frutas, index) {
                let vector = [frutas.name, frutas.price, frutas.stockActual, frutas.stockMinimo];
                bloqueHtml.className = "row";
                bloqueHtml.innerHTML += 'tr>' +
                    '<td>' + vector[0] + '</td>' +
                    '<td>' + vector[1] + '</td>' +
                    '</>' +
                    '<tr>';


            }

        }
    }
    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php", true);
    xhr.send();

    let ticket1 = document.getElementById("cestaCompra");
    ticket1.innerHTML = "";
    ticket1.appendChild(bloqueHtml);
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
    win.document.write('</body></html>');

    win.document.close(); //cerrar ventana
    win.print(); // escribir contenidos

}



