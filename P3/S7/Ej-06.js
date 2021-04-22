console.log("Ejecutando JS...");

//--Obtener los botones
const click = document.getElementById("click")
const what = document.getElementById("what");

//-- Crear los elementos de sonido
const click_sound = new Audio('click.mp3'); // objeto nuevo de tipo audio
const what_sound = new Audio('what.mp3'); // elemento nuevo de audio igual

click.onclick = () => { // cuando aprito click q se reproduzca el sonido
  click_sound.currentTime = 0; // si ya se estaba reproduciendo se pone a 0
  click_sound.play(); // con play se queda reproduciendose en segundo plano, todo sigue funcionando auq se esté ejecutnaod el sonido
}

what.onclick = () => {
  what_sound.currentTime = 0; // ponemos a 0 el tiempo
  what_sound.play();
}