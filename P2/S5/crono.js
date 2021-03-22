//-- Clase cronómetro
class Crono {

    //-- Constructor. Hay que indicar el 
    //-- display donde mostrar el cronómetro
    constructor(display) { // paso el display como un parámetro de manera que yo lo pueda mostrar en cualquier display, no solo en 1
        this.display = display; //sitio donde mostrar la info

        //-- Tiempo 
        //lo que quiero que tenga lo meto en el contructor:
        this.cent = 0, //-- Centésimas
        this.seg = 0,  //-- Segundos
        this.min = 0,  //-- Minutos
        this.timer = 0;  //-- Temporizador asociado
    }

    //-- Metodo que se ejecuta cada centésima
    tic() { // se llama, se ejecuta cada 10ms
        //-- Incrementar en una centesima
        this.cent += 1; 

        //-- 100 centésimas hacen 1 segundo
        if (this.cent == 100) { // cuando lleguemos a 100 centesimas, se suma un seg y las centesimas las ponemos a 0
        this.seg += 1;
        this.cent = 0;
        }

        //-- 60 segundos hacen un minuto
        if (this.seg == 60) {
        this.min = 1;
        this.seg = 0;
        }

        //-- Mostrar el valor actual
        this.display.innerHTML = this.min + ":" + this.seg + ":" + this.cent // lo que me muestra en el cronometro
    }

    //-- Arrancar el cronómetro
    start() {
        // si ya está lanzado el temporizador, no quiero que se vuelva a lanzar otro
       if (!this.timer) { // si no estaba funcionando
          //-- Lanzar el temporizador para que llame 
          //-- al método tic cada 10ms (una centésima)
          this.timer = setInterval( () => { // lanza el temporizador
              this.tic();
          }, 10);
        }
    }

    //-- Parar el cronómetro
    stop() {
        if (this.timer) { // si está funcionando el temporizador
            clearInterval(this.timer); // lo eliminas
            this.timer = null; // si no lo había no hagas nada
        }
    }

    //-- Reset del cronómetro
    reset() {
        this.cent = 0; // cuando doy al reset se llama a esta funcion y todo se pone a 0
        this.seg = 0;
        this.min = 0;

        this.display.innerHTML = "0:0:0"; // en el display se pone todo a 0
    }
}