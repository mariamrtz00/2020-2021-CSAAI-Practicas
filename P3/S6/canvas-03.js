console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


ctx.beginPath();
    //-- Definir un rectangulo de dimensiones 100x50,
    //-- cuya esquina superior izquierda está en (5,5)
    ctx.rect(5,5, 100, 50); // rectangulo

    //-- Dibujar
    ctx.fillStyle = 'red'; //rojo

    //-- Cambiar el tamaño de la linea del trazo
    ctx.lineWidth = 4; // al contorno del rectángulo le doy un poco de grosor

    //-- Rellenar
    ctx.fill(); // muestro fondo

    //-- Dibujar el trazo
    ctx.stroke() // muestro contorno
    
ctx.closePath()