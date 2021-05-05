console.log("Ejecutando JS...");
const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 450; // ancho
canvas.height = 600;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");
var pausa = document.getElementById("boton_pausa");
var empezamos = document.getElementById("boton_start");
const display = document.getElementById("display");


var score = 0;
var vidas = 3;

var x = canvas.width/2;
var y = canvas.height-10;
var x2 = 2;
var y2 = -2;

//-- Velocidades del objeto
let velx = 0; // horiz
let vely = 5; // verti

// botones
var play = false;
var pulsa_bdcha = false;
var pulsa_bizq = false;





// Start
empezamos.addEventListener("click", () =>{
  play = true;
});

// Pausa
pausa.onclick = () =>{ // esto para en seco, no es lo que quiero
    velx = 0;
    vely = 0;
};
// emp
empezamos.onclick = () =>{ // esto para en seco, no es lo que quiero
    velx = 0;
    vely = 5;
};



// a poner los ladrillos sin tener mil líneas de código

const config_ladrillos = {
  filas: 7, 
  columnas: 10, 
  ancho: 32, 
  alto: 15, 
  padding: 9, 
  ladrillo_visible: true
}




// voy a guardar los ladrillos en una matriz
const ladrillos = [];

// creo un bucle que va reccoriendo las finlas y columnas y asignando psiciones


for (let i =0; i < config_ladrillos.filas; i++){ // recorre numero de filas
    ladrillos[i] = [];  // filas
    for (let j =0; j < config_ladrillos.columnas; j++){ // recorre numero de columnas de cada fila
      // calculamos valores para los ladrillos 
        ladrillos[i][j] = { // filas y columnas

            x: 25 + (config_ladrillos.ancho + config_ladrillos.padding) * j,
            y: 75 + (config_ladrillos.alto + config_ladrillos.padding) * i,
            ancho: config_ladrillos.ancho,
            alto: config_ladrillos.alto,
            padding: config_ladrillos.padding,
            ladrillo_visible: config_ladrillos.ladrillo_visible
        };
    }
}
console.log('a ver si llegamos aqui')


// para mover la pala
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(){
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

function keyUpHandler(){
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
        if (x < 10 || x >= (canvas.width - 10) ) {
            velx = -velx;
            console.log('hola03')

        }else if (y < 50) {
            vely = -vely;
            console.log('hola02')

        }else if (y > canvas.height + 10){
            x = -10;
            y = -10;
            console.log('hola1')

        }else if ((x > 20) && (x < 20 + 67)){
            if ((y > 563) && (y < 587)){
                vely = -vely;
                velx = -velx;
                console.log('hodasf')
            }
        }
    

  //-- Actualizar la posición
  x = x + velx;
  y = y - vely; 

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);





  ctx.beginPath();
  // dibujar raqueeta
      // para ver donde empieza a dibujarse el rectángulo (justo a la mitad lo quiero)
      var xraq = (canvas.width - 40) / 2;
      var yraq = (canvas.width - 10)
      ctx.rect(xraq,yraq, 40, 7); 
      // 40 y 70 son ancho y altura de la pala

      //-- Color de relleno del rectángulo
      ctx.fillStyle = 'black';
      ctx.strokeStyle = 'yellow'; 
      ctx.lineWidth = 0.2; 
      //-- Mostrar el relleno
      ctx.fill();
      //-- Mostrar el trazo del rectángulo
      ctx.stroke();

  ctx.closePath();

  
  //dibujar ladrillos
    for (let i = 0; i < config_ladrillos.filas; i++) {
        for (let j = 0; j < config_ladrillos.columnas; j++) {
            // si el ladrillo es visible se pinta
            if (ladrillos[i][j].ladrillo_visible) {
                ctx.beginPath();
                    ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, config_ladrillos.ancho, config_ladrillos.alto);
                    ctx.fillStyle = 'yellow'
                    ctx.fill();
                ctx.stroke();
            }
        }
        }

    
  ctx.beginPath();
  // dibujar pelotita

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

function colisionLadrillo(){
    for(let i = 0; i < config_ladrillos.filas; i++){
        for (let j = 0; j < config_ladrillos.columnas; j++){
            if(ladrillos[i][j].ladrillo_visible == true){
                if(ball.x >= ladrillos[i][j].x &&
                ball.x <= ladrillos[i][j].x + config_ladrillos.ancho &&
                ball.y >= ladrillos[i][j].y &&
                ball.y <= ladrillos[i][j].y + config_ladrillos.alto)
                {
                    ball.dy = -ball.dy;
                    ladrillos[i][j].visible = false;
                    score = score + 1;
                    } 
                
            }
        }
    }
}

let ball = {
    x: canvas.width /2,
    y: canvas.height - 50,
    dx: 0,
    dy: 0,
    radius: 7,
    draw: function() {
        ctx.beginPath();
          ctx.fillStyle = "white";
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
          ctx.closePath();
        ctx.fill();
    }
};

colisionLadrillo();
window.onkeydown = (e) => {
    switch (e.keyCode){
        case 32:
            velx = 3;
            vely = 2;
        case 37:
            if (x2 <0){
                x2 = x2 + 10;
            } else{
                x2 = x2 - 10;
            }
            break;
        case 39:
            if (x2 <= canvas.width - 70){
                x2 = x2 + 10;
            } else{
                x2 = x2 - 10;
            }
    }
}

window.onkeyup = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39){
        x2 = x2;
    }
}