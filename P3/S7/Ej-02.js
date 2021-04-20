//-- Entradas de texto 1,2 y 3 con sus párrafos de visualización (DISPLAYS)
const text1 = document.getElementById("text1");
const text1_disp = document.getElementById("text1_disp");
const text2 = document.getElementById("text2");
const text2_disp = document.getElementById("text2_disp");
const text3 = document.getElementById("text3");
const text3_disp = document.getElementById("text3_disp");

//-- Entrada de texto tipo password y su display asociado
const passw = document.getElementById("passw");
const passw_disp = document.getElementById("passw_disp");

//-- Retrollamadas de la entrada 1
text1.oninput = () => { // cada vez que hay un cambio en la entrada de texto
    // ya sea poner o quitar una letra, cuando el usuario pone el definitivo utilizo el onchange
    text1_disp.innerHTML = "Escribiendo..."
}

// ONCHANGUE ES PARA CUANDO HAYA UN CAMBIO DEFINITIVO, CUANDO EL USUARIO LE HAYA DADO AL ENTER

text1.onchange = () => { // definitivo cuando doy al enter
    text1_disp.innerHTML=text1.value;
}

//-- Retrollamada de la entrada 2
text2.onchange = () => { // cada vez que tengamos una cosa vália, si meto >10 no hace nada
    text2_disp.innerHTML = text2.value; 
}

//-- Retrollamada de la entrada 3
text3.onchange = () => { 
    text3_disp.innerHTML = text3.value; 
}

//-- Retrollamada de la entrada 4
passw.onchange = () => {
    passw_disp.innerHTML = passw.value;
}