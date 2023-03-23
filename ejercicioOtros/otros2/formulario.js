var formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {
  e.preventDefault();
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  crearElemento("Nombre", nombre, elementoLista)
  crearElemento("Edad", edad, elementoLista)
  crearElemento("Nacionalidad", nacionalidad, elementoLista)

  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    botonBorrar.parentNode.remove()
  }
}

function crearElemento(descripcion, valor, elementoPadre) {
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor 
  elementoPadre.appendChild(spanNombre)
  elementoPadre.appendChild(inputNombre)
  elementoPadre.appendChild(espacio)
}
