//-- Leer el elemento párrafo test2 y lo guardamos en la variable
const test2 = document.getElementById('test2')

//-- Obtener el elemento párrafo 1 para modificarlo
const test1 = document.getElementById('test1')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
//ccuando alguien haga click en test 2 
// se imprime el mansaje en la consola
test2.onclick = () => {
  console.log("Click sobre el párrafo 2...")

  //-- Cambiar su texto, el que había en el primer párrafo cambia por 'TEXTO CAMBIADO'
  test1.innerHTML = "¡TEXTO CAMBIADO!"
}