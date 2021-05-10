console.log("Ejecutando JS...");
const canvas = document.getElementById("canvas");

const pierdevid = new Audio('pierdevid.mp3');
const ganar = new Audio('aplausos.mp3');
const rebote = new Audio('rebote.mp3');

var ctx = canvas.getContext("2d");

//-- Definir el tamaño del canvas
canvas.width = 450; // ancho
canvas.height = 600;

var radio = 7;
var x = canvas.width/2;
var y = canvas.height-10;


//-- Velocidad de la pelota, está a 0 hasta que demos al play osea space
let velx = 0; // horiz
let vely = 0; // verti

var score = 0; // la puntuación es un contador creciente
function puntuacion() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("SCORE: " + score, 8, 25);
}

var vidas = 3; // las vidas son un contador decrecieetn
function pierdevida() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("VIDAS RESTANTES: "+vidas, canvas.width-180, 25);
}

// a poner los ladrillos sin tener mil líneas de código
const config_ladrillos = {
    filas: 6, 
    columnas: 10, 
    ancho: 30, 
    alto: 15, 
    padding: 10, 
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


function Fladrillos() {
    //dibujar ladrillos
    for (let i = 0; i < config_ladrillos.filas; i++) {
        for (let j = 0; j < config_ladrillos.columnas; j++) {
            // si el ladrillo es visible se pinta
            if (ladrillos[i][j].ladrillo_visible) {
                ctx.beginPath();
                    ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, config_ladrillos.ancho, config_ladrillos.alto);
                    ctx.fillStyle = 'rgb(51, 212, 59)'
                    ctx.fill();
                ctx.stroke();
            }
        }
    }
}

    

function Fpelotita() {
    ctx.beginPath();
        ctx.arc(x, y, radio, 0, 2 * Math.PI); 
        // radio = 7
        ctx.strokeStyle = 'green';
        ctx.lineWidht = 3;
        ctx.fillStyle = 'black';
        ctx.stroke();
        ctx.fill();
    ctx.closePath();    
}



// para leer el teclado
var pulsa_dcha = false;
var pulsa_izq = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
   
    if(e.keyCode == 39) {
        console.log("pulsando derecha");
        pulsa_dcha = true;
    }else if(e.keyCode == 37) {
        console.log("pulsando izquierda");
        pulsa_izq = true;
    }else if(e.keyCode == 32){
        console.log(" pulsa espacio");
        velx = 2;
        vely = 3;}

}
function keyUpHandler(e) {

    
    if(e.keyCode == 39) {
        console.log("suelta derecha");
        pulsa_dcha = false;
    }else if(e.keyCode == 37) {
        console.log("suelta izquierda");
        pulsa_izq = false;
    }
}

function collisionDetection(){
    for (let i = 0; i < config_ladrillos.filas; i++) {
        for (let j = 0; j < config_ladrillos.columnas; j++) {
            if (ladrillos[i][j].ladrillo_visible == true) {
                if( x >= ladrillos[i][j].x &&
                    x <= ladrillos[i][j].x + config_ladrillos.ancho &&
                    y >= ladrillos[i][j].y &&
                    y <= ladrillos[i][j].y + config_ladrillos.alto)
                {
                    console.log('ha detectado el ladrillo')
                    rebote.volume=0.5;
                    rebote.play();

                    vely = - vely // rebote de la pelota
                    ladrillos[i][j].ladrillo_visible = false; // se elimina el brickkk
                    score = score + 1;
                    // estoy haciedno todo con vely QUE NO SE ME OLVIDE PONER VELX!!!
                }
            }
        }
    }
}



//dimensiones raqueta
var alto_raq = 5;
var ancho_raq = 80;
var xraq = (canvas.width-ancho_raq)/2; // la raqueta está justo a la mitad del ancho del canvas

function Fraqueta() {
    ctx.beginPath();
        ctx.rect(xraq, canvas.height-alto_raq, ancho_raq, alto_raq); 
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
}


function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Fpelotita();
    Fraqueta();
    Fladrillos();
    puntuacion();
    pierdevida();
    collisionDetection();
    
    if (x < 10 || x >= (canvas.width - 10) ) { // le dejamos un poquito de margen para ver el rebote en la pared y q no se nos esconda la pelota
        velx = -velx;
        console.log('rebote horizontal')
        
    }else if (y < 10) {
        vely = -vely;
        console.log('rebote vertical')
    }

    else if(y + vely > canvas.height-radio) {
        if(x > xraq && x < xraq +ancho_raq) {
            vely = -vely;
            console.log("colision raqueta - pelota");
        }
        else {
            vidas= vidas -1;
            pierdevid.volume=0.05;
            pierdevid.play();

            if (vidas ==0){
                console.log("game over");
                document.location.reload();
            }
            
            if (score == (config_ladrillos.filas * config_ladrillos.columnas)){
                vely = 0;
                velx = 0;
                console.log("te pasaste el juego");
                ganar.volume=0.05;
                ganar.play();
                document.location.reload();  // empezamos de nuevo
            }
        else{
            console.log("Mueve bien esa raquetaaa");
            x = canvas.width/2;
            y = canvas.height-30;
            velx = 3;
            vely = -3;
            xraq = (canvas.width-ancho_raq)/2;
        }
    }
}
    
    if(pulsa_dcha && xraq < canvas.width-ancho_raq) {
        console.log("raqueta a la derecha");
        xraq += 10; // se mueve más o menos rapidito
    }
    else if(pulsa_izq && xraq > 0) {
        console.log("raqueta a la izquierda");
        xraq -= 10;
    }
    
    x +=velx;
    y += vely; // para que empiece hacia arriba deberia estar en -= pero me hace algo raro cuando pierdo vida
    requestAnimationFrame(update);
}
update();
