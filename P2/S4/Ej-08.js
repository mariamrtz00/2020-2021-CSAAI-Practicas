console.log("Ejecutando js...")
// otra notación más compacta todavía

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
test.onclick = () => { // para definir una funcion, es una funcion q no toma ningún parametro de entrada, lo mismo de antes pero más compacta, es lo que se utiliza
  console.log("Click sobre el párrafo...")
}