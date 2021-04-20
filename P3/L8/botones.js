console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const start = document.getElementById("start");
const izq = document.getElementById("izquierda");
const dcha = document.getElementById("derecha");

//-- Definir el tamaño del canvas
canvas.width = 255; // ancho
canvas.height = 400; // alto

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


//-- Coordenadas del objeto
let x = 0;
let y = 270;

//-- Velocidad horizontal del objeto
let velx = 1;
let vely = 1;

//-- Funcion principal de animacion
function update() 
{
    console.log("test");
  
    if (x < 0 || x >= (canvas.width - 20) ) {
        velx = -velx;
    } 
    if (y < 0) {
        vely = -vely;

    }
    if (y> canvas.height - 20) {
        x= xraq;
        y= yraq;
    }
  


  //-- Actualizar la posición
  x = x + velx;
  y = y - vely; // PARA QUE LA BOLA VAYA HACIA ARRIBA

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let xraq = 0;
  let yraq = 350;
  ctx.beginPath();
  //-- Definir un rectangulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
        ctx.rect(5,5, 20, 10);
        ctx.rect(30,5, 20, 10);
        ctx.rect(55,5, 20, 10);
        ctx.rect(80,5, 20, 10);
        ctx.rect(105,5, 20, 10);
        ctx.rect(130,5, 20, 10);
        ctx.rect(155,5, 20, 10); 
        ctx.rect(180,5, 20, 10);
        ctx.rect(205,5, 20, 10); 
        ctx.rect(230,5, 20, 10);

        ctx.rect(5,20, 20, 10);
        ctx.rect(30,20, 20, 10);
        ctx.rect(55,20, 20, 10);
        ctx.rect(80,20, 20, 10);
        ctx.rect(105,20, 20, 10);
        ctx.rect(130,20, 20, 10);
        ctx.rect(155,20, 20, 10);
        ctx.rect(180,20, 20, 10);
        ctx.rect(205,20, 20, 10); 
        ctx.rect(230,20, 20, 10);

        ctx.rect(5,35, 20, 10);
        ctx.rect(30,35, 20, 10);
        ctx.rect(55,35, 20, 10);
        ctx.rect(80,35, 20, 10);
        ctx.rect(105,35, 20, 10);
        ctx.rect(130,35, 20, 10);
        ctx.rect(155,35, 20, 10);
        ctx.rect(180,35, 20, 10);
        ctx.rect(205,35, 20, 10); 
        ctx.rect(230,35, 20, 10);

        ctx.rect(5,50, 20, 10);
        ctx.rect(30,50, 20, 10);
        ctx.rect(55,50, 20, 10);
        ctx.rect(80,50, 20, 10);
        ctx.rect(105,50, 20, 10);
        ctx.rect(130,50, 20, 10);
        ctx.rect(155,50, 20, 10);
        ctx.rect(180,50, 20, 10);
        ctx.rect(205,50, 20, 10); 
        ctx.rect(230,50, 20, 10);

        ctx.rect(5,65, 20, 10);
        ctx.rect(30,65, 20, 10);
        ctx.rect(55,65, 20, 10);
        ctx.rect(80,65, 20, 10);
        ctx.rect(105,65, 20, 10);
        ctx.rect(130,65, 20, 10);
        ctx.rect(155,65, 20, 10);
        ctx.rect(180,65, 20, 10);
        ctx.rect(205,65, 20, 10); 
        ctx.rect(230,65, 20, 10);

        ctx.rect(5,80, 20, 10);
        ctx.rect(30,80, 20, 10);
        ctx.rect(55,80, 20, 10);
        ctx.rect(80,80, 20, 10);
        ctx.rect(105,80, 20, 10);
        ctx.rect(130,80, 20, 10);
        ctx.rect(155,80, 20, 10);
        ctx.rect(180,80, 20, 10);
        ctx.rect(205,80, 20, 10); 
        ctx.rect(230,80, 20, 10);

        ctx.rect(5,95, 20, 10);
        ctx.rect(30,95, 20, 10);
        ctx.rect(55,95, 20, 10);
        ctx.rect(80,95, 20, 10);
        ctx.rect(105,95, 20, 10);
        ctx.rect(130,95, 20, 10);
        ctx.rect(155,95, 20, 10);
        ctx.rect(180,95, 20, 10);
        ctx.rect(205,95, 20, 10); 
        ctx.rect(230,95, 20, 10);
        ctx.fillStyle = 'pink'
        ctx.strokeStyle = 'violet'; 
        ctx.lineWidth = 2.0; 
        //-- Mostrar el relleno
        ctx.fill();
        //-- Mostrar el trazo del rectángulo
        ctx.stroke();
    //ctx.closePath();

    ctx.beginPath();
    
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
    //ctx.closePath();

    ctx.beginPath();
    // pelotita
    // FALLO: NO ESTABA PONIENDO X E Y ENTONCES NO SE ACTUALIZA LA PELOTA CON LAS POSICIONES

        ctx.arc(x, y, 7, 0, 2 * Math.PI); 
        // radio = 7

        ctx.fillStyle = 'blue';
        
        ctx.fill();
    ctx.closePath();


  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}





izq.onclick = () => {
    console.log('boton izquierda');
    // no sé como mover la raqueta 
    xraq = xraq- 1;
}

dcha.onclick = () => {
    console.log("boton deracha");
    // no sé como mover la raqueta 
    xraq = xraq+ 1;
}

 // cuando pulse el boton start, empieza el juego 
start.onclick = update;