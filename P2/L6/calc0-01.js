console.log("Ejecutando JS...");


//-- Elementos de la interfaz de la calculadora
// declaro variables para leer los identificadores del html
display = document.getElementById("display")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Funciones de retrollamada de los botones
//-- Cada vez que se aprieta un boton se actua
//-- sobre la cadena: añadiendo digito, operador +
//-- poniendo a cero o evaluando la expresión

// ahora establecemos las funciones de retrollamada

// -- Insertar digito 1
boton1.onclick = () => { // cuando clickeo 1
  display.innerHTML += "1"; // a la cadena del display le añadimos el 1
}

//-- Insertar digito 2
boton2.onclick = () => {
  display.innerHTML += "2"; 
}

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += "+";
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML); // si le damos al botón del igual, se evalua, esto peta si la cadena no es correcta
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}