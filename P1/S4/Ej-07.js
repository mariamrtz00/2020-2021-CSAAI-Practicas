console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test') //si pongo mal el identificador 'test', error test null

//-- Configurar el manejador para el evento de
//-- pulsación de botón
test.onclick = function () { // cuando ocurra onclick hace la funcion, es una forma abreviada de hacer lo mismo
  console.log("Click sobre el párrafo...")
}