window.onload = inicio;


function inicio() {
    const urlPaises = "https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
    const base = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=";

   
    let selectP = document.getElementById("pais");
    let selectD = document.getElementById("deporte");
    let btnB= document.getElementById("botonB");
    let cajaEquipos = document.getElementById("equipos");

    obtenerPaises();
    obtenerDeportes();

    btnB.onclick = cargar;

    function cargar() {
        mostrarEquipos();
    }

    async function obtenerPaises() {
        console.log("obtenerPaises");
        const response = await fetch(urlPaises);
        const objeto = await response.json();

        for (let i = 0; i < objeto.countries.length; i++) {
            let option = document.createElement("option");
            option.value = objeto.countries[i].name_en;
            option.textContent = objeto.countries[i].name_en;
            selectP.appendChild(option);
        }
    }

    async function obtenerDeportes() {
        console.log("obtenerDeportes");
        const response = await fetch("deportes.json");
        const objeto = await response.json();

        for (let i = 0; i < objeto.sports.length; i++) {
            let option = document.createElement("option");
            option.value = objeto.sports[i].strSport;
            option.textContent = objeto.sports[i].strSport;
            selectD.appendChild(option);
        }
    }

   
    async function mostrarEquipos() {
        cajaEquipos.innerHTML = "";
        console.log("mostrarEquipos");

        const response = await fetch(base + selectD.value+ "&c=" + selectP.value);
        const objeto = await response.json();
        try{
        console.log(objeto);
        for (let i = 0; i < objeto.teams.length; i++) {

            let equipo = document.createElement("div");
            equipo.style.padding = "15px";
            equipo.style.textAlign = "center";
            equipo.style.width = "200px";
            let equipoImg = document.createElement("img");
            let equipoNombre = document.createElement("h3");

            equipoImg.src = objeto.teams[i].strTeamBadge;
            equipoNombre.textContent = objeto.teams[i].strTeam;

            equipo.appendChild(equipoImg);
            equipo.appendChild(equipoNombre);
            
            cajaEquipos.appendChild(equipo);
        }
    }catch(error){
        error = alert("No hay ningún equipo de este pais en el deporte seleccionado");
   }
    }
  
}