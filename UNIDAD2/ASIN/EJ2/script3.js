window.onload = inicio;

function inicio() {
  let btn = document.getElementById("listar1");
  btn.onclick = function () {
    fetch('http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php')
      // 'https://fakestoreapi.com/products'
      .then(response => response.json())
      .then(datos => {
        console.table(datos);

        cargarTabla(datos);
      });
  }
}
function cargarTabla(datos) {
  let tabla = document.getElementById("tabla1");
  let cabecera = document.createElement("thead");
  let tr = document.createElement("tr");
  cabecera.appendChild(tr);
  tabla.appendChild(cabecera);

  let vectorMetadatos = Object.keys(datos[0]);

  for (let i = 0; i < vectorMetadatos.length; i++) {
    tr.innerHTML += "<td>" + vectorMetadatos[i] + "</td>";
  }

  let principal = document.createElement("tbody");
  // let trb = document.createElement("tr");
  // principal.appendChild(trb);
  tabla.appendChild(principal);

  datos.forEach(recorrer);

  function recorrer(item, index) {
    let fila = document.createElement("tr");
    for (let j = 0; j < vectorMetadatos.length; j++) {
      let celda = document.createElement("td");
      let sp2 = document.createElement("span");

      let campo = vectorMetadatos[j];
      if (campo == "image" || campo == "imagen") {
        let imagen = document.createElement("img");
        imagen.setAttribute("src", item[campo]);
        imagen.setAttribute("width", 100);
        sp2.appendChild(imagen);
        celda.appendChild(sp2);
        fila.appendChild(celda);
        principal.appendChild(fila);
      } else {
        sp2.textContent = item[campo];
        celda.appendChild(sp2);
        fila.appendChild(celda);
        principal.appendChild(fila);
      }
    }
  }
}