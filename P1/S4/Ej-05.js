//-- Tenemos acceso al documento html mediante  
//-- el objeto document

//-- Leer el párrafo identificado como test
// obtener elemento cuyo identificador es 'test
// defino el objeto constante y lo llamo como quiera
const test = document.getElementById('test') // lee el valor actual del texto

//-- Mostrar en la consola el contenido del párrafo
//-- (es la propiedad innerHTML)
console.log("Párrafo test leido. Dice:")
console.log(test.innerHTML)