//-- Contador de clicks de boton

console.log("Ejecutando JS..."); // traza pa ver si se está ejecutando, ponerla pa ver si tengo errores

//-- Acceder a los elementos del DOM
// variables q voy a utlizar, les ha dado el mismo nombre q el identificador, pero da igual
const display = document.getElementById("display");
const boton = document.getElementById("boton");

//-- Contador de clicks
// variable contador, let:lectura y escritura
// const: solo lectura, no escribo cosas sobre el elemento
let cont = 0;

//-- Configurar retrollamada del boton
boton.onclick = () => { // cada vez que haga click 
  console.log("Click!"); //se imprime el mensaje

  //-- Incrementar contador
  cont += 1; // se incrementa la variable contador

  //-- Actualizar el display
  display.innerHTML = cont; // actualizo el display, le meto el valor cont para que se visualice (un print)
}