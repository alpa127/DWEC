window.addEventListener("load", inicio);

let bool = true;

function inicio() {

    let exped = document.getElementById("expediente").value;
    let smExped = document.getElementById("smExpediente");

    let nomb = document.getElementById("nombre").value;
    let smNomb = document.getElementById("smNombre");

    let apell = document.getElementById("apellidos").value;
    let smApell = document.getElementById("smApellidos");

    let dwc = document.getElementById("dwec").value;
    let smDwc = document.getElementById("smDwec");

    let dws = document.getElementById("dwes").value;
    let smDws = document.getElementById("smDwes");

    let d = document.getElementById("ds").value;
    let smD = document.getElementById("smDs");

    let ei = document.getElementById("eie").value;
    let smEi = document.getElementById("smEie");

    let dw = document.getElementById("diw").value;
    let smDw = document.getElementById("smDiw");

    let btnAccion = document.getElementById("btnAccion");
    let accion = document.getElementById("accion");

    accion.onsubmit = function () {

        if (exped == null || nomb == null || apell == null || dwc == null || dws == null
            || d == null || ei == null || dw == null) {
            bool = false;
            smExped.innerHTML = "*Campo Obligatorio";
            smNomb.innerHTML = "*Campo Obligatorio";
            smApell.innerHTML = "*Campo Obligatorio";
            smDwc.innerHTML = "*Campo Obligatorio";
            smDws.innerHTML = "*Campo Obligatorio";
            smD.innerHTML = "*Campo Obligatorio";
            smEi.innerHTML = "*Campo Obligatorio";
            smDw.innerHTML = "*Campo Obligatorio";
        } else {
            let cadena = String(exped);
            let longitudCadena = cadena.length;
            if (longitudCadena != 6) {
                bool = false;
                smExped.innerHTML = "*Cadena no puede superar los 6 caracteres";
            } else {
                for (let i; i < longitudCadena - 1; i++) {
                    let caracter = cadena.charAt(i);
                    if (isNaN(caracter)) {
                        smExped.innerHTML = "*Los 5 primeros tienen que ser un numero";
                        bool = false;
                    }
                }
                let caracter = cadena.charAt(longitudCadena - 1);
                if (!/[A-Z]/.test(caracter)) {
                    smExped.innerHTML = "*Ultimo caracter debe ser mayuscula";
                    bool = false;
                }
                if (!dwc <= 1 || dwc > 10) {
                    bool = false;
                    smDwc.innerHTML = "";
                }
            }
        }
        return bool;
    }
}