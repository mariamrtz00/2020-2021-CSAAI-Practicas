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
let x = 0;
let y = 270;

//-- Velocidades del objeto
let velx = 1; // horiz
let vely = 1; // verti
let vidas_dispo = 3;

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
