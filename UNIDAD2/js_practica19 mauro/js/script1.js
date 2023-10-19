window.addEventListener("load", inicio);

function inicio() {
    console.log("entro en inicio");

    let accion = document.getElementById("validar");

    let bool = true;

    accion.onsubmit = function () {


        bool = true;

        let n1 = document.getElementById("idNumero1").value;
        let smNum1 = document.getElementById("smNumero1");

        let texto1 = document.getElementById("idTexto1").value;
        let smText1 = document.getElementById("smTexto1");

        let n2 = document.getElementById("idNumero2").value;
        let smNum2 = document.getElementById("smNumero2");

        let texto2 = document.getElementById("idTexto2").value;
        let smText2 = document.getElementById("smTexto2");





        validacion1(n1, smNum1);
        validacion2(texto1, smText1);
        validacion3(n2, smNum2);
        validacion4(texto2, smText2);


        return bool;


    }
}
function validacion1(num, sm) {

    if (num == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (isNaN(num)) {
        sm.innerHTML = "* Introduce un número.";
        bool = false;
    } else if (!Number.isInteger(Number(num))) {
        sm.innerHTML = "* Introduce un número entero.";
        bool = false;
    } else if (num < 1 || num > 100) {
        sm.innerHTML = "* Número fuera del rango (0-100).";
        bool = false;
    } else {
        sm.innerHTML = "";
    }


}

function validacion2(texto, sm) {

    if (texto == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    }
    let longitudCadena = String(texto).length;
    console.log(longitudCadena);
    if (longitudCadena <= 3 || longitudCadena >= 15) {
        bool = false;
        sm.innerHTML = "Texto no valido. Solo entre 3 y 15 caracteres";
    }

}

function validacion3(texto, sm) {

    if (num == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (num < -10 || num > 10) {
        sm.innerHTML = "El numeor se sale del rango.";
        bool = false;
    }

}

function validacion4(texto, sm) {

    if (num == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    }
    let cadena = String(texto);
    cadena.toLowerCase;
    let existeA = false;
    let existeE = false;
    let existeO = false;
    let existeB = false;
    let faltaA = "";
    let faltaE = "";
    let faltaO = "";
    caracter = cadena.charAt();
    let cont = 0;
    for (let i = 0; i < cadena.length; i++) {
        caracter = cadena.charAt(i);

        if (caracter == 'a') {
            existeA = true;
        }
        if (caracter == 'e') {
            existeE = true;
        }
        if (caracter == 'o') {
            existeO = true;
        }
        if (caracter == 'b') {
            cont++;
            if (cont == 3) {
                existeB = true;
                bool = false;
                faltaB = "* Hay" + cont + " caracteres B de 3";
            }
        }

        if (existeA == false) {
            bool = false;
            faltaA = "* No existe el caracter a"
        }
        if (existeE == false) {
            bool = false;
            faltaE = "* No existe el caracter e"
        }
        if (existeA == false) {
            bool = false;
            faltaO = "* No existe el caracter o"
        }
        sm.innerHTML = faltaA + faltaE + faltaO + faltaB;
    }
}
