console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


ctx.beginPath();
    //-- Línea horizontal
    ctx.moveTo(10, 20); // moveto no dibuja, solo me situa en esa coordenada x=10, y=20
    ctx.lineTo(100, 20); // me muevo a la nueva posición, pero dibujando: x irá de 10 a 100 

    //-- Línea horizontal y vertical, unidas
    ctx.moveTo(10, 80);
    ctx.lineTo(150,80);
    ctx.lineTo(190,40); // he cambiado de (150,30)

    ctx.strokeStyle = 'green'; //lineasd de collor verde
    //-- Cambiar el tamaño de la linea del trazo
    ctx.lineWidth = 1; // linea finita

    //-- Dibujar el trazo
    ctx.stroke()
    
ctx.closePath()