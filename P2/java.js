console.log("Ejecutando JS...");

display = document.getElementById("display") 
// suma = document.getElementById("suma") 
igual = document.getElementById("igual") 
clear = document.getElementById("clear") 
deleete = document.getElementById("delete") 
coma = document.getElementById("coma") 

//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
}


 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado incial
 let estado = ESTADO.INIT; 


// variable dígitos
let digitos = document.getElementsByClassName("operador"); // todos los números del 0-9

for (i=0; i<digitos.length; i++){
    digitos[i].onclick = (ev) => {
        numero(ev.target.value) // llamada a la funcion numero(boton)
    }
}


 // Función de retrollamada de todos los botones de los digitos
function numero(boton){

    //-- Se ha recibido un dígito
    //-- Según en qué estado se encuentre la calculadora
    //-- se hará una cosa u otra
    
    //-- Si es el primer dígito, no lo añadimos,
    //-- sino que lo mostramos directamente en el display

    if (estado == ESTADO.INIT) {
        display.innerHTML = boton;
        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;
    } else if (estado == ESTADO.OP1 ||estado == ESTADO.OP2 || estado == ESTADO.OPERATION) {
        display.innerHTML += boton;
    } else if (estado == ESTADO.OPERATION) {
        display.innerHTML += boton;
        //-- Pasar al siguiente estado
        estado = ESTADO.OP2;
    } 
    // NO PUEDO USAR TARGET VALUE PORQUE LO HE QUITADO DEL HTML

}


let operator = document.getElementsByClassName("operando");

for (i=0; i<operator.length; i++){
    operator[i].onclick = (ev)=>{
    if(estado == ESTADO.OP1){
        display.innerHTML += ev.target.value;
        estado = ESTADO.OPERATION;
    }}
}

clear.onclick = () => {
    display.innerHTML = "0";
      console.log("clear");
      estado = ESTADO.INIT;
  }

coma.onclick = (ev) => {
    if(ESTADO.COMA){
      console.log("No se pueden poner dos comas seguidas");
    }else{
      display.innerHTML += ev.target.value;
      ESTADO.COMA = true;
    }
  }

igual.onclick = () => {
    console.log("no va?");
    console.log(estado);
    if(estado == ESTADO.OP2){
      display.innerHTML = eval(display.innerHTML);
      estado = ESTADO.OP2;
      console.log(estado,"igual");
      }
    }