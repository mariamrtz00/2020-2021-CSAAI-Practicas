console.log("Ejecutando JS...");

const botones = document.getElementsByClassName("digito");
// quiero recorrer todos estos botones, utilizo el getElemetnt pasandole el nombre de la clase y me devuelve una coleccion q se mete en la coleccion botones, y esta coleccion la puedo recorrer

for (let boton of botones) { // q la variable boton vaya valiendo cada uno de los botones
    console.log("Boton: " +  boton.value) // en el codigo solo me pone el boton asociado a su boton --> Boton: 1,  Boton: 2
}