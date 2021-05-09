console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc')
const ctx = canvas.getContext('2d');

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

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Eliminar el canal Rojo:recorrer el array de datos
  //-- eliminado el canal rojo y dejando el resto igual que
  //-- estaba
  for (let i = 0; i < data.length; i+=4) { // se incrementa de 4 en 4 de manera que la i vale 0, 4, 8... coge el canal rojo de cada pixel
    data[i] = 0; //-- Canal rojo a 0
    // si al rojo puro le quitamos la componente roja se quedará en negro
    // el negro no tiene componente roja
    // el blanco que si tiene de las 3, si le quito el rojo, queda como un color cian
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);

  console.log("hola....");
};

console.log("Fin...");