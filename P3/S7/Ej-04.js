//-- Acceder al cuerpo del documento HTML
//-- Es el primer elemento, porque sólo hay un cuerpo
body = document.getElementsByTagName('body')[0] // esto me devuelve un array, solo quiero el primer elemento

//-- Funcion de retrollamada de tecla pulsada
// cuando aprietas una tecla
// e = elemento html como parámetro de entrada asociado a la tecla
window.onkeydown = (e) => {
  
  //-- Comprobar si la tecla es un espacio
  if (e.key == ' ') { // key contiene el valor de la tecla, si es un espacio

    //-- Cambiar la activación de la clase color
    body.classList.toggle("color"); // actuo sobre ello
    // con toggle añado el elemento body a la clase color !!! y luego en el css toco el color
//y si ya estaba en la clase color, quiero que deje de pertenecer a la clase colro
  
}
}