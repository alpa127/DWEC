window.addEventListener("load", inicio);
function inicio() {


    function metodo() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var objeto = JSON.parse(this.responseText);

            }
        };

        xhr.open("GET", "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php", true);
        xhr.send();
    }
}