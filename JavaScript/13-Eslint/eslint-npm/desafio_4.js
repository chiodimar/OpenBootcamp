// En esta linea quiero tener comillas simples (quiero que me desactives la regla de las comillas dobles)
/* eslint-disable*/
/* eslint-enable*/

// eslint-disable-line semi
// eslint-disable-line quotes
/* eslint-disable-next-line indent*/

let nombre   = "Mariano"
let apellido = "Chiodi"
let nombre2 = "Maria"

let estudiante = nombre + " "+ apellido
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLocaleLowerCase()
console.log(estudianteMinus)

let cantLetras = estudiante.length
console.log(cantLetras)

let primeraLetra = nombre.charAt(0)
console.log(primeraLetra)

let posicionLetra = apellido.lastIndexOf("i")
console.log(posicionLetra)

let ultimaLetra = apellido.charAt(posicionLetra)
console.log(ultimaLetra)

let estudianteSinEspacios = estudiante.trim()
console.log(estudianteSinEspacios)

let incluye = estudiante.includes(nombre)
console.log(incluye)