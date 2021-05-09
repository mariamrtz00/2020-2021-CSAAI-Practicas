console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizadorR = document.getElementById('Rdeslizador');
const deslizadorG = document.getElementById('Gdeslizador');
const deslizadorB = document.getElementById('Bdeslizador');

//-- Valor del deslizador
const range_valueR = document.getElementById('range_value_r');
const range_valueG = document.getElementById('range_value_g');
const range_valueB = document.getElementById('range_value_b');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};


deslizadorR.oninput = () => {// en cuanto el slider cambie
    colores();
  }
  
  deslizadorG.oninput = () => {
    colores();
  }
  
  deslizadorB.oninput = () => {
    colores();
  }

//-- Funcion de retrollamada del deslizador  
function colores(){
    //-- Mostrar el nuevo valor del deslizador
    range_value.innerHTML = deslizador.value; // el valor actual del slider se tiene que mostrar pa saber lo que estamos aplicando

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0); // en este caso partimos de la misma imagen original, podríamos aplicar filtros sonbre imgane ya con un filtro

    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral1 = deslizadorR.value
    umbral2 = deslizadorG.value
    umbral3 = deslizadorB.value

    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 0; i < data.length; i+=4) { // solo quiero las componentes rojas por eso voy de 4 en 4
    if (data[i] > umbral) // si la compo roja del pixel actual es > del umbral que he metido
        data[i] = umbral; // me lo baja al umbral que le he puesto
    } // y si no, se queda como estaba

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);

}


console.log("Fin...");