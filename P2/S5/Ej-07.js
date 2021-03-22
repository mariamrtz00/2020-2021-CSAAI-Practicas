//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset")
}

console.log("Ejecuitando JS...");

//-- Definir un objeto cronómetro
// así creo un objeto
const crono = new Crono(gui.display); // crono es la clase q tenemos creada, le paso el display donde quiero q se visualice la info


//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => { // si alguien aprieta el boton de start
    console.log("Start!!"); 
    crono.start(); // llamo al metodo start y empieza
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
}