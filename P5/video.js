console.log("Ejecutando JS...");
//----- Obtener elemento de video y configurarlo

let directo = document.getElementById("directo"); // lo q retransmito

//botones
const btn1 = document.getElementById("b1");
const btn2 = document.getElementById("b2");
const btn3 = document.getElementById("b3");
//const test = document.getElementById("b4");
const prueba = document.getElementById('b4'); 
const test = document.getElementById("imgprueba");
//const test = document.getElementById('f');
imgprueba.src = 'test.jpg';

const imagen = "test.jpg";
const imagen1 = "imagen1.jpg";
const imagen2 = "imagen2.jpeg";
const imagen3 = "imagen3.jpg";

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");

const btn_on = document.getElementById("btn_src_on");
const btn_off = document.getElementById("btn_src_off");
const loop = document.getElementById("loop");
const notloop = document.getElementById("notloop");


const video = document.getElementById("directo");
const play = document.getElementById("play");
const big = document.getElementById("big");
const small = document.getElementById("small");
const time = document.getElementById("time2");

play.onclick = () => {
    if (video.paused)
      video.play()
    else {
      video.pause()
    }
   }
   
   big.onclick = () => {
    video.width = 600;
    video.height = 400;
   }
   
   small.onclick = () => {
    video.width = 300;
    video.height = 200;
   }
   
   time.onclick = () => {
    video.currentTime = 2;
   }




//-- Establecer las dimensiones de los vídeos
directo.width=520; 
directo.height=300;
video1.width=200;  
video1.height=100;
video2.width=200;  
video2.height=100;
video3.width=200;  
video3.height=100;
imgprueba.width=100;  
imgprueba.height=80;



// cuando no se está reproduciendo nada se pone cada imagen por defecto
directo.poster = imagen; //imagen cuando no se está reproduciendo video
video1.poster = imagen1;
video2.poster = imagen2;
video3.poster = imagen3;
prueba.poster = imgprueba;
//test.poster = imagen;





//-- Boton de FUENTES-ON
btn_on.onclick = () => {
 
    // videos en remoto
    video3.src="https://github.com/mariamrtz00/Videos-p5-/raw/main/bohe.mp4";
    video2.src="https://github.com/mariamrtz00/Videos-p5-/raw/main/charlie.mp4";
    video1.src="https://github.com/mariamrtz00/Videos-p5-/raw/main/Interstellar%20--%20Tr%C3%A1iler%20Teaser%20Oficial%20en%20espa%C3%B1ol%20HD.mp4";
   
    //-- Reprodeucimos un vídeo, desde el comienzo
    video1.currentTime = 0;
    video1.play();
  
    video2.currentTime = 0;
    video2.play();

    video3.currentTime = 0;
    video3.play();

    //-- Y en silencio...
    video1.muted= true;
    video2.muted= true;
    video3.muted= true;
    directo.muted = false;
};

//-- Boton de FUENTES-OFF
btn_off.onclick = () => {

    
    directo.poster = imagen; //imagen cuando no se está reproduciendo video
    video1.poster = imagen1;
    video2.poster = imagen2;
    video3.poster = imagen3;

    video1.src = null;
    video2.src = null;
    video3.src = null;
    directo.src = null; // sin esto no se pone la imagen
   
    
};


//-- Botón de Selección de la imagen test
prueba.onclick = () => { // cuando quiera poner la imagen test
    console.log('imahen de prueba')
    directo.src = imagen;
}; 

//-- Botón de Selección de la cámara 1
btn1.onclick = () => { //cuando de a camara 1
    directo.src = video1.src; // muestro en la principal el V1
    directo.currentTime = video1.currentTime; //el tiempo sea igual (aunq sale con un poco de retraso)
    directo.play(); // se reproduce
   // directo.poster=null;

    video1.style.border = 'dotted red 3px'
};

//-- Botón de Selección de la cámara 2
btn2.onclick = () => { //cuando de a camara 2
    directo.src = video2.src;
    directo.currentTime = video1.currentTime; //el tiempo sea igual (aunq sale con un poco de retraso)
    directo.play();
   // directo.poster=null;

    video2.style.border = 'dotted red 3px'
};


//-- Botón de Selección de la cámara 3
btn3.onclick = () => { //cuando de a camara 3

    directo.src = video3.src;
    directo.currentTime = video1.currentTime; //el tiempo sea igual (aunq sale con un poco de retraso)
    directo.play();
   // directo.poster=null;

    video3.style.border = 'dotted red 3px'
};


var bucle = false;
var fin = 2;
var inicio =1;

loop.onclick = () => {
    console.log('bucle');
    directo.currentTime = 0;
    bucle = true;
}

notloop.onclick = () => {
    console.log('bucle');
    directo.currentTime = 0;
    bucle = false;
}

setInterval(() =>{
    if(bucle){
        if (directo.currentTime > 2){
            directo.currentTime = inicio
        } else if (directo.currentTime < inicio){
            directo.currentTime = inicio;
    }}
},10);