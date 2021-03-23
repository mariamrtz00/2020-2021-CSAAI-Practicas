console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Obtener una colección con todos los elementos
//-- de la clase digito
digitos = document.getElementsByClassName("digito") // devuelve una coleccion de todos los elementos html que pertenecen a la clase digito, es como un array que vamos a recorrer

//-- Establecer la misma función de retrollamada
//-- para todos los botones de tipo dígito
for (let boton of digitos) { // genera la variable boton, en este caso que solo tenemos 2, este bucle solo se recorrerá 2 veces

    //-- Se ejecuta cuando se pulsa un boton
    //-- que es un dígito
    boton.onclick = (ev) => { // a cada boton
        display.innerHTML += ev.target.value; // le asociamos esta función de retrollamda
        console.log("DIGITO!!!"); // mensaje pa comprobar que esto funciona
    }
}

//-------- Resto de funciones de retrollamada

//-- Insertar simbolo de sumar
suma.onclick = (ev) => {
  display.innerHTML += ev.target.value;
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}