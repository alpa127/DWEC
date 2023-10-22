window.addEventListener("load",inicio);

function inicio(){
    console.log("entro en inicio");

    let accion = document.getElementById("validar");

    let bool=true;

    accion.onsubmit = function () {
        console.log("entro en las validaciones");

        bool = true;

        let em = document.getElementById("email1").value;
        let smEm = document.getElementById("smEmail");

        let passw = document.getElementById("passwdNw").value;
        let smPass = document.getElementById("smPasswd1");

        let passw2 = document.getElementById("passwdRp").value;
        let smPass2 = document.getElementById("smPasswd2");

        validarEmail(em,smEm);
        validarPasswd(passw,smPass);
        comprobarPasswd(passw2,smPass2);

        return bool;
    }
}

function validarEmail(eml,smEml){
    console.log("entro en validar Email");
    let cadena = String(eml);
    let longitudCadena = cadena.length;

    if (eml == "") {
        smEml.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (longitudCadena <= 20 || longitudCadena >= 30) {
        bool = false;
        smEml.innerHTML = "texto no valido. Solo entre 20 y 30 caracteres";
    } else if (!(cadena.match(/@/g) || []).length != 1) {
        bool = false;
        smEml.innerHTML = "* Tiene que contener una arroba";
    } else {
        smEml.innerHTML= "Email Valido";
}
}

function validarPasswd(pas,smPas){
    console.log("entro en validar Contraseña");
    let cadena = String(pas);

    if (pas == "") {
        smPas.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else {
            let i = 0;
            let esMayus = false;
            while (i < pas.length) {
                let caracter = pas.charAt(i);
                if (caracter == caracter.toUpperCase()) {
                    esMayus = true;
                }
                i++;
            }
            if (esMayus) {
                smPas.innerHTML = "";
             if(!(cadena.match(/$/g) || []).length != 1){
                bool = false;
                smPas.innerHTML = "* Tiene que contener un signo dolar";
            }
            } else {
                smPas.innerHTML = "* La cadena debe tener al menos una letra mayúscula";
                bool = false; 
            }

    }

}

function comprobarPasswd(pas2,smPas2){
    console.log("entro en comprobar Contraseña");
    let cadena = String(pas2);

    if(pas2 == ""){
        smPas2.innerHTML = "* Campo obligatorio.";
        bool=false;
    }else{
        if(pas2!=pas){
            bool=false;
            smPas2.innerHTML = "* La contraseña introducida no es igual a la introducida anteriormente";
        }else{
            smPas2.innerHTML= "";
        }
    }

}