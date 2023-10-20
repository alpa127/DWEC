window.onload = inicio;

function inicio() {
  let btnAceptar = document.getElementById("aceptar");
  btnAceptar.onclick = obtenerDatos;
}

function obtenerDatos() {
  let ciclo = document.querySelector('input[name="radio"]:checked').value;
  let modulos = document.querySelectorAll("input[name=modulos]");

  let marcados = [];

  modulos.forEach(obtenerMarcados);

  function obtenerMarcados(item, index) {
    if (item.checked) {
      marcados.push(item.value);
    }
  }

  let nombre = document.getElementById("nombre").value;
  let curso = document.getElementById("selectedCurso").value;
  let horas = document.getElementById("exampleFormControlSelect2").options;

  let horasMarcadas = [];

  for (let index = 0; index < horas[0].length; index++) {
    if (horas[0][index].selected) {
      horasMarcadas.push(horas[0][index].value);
    }

  }

  let comentario = document.getElementById("exampleFormControlTextarea1").value;

  let mensaje = "Ciclo: " + ciclo + "\nMódulos: " + modulos + "\nNombre: " + nombre + "\nCurso: " + curso + "\nHoras Asistidas: " + horasMarcadas + "\nComentario" + comentario;

  alert(mensaje);
}