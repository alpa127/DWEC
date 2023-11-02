window.addEventListener("load", inicio);
function inicio() {
   
   


f
    //crear un objeto XMLhttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    let menu = document.querySelectorAll("#menu-lunch .row .col-lg-4");
    function cargar() {
        //CONTROL DE ESTADO DE LA PETICIÓN DE DATOS Y DEL ESTADO DEL SERVIDOR
        if (this.readyState == 4 && this.status == 200) {
           
            var objeto = JSON.parse(this.responseText);

            menu.forEach(accion);

            function accion(item,indice){
                item.querySelector("img").textContent=objeto[indice].imagen;
                item.querySelector("h4").textContent=objeto[indice].nombre;
                item.querySelector("p").textContent=objeto[indice].ingredientes;
                item.querySelector("p").textContent=objeto[indice].precio;
            }
            
            }
        }
    
    //PRIMERO HAY QUE HACER LA PETICIÓN
    xhr.open("GET", "http://moralo.atwebpages.com/restaurante/getPlatos.php", true);
    xhr.send();
}