console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


ctx.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(100, 50, 10, 0, 2 * Math.PI); // dibujamos un arco (coordenadas del centro (x=100, y=50), radio =10, angulo inicial =0rad, angulo final =2pi)
   // media circunferencia: el angulo final sera solo pi 
   // si lo quiero más grande, aumento el radio, si me salgo del canvas se recortará pero no hay errores

    ctx.strokeStyle = 'blue'; // la linea del perimetro azul
    ctx.lineWidth = 3; // grosor del perimetro de 3 pixeles
    ctx.fillStyle = 'yellow'; // relleno amarillo

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()