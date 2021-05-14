console.log("Ejecutando JS...");
//----- Obtener elemento de video y configurarlo

let directo = document.getElementById("directo"); // lo q retransmito

//botones
const btn1 = document.getElementById("b1");
const btn2 = document.getElementById("b2");
const btn3 = document.getElementById("b3");


const imagen = "test.jpg";
const imagen1 = "imagen1.jpg";
const imagen2 = "imagen2.jpeg";
const imagen3 = "imagen3.jpg";

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");

const btn_on = document.getElementById("btn_src_on");
const btn_off = document.getElementById("btn_src_off");
const pausa = document.getElementById("pausa");



//-- Establecer las dimensiones de los vídeos
directo.width=420; 
directo.height=200;
video1.width=200;  
video1.height=100;
video2.width=200;  
video2.height=100;
video3.width=200;  
video3.height=100;
imagen.width=200;  
imagen.height=100;



// cuando no se está reproduciendo nada se pone cada imagen por defecto
directo.poster = imagen; //imagen cuando no se está reproduciendo video
video1.poster = imagen1;
video2.poster = imagen2;
video3.poster = imagen3;




//-- Boton de FUENTES-ON
btn_on.onclick = () => {
 
    // videos en remoto
    video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
    video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
    video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";

    //-- Reprodeucimos un vídeo, desde el comienzo
    video1.currentTime = 0;
    video1.play();
  
    video2.currentTime = 0;
    video2.play();

    video3.currentTime = 0;
    video3.play();

    //-- Y en silencio...
    video1.muted= true;
  
    
};

//-- Boton de FUENTES-ON
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

pausa.onclick = () => {
    if (directo.play()){
        directo.pause();
    }
}



//-- Botón de Selección de la cámara 1
btn1.onclick = () => { //cuando de a camara 1
    directo.src = video1.src; // muestro en la principal el V1
    directo.currentTime = video1.currentTime; //el tiempo sea igual (aunq sale con un poco de retraso)
    directo.play(); // se reproduce
    directo.poster=null;
};

//-- Botón de Selección de la cámara 2
btn2.onclick = () => { //cuando de a camara 2
    directo.src = video2.src;
    directo.currentTime = video1.currentTime; //el tiempo sea igual (aunq sale con un poco de retraso)
    directo.play();
    directo.poster=null;
};


//-- Botón de Selección de la cámara 3
btn3.onclick = () => { //cuando de a camara 3
    directo.src = video3.src;
    directo.currentTime = video1.currentTime; //el tiempo sea igual (aunq sale con un poco de retraso)
    directo.play();
    directo.poster=null;
};
