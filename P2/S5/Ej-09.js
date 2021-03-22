console.log("Ejecutando JS...");

const botones = document.getElementsByClassName("digito") //me lee la coleccion de los botones

//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digito(value) // crea una fucnion qeue recibe un parametro, que en principio es el valor del dígito
{
  console.log("Valor: " + value); // imprimo en la consola
}

for (let boton of botones) { // recorre la lista de todos los botones 

  //-- Establecer la funcion de llamada del boton i
  //-- El parámetro ev.target contiene el boton
  //-- que ha recibido el click
  boton.onclick = (ev) => { //para cada boton, 
    // ev es un objeto con informacón del evento
    digito(ev.target.value)  // lama a la funcion
    // target dice el elemento html sobre el que has hecho el click, me devolverá el botón sobre el que he apretado
  }
}