console.log("Ejecutando JS...");

//-- Crear objeto gui, con los elementos de la interfaz gráfica
//-- Al tenerlo agrupado podemos pasarlo como parámetro o asignárselo
//-- a otro objeto
const gui = {

  //-- Elementos gui del contador 1
  display1: document.getElementById("display1"),
  boton_inc1: document.getElementById("boton_inc1"),
  boton_dec1: document.getElementById("boton_dec1"),

  //-- Elementos gui del contador 2
  display2: document.getElementById("display2"),
  boton_inc2: document.getElementById("boton_inc2"),
  boton_dec2: document.getElementById("boton_dec2"),
}

//-- Constructor del objeto contador
//-- Se le pasa como parametro su display
function counter(display) // paso display como parametro  // en lugar de poner dos contadores individuales, hago una funcion CONSTUCTORES
{ 
  this.valor = 0; // este objeto this tenga la propiedad valor

  //-- Almacenar su display
  this.display = display; // este otro objeto q estoy constuyenfo tenga la propiedad display

  //-- Actualizar el contador
  //-- y mostrarlo en el display
  this.inc = (value) => { // le paso el valor d cuanto quiero q se incremente
    this.valor += value; // se incrementa el valor
    this.display.innerHTML = this.valor; // actualizo el siplay
  }
}

//-- Crear los dos objetos contadores
// con la palabra new creo los contaodres, y le paso el display donde quiero q se visualice 
const c1 = new counter(gui.display1);
const c2 = new counter(gui.display2);

//-------- Accciones:
//-- Contador 1: Incrementar contador
gui.boton_inc1.onclick = () => { // si me aprietan el boton de incremento del 1
  c1.inc(1); // llamo al metodo de incrementar del contaodr 1
}

//-- Decrementar contador
gui.boton_dec1.onclick = () =>{
  c1.inc(-1);
}

//-- Contador 2: Incrementar contador
// solo cambio el objeto a c2
gui.boton_inc2.onclick = () => {
  c2.inc(1);
}

//-- Decrementar contador
gui.boton_dec2.onclick = () =>{
  c2.inc(-1);
}