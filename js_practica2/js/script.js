window.addEventListener("load", inicio);
function inicio(){
    console.log("entro en js");
    document.getElementById("btn1").addEventListener("click",function1);
    document.getElementById("btn2").addEventListener("click",function2);
    document.getElementById("btn3").addEventListener("click",function3);
    document.getElementById("btn4").addEventListener("click",function4);
    document.getElementById("btn5").addEventListener("click",function5);
    document.getElementById("btn6").addEventListener("click",function6);
    document.getElementById("btn7").addEventListener("click",function7);

    //Funciones

    function function1(){
        let numero1=Math.round(Math.random()*100);
        let caja1=document.getElementById("c1");
        caja1.textContent=numero1;
        caja1.style.color="Red";
        caja1.style.backgroundColor="Green";
        caja1.style.fontSize="px";
    }
    
    function function2(){
        const colores=["Red","Green","Gray","Blue","Yellow"];
        let indice=Math.round(Math.random()*5);
        let caja2=document.getElementById("c2");
        caja2.style.backgroundColor= colores[indice];
    }

    function function3(){

       let caja3=document.getElementById("c3");
       numero1=prompt("Teclea el primer numero");
       numero2=prompt("Teclea el segundo numero");
       let suma=parseInt(numero1)+parseInt(numero2)
       caja3.style.backgroundColor="Orange";
       caja3.textContent=suma;
    }

    function function4(){
        let caja4=document.getElementById("c4");
       
        let num=Math.round(Math.random()*10);

        let fin =false;
        let contador=0;

        while(!fin){
            let numero1=parseInt(prompt("Adivina el numero X del 1 al 10"));
            contador++;
            if(numero1>num){
                alert("El numero es mas bajo");
            }
            if(numero1<num){
                alert("El numero es mas alto")
            if(numero1==num){
                fin=true;
                alert("Has acertado");
            }
        }

        caja4.textContent="El numero de intentos es " + contador;
        caja4.style.backgroundColor="Gray"; 
    }
}

    function function5(){
        let caja5=document.getElementById("c5");
        const fecha= new Date();

        caja5.innerText=fecha.getFullYear();
       
        
    }
    

    function function6(){
       let caja6=document.getElementById("c6");
       const fecha=new Date();

       const anio = fecha.getFullYear();    //retorna el año
       const mes = fecha.getMonth() + 1; //retorna los meses 
       const dia = fecha.getDate(); //retorna los dias
       const hora = fecha.getHours(); //retorna las horas
       const min = fecha.getMinutes(); //retorna los minutos
       caja6.innerText=hora+":"+min+"\n"+dia+"/"+mes+"/"+anio;
    }

    function function7(){
        const listaComponentes=document.getElementsByClassName("caja");
        for(let item of listaComponentes){
            item.textContent=Math.round(Math.random()*100);
        }
    }
}
