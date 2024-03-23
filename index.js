// obtener el canvas, establecer el contenido de este en 2d y rellenarlo de negro para confirmar su posicion

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Creamos una constante para el juygador1 utilizando la clase Sprite, pasandole el parametro de posicion como un objeto con con las coordenadas x,y en pixeles
const jugador1 = new Sprite({
    x: 50,
    y: 100
}, "green");

jugador1.pruebaMostrarPersonaje();

const jugador2 = new Sprite({
    x: canvas.width - 150,
    y: 100
}, "red");

jugador2.pruebaMostrarPersonaje();

function movimiento(){
    // sirve para hacer que el navegador redibuje el contenido 
    window.requestAnimationFrame(movimiento);
    console.log("se esta ejecutando de forma infinita")
}

movimiento();