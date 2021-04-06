console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas"); // OBJETO HTML CANVAS

//-- Definir el tamaño del convas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas, SMP así
const ctx = canvas.getContext("2d");  // obtener el contexto para hacer dibujos en 2D

//-- Cada objeto a dibujar lo delimitaremos 
//-- por los métodos beginPath() y closePath()
ctx.beginPath(); // voy a crear un elemento nuevo, aquí meto rectas, círculos, líneas...
  //-- Definir un rectangulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  ctx.rect(5,5, 100, 50); // RECTÁNGULO con método rect (esquina superior izquierda, anchura del rectangulo, altura)

  //-- Color de relleno del rectángulo
  ctx.fillStyle = 'blue'; 

  // PUedo mostrar solo el relleno y no el contorno, y viceversa
  //-- Mostrar el relleno
  ctx.fill(); // para enseñar el relleno

  //-- Mostrar el trazo del rectángulo
  ctx.stroke(); // para enseñar el contorno

ctx.closePath(); // cierro el elemento

// en el canvas, el origen está en la esquina superior izquierda
// puedo hacer un rectángulo que se salga del canvas, pero el canvas va a recortarlo