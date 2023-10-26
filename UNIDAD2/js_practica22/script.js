window.addEventListener("load", inicio);

let bool = true;

function inicio() {

    let exped = document.getElementById("expediente").value;
    let smExped = document.getElementById("smExpediente");

    let nomb = document.getElementById("nombre").value;
    let smNomb = document.getElementById("smNombre");

    let apell = document.getElementById("apellidos").value;
    let smApell = document.getElementById("smApellidos");

    let dwec = document.getElementById("dwec").value;
    let smDwec = document.getElementById("smDwec");

    let dwes = document.getElementById("dwes").value;
    let smDwes = document.getElementById("smDwes");

    let ds = document.getElementById("ds").value;
    let smDs = document.getElementById("smDs");

    let eie = document.getElementById("eie").value;
    let smEie = document.getElementById("smEie");

    let diw = document.getElementById("diw").value;
    let smDiw = document.getElementById("smDiw");

    let btnAccion = document.getElementById("btnAccion");
    let accion = document.getElementById("accion");

    accion.onsubmit = function () {

        if (exped == "" || nomb == "" || apell == "" || dwec == "" || dwes == ""
            || ds == "" || eie == "" || diw == "") {
            bool = false;
            smExped.innerHTML = "*Campo Obligatorio";
            smNomb.innerHTML = "*Campo Obligatorio";
            smApell.innerHTML = "*Campo Obligatorio";
            smDwec.innerHTML = "*Campo Obligatorio";
            smDwes.innerHTML = "*Campo Obligatorio";
            smDs.innerHTML = "*Campo Obligatorio";
            smEie.innerHTML = "*Campo Obligatorio";
            smDiw.innerHTML = "*Campo Obligatorio";
        } else {
            let cadena = String(exped);
            if (cadena.length != 6) {
                bool = false;
                smExped.innerHTML = "*Cadena no puede superar los 6 caracteres";
            } else {
                for (let i; i < cadena.length - 1; i++) {
                    let caracter = cadena.charAt(i);
                    if (isNaN(caracter)) {
                        smExped.innerHTML = "*Los 5 primeros tienen que ser un numero";
                        bool = false;
                    }
                }
                let caracter = cadena.charAt(cadena.length - 1);
                if (!/[A-Z]/.test(caracter) && bool != false) {
                    smExped.innerHTML = "*Ultimo caracter debe ser mayuscula";
                    bool = false;
                }
                if (dwec < 1 || dwec > 10 && bool != false) {
                    bool = false;
                    smDwec.innerHTML = "No cumple con el rango";
                }
                if (dwes < 1 || dwes > 10 && bool != false) {
                    bool = false;
                    smDwec.innerHTML = "No cumple con el rango";
                }
                if (ds < 1 || ds > 10 && bool != false) {
                    bool = false;
                    smDs.innerHTML = "No cumple con el rango";
                }
                if (eie < 1 || eie > 10 && bool != false) {
                    bool = false;
                    smEie.innerHTML = "No cumple con el rango";
                }
                if (diw < 1 || diw > 10 && bool != false) {
                    bool = false;
                    smDiw.innerHTML = "No cumple con el rango";
                }
            }
        }
        return bool;
    }
}