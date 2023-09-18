window.addEventListener("load", inicio);
var intervalo1;
var intervalo2;
function inicio(){
    console.log("entro en js");
    document.getElementById("btn1").addEventListener("click",function1);
    document.getElementById("btn2").addEventListener("click",function2);
    document.getElementById("btn3").addEventListener("click",function3);
    document.getElementById("btn4").addEventListener("click",function4);
    document.getElementById("btn5").addEventListener("click",function5);
    document.getElementById("btn6").addEventListener("click",function6);
    document.getElementById("btn7").addEventListener("click",function7);
    document.getElementById("btn8").addEventListener("click",function8);

    //Funciones

    function function1(){
        let numero1=Math.round(Math.random()*100);
        //Identificar la agrupación de div donde se visualiza
        //el resultado
        let vectorCajas=document.getElementsByClassName("caja");
        console.log(vectorCajas);
        //Hay que recorrer uno a uno cada caja
        for (let elemento of vectorCajas){
            console.log(elemento);
            elemento.textContent=Math.round(Math.random()*100);
        }
    }
    function function2(){
        let vectorCajas=document.getElementsByClassName("caja");
        console.log(vectorCajas);
            let numero=1;
        for(let elemento of vectorCajas){
            elemento.textContent=prompt("teclea un numero para cada caja" + numero);
            numero++;
        }
    }

    function function3(){
        let vectorCajas=document.getElementsByClassName("caja");
        intervalo1 = setInterval(accionRandom,100);
        function accionRandom(){
            for (let elemento of vectorCajas){
                console.log(elemento);
                elemento.textContent=Math.round(Math.random()*100);
            }
        }
    }

    function function4(){
        const colores=["Red","Green","Blue","Yellow","Purple","Orange"];
        
        let vectorCajas=document.getElementsByClassName("caja");
        intervalo2 = setInterval(accionRandom,1000);
        function accionRandom(){
        for(let elemento of vectorCajas){
            console.log(elemento);
            elemento.style.backgroundColor= colores[Math.round(Math.random()*6)];
        }
    }
    }

    function function5(){
        console.log("Detener todos los temporizadores");
        clearInterval(intervalo1);
        clearInterval(intervalo2);
    }

    function function6(){
        let btn6=document.getElementById("btn6");
        btn6.disabled=true;
        let caja1=document.getElementById("c1");
        let numero = 10;
        let countdown=setInterval(cuentaAtras,1000);
        function cuentaAtras(){
           
            caja1.textContent=numero;
            
            if(numero==0){
                
                clearInterval(countdown);
                btn6.disabled=false;
            }
            numero--;
           
        }
    }
   
}