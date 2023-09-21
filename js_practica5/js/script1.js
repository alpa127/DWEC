window.onload=inicio;
function inicio(){
    console.log("entro en inicio");
    const operaciones=["+","-","*","/"];
    let btnComenzar=document.getElementById("comenzar")
    btnComenzar.onclick=comenzar;
    let btnFin=document.getElementById("fin")
    btnFin.onclick=fin;
    let spPunt=document.getElementById("punt");
    let spFallos=document.getElementById("fallos");
    let num1=document.getElementById("num1");
    let op=document.getElementById("op");
    let num2=document.getElementById("num2");
    var puntos=0;
    var fallos=0;
    var tiempo=0;
    

    function comenzar(){
        console.log("entro en comenzar");
        btnComenzar.disabled=true;
        juego();
    }

    function juego(){
        console.log("entro en juego");
        num1.textContent=Math.round(Math.random()*100);
        op.textContent=operaciones[0];
        num2.textContent=Math.round(Math.random()*100);
        tiempo=setInterval(juego,15000);
        let btnComprobar=document.getElementById("comprobar")
        btnComprobar.onclick=comprobar;
    }

    function comprobar(){
        let suma=num1+num2;
        let resta=num1-num2;
        let multiplicacion=num1*num2;
        let division=num1/num2;
        let resul=document.getElementById("resultado");

        if(operaciones[0] && suma==resul){
            puntos++;
            spPunt.textContent= "Puntuación: " + puntos;
        //}else if(operaciones[1] && resta==relsu){
        //    puntos++;
        //    spPunt.textContent= "Puntuación: " + puntos;
        //}else if(operaciones[2] && multiplicacion==relsu){
         //   puntos++;
         //   spPunt.textContent= "Puntuación: " + puntos;
        //}else if(operaciones[3] && division==relsu){
          //  puntos++;
            //spPunt.textContent= "Puntuación: " + puntos;
        }else{
            fallos++;
            spFallos.textContent= "Fallos: " + fallos;
        }
    }
      

    function fin(){
        puntos=0;
        fallos=0;
        num1.textContent= "0";
        op.textContent= "+";
        num2.textContent= "0";
        spPunt.textContent= "Puntuación: " + puntos;
        spFallos.textContent= "Fallos: " + fallos;
        clearInterval(tiempo);

    }
}