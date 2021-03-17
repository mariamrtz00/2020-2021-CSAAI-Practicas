console.log("Ejecutnado JS...");

//-- Obtener el párrafo
const test = document.getElementById('test');

//-- Funcion de retrollamada de la pulsación del párrafo
test.onclick = () => { // cada vez que haya un click, se ejecuta este código
    console.log("Click!"); // lo primero: en la consola saldrá click

    //-- Cambiar el color del fondo...
    //-- Si no tenía color asignado ponemos amarillo
    if (test.style.backgroundColor == "") { // comprueba el fondo de pantalla, si aun no tiene color, si lleva el color por defecto
        test.style.backgroundColor = "yellow"; // cambiaselo y dale el color amarillo
        
    }
    //-- Si ya tiene color se lo quitamos
    else {
        test.style.backgroundColor = ""; // si ya está amarillo, le asigna la cadena nulla, el color por defecto
    }

}
