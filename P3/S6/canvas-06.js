console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

// para texto no hace faltz el begin Path!!

//-- Texto solido
ctx.font = "25px Arial"; //tamaño y tipo de fuente
ctx.fillStyle = 'yellow' // color
ctx.fillText("Texo sólido", 10, 30); // interior del texto (10,20) son las coordenadas donde quiero que se empiece a dibujar

//-- Texto trazo

ctx.strokeStyle = 'blue'; // para hacer solo texto con contorno, la parte interior no sale
ctx.font = "35px Arial";
ctx.strokeText("Texto trazo", 5, 80);