window.onload = inicio;


const nombreProvinciasGanadas = ["", "", "", ""];
let representantes = [];
let medias = [];
let nombreMediaAlta = "";
let contAprobados = 0;
let contMismaNota=0;
let cont4=0;

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
                let medias = (
                    parseInt(datos.nota1)+
                    parseInt(datos.nota2)+
                    parseInt(datos.nota3))/ 3;
                    let mayor = -1;
                    if (medias > mayor) {
                        mayor = medias;
                        nombreMediaAlta = datos.alumno;
                    }
                    if (parseInt(datos.nota1)>=5 && parseInt(datos.nota2)>=5 && parseInt(datos.nota3)>=5 ){
                        contAprobados++;
                    }

                    if (parseInt(datos.nota1) == parseInt(datos.nota2) && parseInt(datos.nota2) == parseInt(datos.nota3)){
                        contMismaNota++;
                    }

                    if(medias>5 && parseInt(datos.nota1) < 5 || parseInt(datos.nota2) < 5 || parseInt(datos.nota3) < 5){
                        cont4++;
                    }
            }
           
           
                let fila1 = document.createElement("tr");
                let fila2 = document.createElement("tr");
                let fila3 = document.createElement("tr");
                let fila4 = document.createElement("tr");
                fila1.innerHTML +=
                    "<td>Alumno con nota mas alta: " + nombreMediaAlta + "</td>";

                fila2.innerHTML +=
                    "<td>Numero de alumnos que han aprobado los tres examenes: " + contAprobados + "</td>";

                fila3.innerHTML +=
                    "<td>Numero de alumnos que tienen las misma nota en los tres examenes: " +
                    contMismaNota +
                    "</td>";

                fila4.innerHTML +=
                    "<td>Alumnos que tienen la media aprobada pero algun examen suspenso: " + cont4 + "</td>";

                caja1.appendChild(fila1);
                caja2.appendChild(fila2);
                caja3.appendChild(fila3);
                caja4.appendChild(fila4);
            }

            //cajaMostrarContenido.appendChild(bloqueHtml);
        }
    
    xhr.open(
        "POST",
        "http://moralo.atwebpages.com/menuAjax/dam1/getDam1.php"
    );
    xhr.send();
}