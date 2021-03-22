console.log("Ejecutando JS...");

//-- Crear objeto gui, con los elementos de la interfaz gráfica
//-- Al tenerlo agrupado podemos pasarlo como parámetro o asignárselo
//-- a otro objeto
const gui = { //gui es la interfaz gráfica, estos dos elementos se agrupan en la gui
  display: document.getElementById("display"), // su valor es lo q me devuelva esta funcion
  boton: document.getElementById("boton"),
}

//-- Objeto contador: Contiene el valor y el método para incrementarse
const counter = { //mi contador tiene un valor que se inicia en 0
  valor: 0,
  inc : function(value) { // una propiedad inc, q es una funcion, quiero que se incremente
    this.valor += value; // se incrementa tantas unidades como yo le pase en la línea anterior
    // actualiza el valor 'valor'
    gui.display.innerHTML = this.valor; // me la actualiza en el display de la interfaz grafica (gui) 
  }
}

//-- Acciones: Ligar el boton al contador
gui.boton.onclick = () => { //cuando alguien aprete
  counter.inc(1) // me lo asocia a este método inc del objeto contador
  // tiene un 1, me aumenta de 1 en 1
  // si pongo un2, me incrementa de 2 en 2