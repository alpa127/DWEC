window.addEventListener("load", inicio);
function inicio() {
    console.log("entro en inicio");
    let validar = document.getElementById("validar");
    validar.onsubmit = function () {
        console.log("entro en  la validación número: contenido, entero,no este repetido");
        alert("validando");
        let numero1 = document.getElementById("idNumero1");
        let mensaje1 = document.getElementById("smNumero1");

        let numero2 = document.getElementById("idNumero1");
        let mensaje2 = document.getElementById("smNumero1");

        let numero3 = document.getElementById("idNumero1");
        let mensaje3 = document.getElementById("smNumero1");

        let numero4 = document.getElementById("idNumero1");
        let mensaje4 = document.getElementById("smNumero1");


        let arrayNumeros = [numero1, numero2, numero3, numero4];
        let arrayComparacion = [];
        let bool_repetido = true;

        let infoRepetido = document.getElementById("smRepetido");
        for (let i = 0; i < arrayNumeros.length; i++) {
            for (let j = 0; j < arrayNumeros.length; j++) {
                if (arrayNumeros[i] == arrayNumeros[j] && i != j) {
                    bool_repetido = true;
                }
            }
        }
        if (bool_repetido) {
            infoRepetido.innerHTML = "** error, número repetido";
        }
        validar(numero1, mensaje1);
        validar(numero2, mensaje2);
        validar(numero3, mensaje3);
        validar(numero4, mensaje4);
        function validar(num, men) {

        }

    }
}