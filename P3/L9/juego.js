console.log("Ejecutando JS...");
const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 255; // ancho
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");
const pausa = document.getElementById("boton_pausa");
const cont = document.getElementById("boton_play");
const display = document.getElementById("display");

//-- Coordenadas del objeto
let x = 400;
let y = 270;

//-- Velocidades del objeto
let velx = 1; // horiz
let vely = 1; // verti
let vidas_dispo = 3;
let x2 = canvas.width/2;

pausa.onclick = () => {
  coordenadas = [];
  coordenadas.push(x);
  coordenadas.push(y);
  coordenadas.push(velx);
  coordenadas.push(vely);
  velx = 0;
  vely = 0;
}

// a poner los ladrillos sin tener mil líneas de código
const config_ladrillos = {
  filas: 6, 
  columnas: 10, 
  ancho: 30, 
  alto: 15, 
  padding: 10, 
  visible: true 
}

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
            visible: config_ladrillos.visible

        };
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
