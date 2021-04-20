const num1= document.getElementById('num1');
const num1_disp = document.getElementById('num1_disp');

const range = document.getElementById('range');
const range_disp = document.getElementById('range_disp');
const range_disp2 = document.getElementById('range_disp2');

// con change, cuando tenga un valor estable
num1.onchange = () => { // esta funcion solo se invoca cuando estemos metiendo unnumero correcto, dentro del limite y no letras etc
    if (num1.value != '') { // cuando el valor estable sea distinto q la cadena nula
        num1_disp.innerHTML = num1.value; // se muestra el numero
    }
}


// para el deslizador tenemos 2 funciones, es para valor inestable, no es el final
// una para cuando el usuario mueve el deslizador con el boton apretado, es decir, aun no lo hemos soltado
range.oninput = () => {
    
    range_disp.innerHTML = range.value;
    
}
// cuando el usuario ya ha soltado el boton se convierte en un valor estable y:
range.onchange = () => {
    
    range_disp2.innerHTML = range.value;
    
}