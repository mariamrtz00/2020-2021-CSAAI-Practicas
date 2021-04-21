console.log("Ejecutando JS...");

const display = document.getElementById("display");


 // 2 eventos

 //cuando apreito tecla
//-- Tecla pulsada: Mostrar su información
window.onkeydown = (e)=> { // cuando me aprietan una tecla
  display.innerHTML = `Tecla: ${e.key}. Código: ${e.keyCode}` // sale esto en el display
} // e.key => nombre de la tecla(a,b,4...), y lo otro el código de la tecla(es un numero)

//-- Tecla liberada: Borrar el párrafo
window.onkeyup = (e) => { // cuando suelte la tecla
  display.innerHTML = "" // se borra el párrafo del display
}