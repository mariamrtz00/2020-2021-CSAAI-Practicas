console.log("Ejecutando JS...");

// con getElement cojo los elementos del HTML a partir de su identificador

display = document.getElementById("display")  
igual = document.getElementById("igual") 
clear = document.getElementById("clear") 
deleete = document.getElementById("delete") 
coma = document.getElementById("coma") 

//-- Estados de la calculadora
const ESTADO = {
  // mi máquina tiene 4 estados, le doy números aleatorios 
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
    COMA: false,

}


 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado incial
 let estado = ESTADO.INIT; 


// variable dígitos
// DOM por clase, antes era por id
let digitos = document.getElementsByClassName("operador"); // array con todos los números del 0-9

// Recorro el array de los digitos, i va de 0 a 9
for (i=0; i<digitos.length; i++){
    digitos[i].onclick = (ev) => { // cada vez que cliqueo un dígito
    numero(ev.target.value); // llamada a la funcion numero(boton)
    }
}

let operator = document.getElementsByClassName("operando"); // array con todos los signos de operacion

// Recorro el array de los operadores,: sumar, restar, etc....
for (i=0; i<operator.length; i++){
    operator[i].onclick = (ev)=>{ // cada vez que pulso sobre un operador
    if(estado == ESTADO.OP1){ // si estoy en el primer estado (el siguiente será el operador)
        display.innerHTML += ev.target.value;  // actualizo el displey AÑADIENDO el nuevo símbolo (no borro lo anterior)
        estado = ESTADO.OPERATION; // he cambiado de estado (el siguiente será otro dígito)
    }}
}


 // Función de retrollamada de todos los botones de los digitos
function numero(boton){


    if (estado == ESTADO.INIT) {
        display.innerHTML = boton; // actualizo el display poniendo el dígito que haya pulsado
        estado = ESTADO.OP1; // estoy en el estado 1
        console.log(estado, ":Estado"); 
      }else if (estado == ESTADO.OP1){
        display.innerHTML += boton; // por si el número tiene más de una cifra
        console.log(estado, ":Estado");
      }else if (estado == ESTADO.OPERATION) {// AÑADO EL SIGNO (+-*/) al dígito anterior
        display.innerHTML += boton;
        estado = ESTADO.OP2; // paso al siguiente estado, necesitaré el siguiente dígito
        console.log(estado, ":Estado");
      }else if (estado == ESTADO.OP2){
        display.innerHTML += boton; // añado el nuevo dígito
        console.log(estado, ":Estado");
      }
    }
    // NO PUEDO USAR TARGET VALUE PORQUE LO HE QUITADO DEL HTML




// Pone a cero el display

clear.onclick = (ev) => {
    display.innerHTML = "0";
      console.log("clear");
      estado = ESTADO.INIT;
      console.log(estado,"se borra todo");
  }

// para no poner 2 comas seguidas
coma.onclick = (ev) => {
    if(ESTADO.COMA){
      console.log("Error: No se pueden poner 2 comas seguidas");
    }else{
      display.innerHTML += ev.target.value;
      ESTADO.COMA = true;
    }
  }

igual.onclick = (ev) => {
    console.log("//");
    console.log(estado);
    if(estado == ESTADO.OP1 || estado == ESTADO.OP2 ){
      display.innerHTML = eval(display.innerHTML);
      estado = ESTADO.OP1;
      // no puedo volver a poner una coma si utilizo ans
      console.log(estado,"igual");

      }
    }

// Borra el ultimo digito que haya en el display
deleete.onclick = (ev) => {
    display.innerHTML = display.innerHTML.slice(0,-1);
    console.log("borra el último dígito")
}