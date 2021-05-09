console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc')
const ctx = canvas.getContext('2d');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () { // esperamos a que cargue la imagen con el onload

  console.log("Imagen cargada"); // me avisa cuando la imagen esté cargada

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen 
  
  // le doy las dimensiones del canvas con las mismas dimensiones que la imagen
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0); // dibujar la imagen
};

console.log("Fin...");