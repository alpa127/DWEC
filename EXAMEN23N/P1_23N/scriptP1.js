window.onload = inicio;
let tablaRepresentantes = document.getElementById('representantes');
let tablaProvincia = document.getElementById('provincias');
let tablaVotos = document.getElementById('votos');

function inicio() {

    cargarRepresentantes();
    cargarProvincias();
    cargarVotos();
}

function cargarRepresentantes() {
    let cajaTr = document.createElement("tr");
    let rpA = 0;
    let rpB = 0;
    let rpC = 0;
    let rpD = 0;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(repres, index) {
                if (repres.votosPA > repres.votosPB && repres.votosPA > repres.votosPC &&
                    repres.votosPA > repres.votosPD) {
                    rpA += parseInt(repres.Representantes);
                } else if (repres.votosPB > repres.votosPA && repres.votosPB > repres.votosPC &&
                    repres.votosPB > repres.votosPD) {
                    rpB += parseInt(repres.Representantes);
                }
                else if (repres.votosPC > repres.votosPB && repres.votosPC > repres.votosPA &&
                    repres.votosPC > repres.votosPD) {
                    rpC += parseInt(repres.Representantes);
                }
                else if (repres.votosPD > repres.votosPB && repres.votosPD > repres.votosPC &&
                    repres.votosPD > repres.votosPA) {
                    rpD += parseInt(repres.Representantes);
                }
                cajaTr.innerHTML = '<td>' + rpA + '</td></tr>' +
                    '<tr><td>' + rpB + '</td></tr>' +
                    '<tr><td>' + rpC + '</td></tr>' +
                    '<td>' + rpD + '</td>';
                tablaRepresentantes.appendChild(cajaTr);
            }


        }
    }
    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php", true);
    xhr.send();
}

function cargarProvincias() {
    let cajaTr = document.createElement("tr");
    let rpA;
    let rpB;
    let rpC;
    let rpD;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(repres, index) {
                if (repres.votosPA > repres.votosPB && repres.votosPA > repres.votosPC &&
                    repres.votosPA > repres.votosPD) {
                    rpA = repres.nombreProvincia;
                } else if (repres.votosPB > repres.votosPA && repres.votosPB > repres.votosPC &&
                    repres.votosPB > repres.votosPD) {
                    rpB = repres.nombreProvincia;
                }
                else if (repres.votosPC > repres.votosPB && repres.votosPC > repres.votosPA &&
                    repres.votosPC > repres.votosPD) {
                    rpC = repres.nombreProvincia;
                }
                else if (repres.votosPD > repres.votosPB && repres.votosPD > repres.votosPC &&
                    repres.votosPD > repres.votosPA) {
                    rpD = repres.nombreProvincia;
                }
                cajaTr.innerHTML = '<td>' + rpA + '</td></tr>' +
                    '<tr><td>' + rpB + '</td></tr>' +
                    '<tr><td>' + rpC + '</td></tr>' +
                    '<td>' + rpD + '</td>';


                tablaProvincia.appendChild(cajaTr);

            }


        }
    }
    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php", true);
    xhr.send();
}

function cargarVotos() {
    let cajaTr = document.createElement("tr");
    let rpA = 0;
    let rpB = 0;
    let rpC = 0;
    let rpD = 0;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(repres, index) {
                if (repres.votosPA > repres.votosPB && repres.votosPA > repres.votosPC &&
                    repres.votosPA > repres.votosPD) {
                    rpA += repres.votosPA;
                } else if (repres.votosPB > repres.votosPA && repres.votosPB > repres.votosPC &&
                    repres.votosPB > repres.votosPD) {
                    rpB = repres.nombreProvincia;
                }
                else if (repres.votosPC > repres.votosPB && repres.votosPC > repres.votosPA &&
                    repres.votosPC > repres.votosPD) {
                    rpC = repres.nombreProvincia;
                }
                else if (repres.votosPD > repres.votosPB && repres.votosPD > repres.votosPC &&
                    repres.votosPD > repres.votosPA) {
                    rpD = repres.nombreProvincia;
                }
                cajaTr.innerHTML = '<td>' + repres.votosPA + '</td></tr>' +
                    '<tr><td>' + rpB + '</td></tr>' +
                    '<tr><td>' + rpC + '</td></tr>' +
                    '<td>' + rpD + '</td>';
                tablaVotos.appendChild(cajaTr);
            }





        }
    }
    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php", true);
    xhr.send();
}