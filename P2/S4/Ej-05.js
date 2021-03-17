//-- Tenemos acceso al documento html mediante  
//-- el objeto document

//-- Leer el párrafo identificado como test
// obtener elemento cuyo identificador es 'test
// defino el objeto constante y lo llamo como quiera
const test = document.getElementById('test') // lee el valor actual del texto

//-- Mostrar en la consola el contenido del párrafo
//-- (es la propiedad innerHTML)
console.log("Párrafo test leido. Dice:") // mensaje q sale en la consola
console.log(test.innerHTML) // lo que hay escrito en el html (esto es un párrafo de prueba)
// si en la consola pongo test, me pone que es un párrafo y me lo señala en la pantalla, esto es para acceder a las propiedades
// test. para ver los detalles
// test.innerHTML : 'esto es un párrafo de prueba'
// test.innerHTML :'CAMBIADO' --> me lo cambia en la página hasta que vuelva a actualizar, no el html, esto es para ir probando
// test.style.backgroundColor= "Yellow": esto me cambia el color 