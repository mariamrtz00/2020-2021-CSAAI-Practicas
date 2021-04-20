//-- Boton normal
// elementos asociados al primer boton, es el boton y su texto asociado
const button = document.getElementById("button");
const button_test = document.getElementById("button-test");

//-- Checkbox
// los botones radio y sus display
const c1 = document.getElementById("checkbox1");
const c2 = document.getElementById("checkbox2");
const c1_test = document.getElementById("c1_test");
const c2_test = document.getElementById("c2_test");

//-- Botones radio
// 4 botones y un unico display
const r1 = document.getElementById("radio1");
const r2 = document.getElementById("radio2");
const r3 = document.getElementById("radio3");
const r4 = document.getElementById("radio4");
const r_disp = document.getElementById("radio_display");

//-- Boton normal
// los botones normales tienen el evento click, el resto tendran otros eventos
button.onclick = () => {
    //-- Cambiar de color el texto
    if (button_test.style.color == "") { // si no tiene estilo le pongo verde
        button_test.style.color = "green";
    } else { // si ya tenía estilo, se lo quito
        button_test.style.color = "";
    }
}

//---- Botones checkbox, evento onchange
// cada vez que cambia de estado el pulsador, le cambio el color a la etiqueta asociada
c1.onchange = () => {
    if (c1.checked) { // si c1 está seleccionado
        c1_test.style.color = "red"; // le pongo el color rojo a su etiqueta asociada
    } else { // si no le quito el estilo
        c1_test.style.color = "";
    }
}
// se podría hacer en una unica funcion
c2.onchange = () => {
    if (c2.checked) {
        c2_test.style.color = "red";
    } else {
        c2_test.style.color = "";
    }
}

//-- Botones radio
// ahora el onchange se llama cada vez que se activa el pulsador
r1.onchange = () => { // si se me activa r1
    r_disp.innerHTML = "b1";  // pongo su valor 
}

r2.onchange = () => {
    r_disp.innerHTML = "b2";   
}

r3.onchange = () => {
    r_disp.innerHTML = "b3";   
}

r4.onchange = () => {
    r_disp.innerHTML = "b4";   
}