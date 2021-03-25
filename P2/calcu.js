console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3
}

 let estado = ESTADO.INIT;   

// Función de retrollamada de todos los botones de los digitos
function digito(ev)
{

    if (estado == ESTADO.INIT) {

        display.innerHTML = ev.target.value;
        estado = ESTADO.OP1;

    } else if (estado == ESTADO.OP1) {
       
        //--En cualquier otro estado lo añadimos
        display.innerHTML += ev.target.value;
        estado = ESTADO.OPERATION;

    } else if (estado == ESTADO.OPERATION) {
        display.innerHTML += ev.target.value;
    } else if (estado == ESTADO.OP2) {
        display.innerHTML += ev.target.value;
    }
    
}



digitos = document.getElementsByClassName("operador") 

for (let boton of digitos) { // para cada boton me llamas a la funcion digito

    //-- Se ejecuta cuando se pulsa un boton
    //-- que es un dígito. Para que el código sea 
    //-- mas legible la función de retrollamada se
    //-- escribe como una función normal (digito)
    boton.onclick = digito;
}



suma.onclick = (ev) => {

    //-- Insertar simbolo de sumar
    display.innerHTML += ev.target.value; 

    //-- ¡Ojo! Aquí se inserta el + siempre!
    //-- Para que la calculadora funcione bien
    //-- sólo se debe permitir insertar el operador
    //-- en el estado OP1, y debe cambiar el estado
    //-- a OPERATION (según el diagrama de estados)
  
}

//-- Evaluar la expresion
igual.onclick = () => { // aqui también habrá que poner un if para que solo haya igual cuando OP2 o algo asú
    console.log("no va?");
    console.log(estado);
    if(estado == ESTADO.OP2){
        //-- Calcular la expresión y añadirla al display
        display.innerHTML = eval(display.innerHTML); 
        estado = ESTADO.OP1;
        console.log(estado,"igual");
    }
    

    //-- ¡Ojo! Aquí se hace siempre!
    //-- Sólo se debe permitar que eso se haga
    //-- si se está en el estado final (OP2)
  
}

//-- Poner a cero la expresion
//-- Y volver al estado inicial
clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}