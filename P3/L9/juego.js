console.log("Ejecutando JS...");
const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 255; // ancho
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");
const pausa = document.getElementById("boton_pausa");
const empezamos = document.getElementById("boton_start");
const display = document.getElementById("display");


var score = 0;
var vidas = 3;

var x = canvas.width/2;
var y = canvas.height-20;
var x2 = 2;
var y2 = -2;

//-- Velocidades del objeto
let velx = 1; // horiz
let vely = 1; // verti

var play = false;
var pulsa_bdcha = false;
var pulsa_bizq = false;

// Start
empezamos.addEventListener("click", () =>{
  play = true;
});

// Pausa
pausa.addEventListener("click", () =>{
  play = false;
});




// a poner los ladrillos sin tener mil líneas de código
const config_ladrillos = {
  filas: 6, 
  columnas: 10, 
  ancho: 30, 
  alto: 15, 
  padding: 10, 
}

// voy a guardar los ladrillos en una matriz
const ladrillos = []; 

for (let i =0; i < config_ladrillos.filas; i++){ // recorre numero de filas
    ladrillos[i] = [];  // filas
    for (let j =0; j < config_ladrillos.columnas; j++){ // recorre numero de columnas de cada fila
      // calculamos valores para los ladrillos 
        ladrillos[i][j] = { // filas y columnas

            x: 25 + (config_ladrillos.ancho + config_ladrillos.padding) * j,
            y: 75 + (config_ladrillos.alto + config_ladrillos.padding) * i,
            w: config_ladrillos.ancho,
            h: config_ladrillos.alto,
            padding: config_ladrillos.padding,
            
        };
    }
}
console.log('a ver si llegamos aqui')

// para mover la pala
document.addEventListener("keydown", pulsa, false);
document.addEventListener("keyup", nopulses, false);

function pulsa(){
    if(e.keyCode == 39) { // en mi ordenador es la flecha derecha
        pulsa_bdcha = true;

    }else if(e.keyCode == 37) { // en mi ordenador es la flecha izquierda
        pulsa_bizq = true;

    }else if(e.keyCode == 9) { // en mi ordenador es el intro
        play = true;
        x2 = 5;
        y2 = -5;
        x = canvas.width/2; // esto va a estar mal porque no le estoy dando posición a la pala
        y = canvas.height-30;
  }
}

function nopulses(){
    if(e.keyCode == 39) { // en mi ordenador es la flecha derecha
       pulsa_bdcha = false;

    }else if(e.keyCode == 37) { // en mi ordenador es la flecha izquierda
        pulsa_bizq = false;
    }
}


//-- Funcion principal de animacion
// 1. Actualiza la posicion del elemento
// 2. Borrar el canvas
// 3. Pintaar en el canvas
// se repite el proceso

function update() {
  console.log("test");

  // para que rebote en las paredes
  if (x < 0 || x >= (canvas.width - 20) ) {
      velx = -velx;

  } else if (y < 0) {
      vely = -vely;

  } else if (y > canvas.height + 20){
    x = -10;
    y = -10;
    vidas_dispo = vidas_dispo - 1;
        if (vidas >= 1){
            x = 400; 
            y = 270;
            velx = 0;
            vely = 0;
            x2 = 0;
        }else if (vidas == 0){
            document.location.reload();
        }
}

  //-- Actualizar la posición
  x = x + velx;
  y = y - vely; // PARA QUE LA BOLA VAYA HACIA ARRIBA

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);


// dibujar ladrillos 

  for (let i = 0; i < config_ladrillos.filas; i++) {
    for (let j = 0; j < config_ladrillos.columnas; j++) {

      if (ladrillos[i][j].visible) {
        ctx.beginPath();
          ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, config_ladrillos.w, config_ladrillos.h);
          ctx.fillStyle = 'pink'
          ctx.fill();
        ctx.stroke();
      }
    }
  }

  ctx.beginPath();
  // raqueeta

    ctx.rect(xraq,yraq, 40, 7); // base para que rebote la pelota
    // x= 70(donde empieza a dibujarse), y= 350 (el 0,0 está arriba a la izquierda)
    // grosor =7, largo=40

    //-- Color de relleno del rectángulo
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'yellow'; 
    ctx.lineWidth = 0.2; 
    //-- Mostrar el relleno
    ctx.fill();
    //-- Mostrar el trazo del rectángulo
    ctx.stroke();

  ctx.closePath();



  ctx.beginPath();
  // pelotita

    ctx.arc(x, y, 7, 0, 2 * Math.PI); 
    // radio = 7
    ctx.strokeStyle = 'green';
    ctx.lineWidht = 3;
    ctx.fillStyle = 'blue';
    ctx.stroke();
    ctx.fill();

  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}


update();
