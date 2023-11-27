window.onload = inicio;


const nombreProvinciasGanadas = ["", "", "", ""];
let representantes = [];
let medias = [];
let nombreMediaAlta = "";

let caja1 = document.querySelector("#caja1");
let caja2 = document.querySelector("#caja2");
let caja3 = document.querySelector("#caja3");

function inicio() {
    console.log("INICIO");
    resultadoElecciones();
}

function resultadoElecciones() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;
    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);
            function recorrer(datos, index) {
                let notas = [
                    parseInt(datos.nota1),
                    parseInt(datos.nota2),
                    parseInt(datos.nota3),
                ];
                let media = (notas[0] + notas[1] + notas[2]) / notas.length;
                medias.push(media);
                let mayor = -1;
                let pos = -1;
                for (let i = 0; i < objeto, length; i++) {
                    if (medias[i] > mayor) {
                        mayor = medias[i];
                        nombreMediaAlta = datos.alumno;
                    }

                }




            }
            for (let i = 0; i < objeto.length; i++) {
                let fila1 = document.createElement("tr");
                let fila2 = document.createElement("tr");
                let fila3 = document.createElement("tr");
                fila1.innerHTML +=
                    "<td>Alumno con nota mas alta: " + nombreMediaAlta + "</td>";

                // fila2.innerHTML +=
                //     "<td>" + partidos[i] + "Representantes: " + PROVINCIAS[i] + "</td>";

                // fila3.innerHTML +=
                //     "<td>" +
                //     partidos[i] +
                //     "Provincias ganadas: " +
                //     nombreProvinciasGanadas[i] +
                //     "</td>";

                caja1.appendChild(fila1);
                // caja2.appendChild(fila2);
                // caja3.appendChild(fila3);
            }

            //cajaMostrarContenido.appendChild(bloqueHtml);
        }
    }
    xhr.open(
        "POST",
        "http://moralo.atwebpages.com/menuAjax/dam1/getDam1.php"
    );
    xhr.send();
}