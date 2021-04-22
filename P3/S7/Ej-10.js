console.log("Ejecutando JS...");

// obtengo los elementos del dom
const video = document.getElementById("video");
const play = document.getElementById("play");
const big = document.getElementById("big");
const small = document.getElementById("small");
const time = document.getElementById("time2");

play.onclick = () => { // si aprietan el play
 if (video.paused) // si el video estaba pausado
   video.play() // se activa
 else {
   video.pause() // si no esta pausado lo pauso
 }
}

big.onclick = () => { // para cambiar el tamaño
 video.width = 500;
 video.height = 300;
}

small.onclick = () => {
 video.width = 300;
 video.height = 200;
}

time.onclick = () => { // me quiero ir al segundo numero 2
 video.currentTime = 2;
}