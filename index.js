// obtener el canvas, establecer el contenido de este en 2d y rellenarlo de negro para confirmar su posicion

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Creamos una constante para el jugador1 utilizando la clase Sprite, pasandole el parametro de posicion como un objeto con con las coordenadas x,y en pixeles
const jugador1 = new Sprite({
    posicion: {
        x: 50,
        y: 100
    },
    color: "green",
    direccion: {
        x: 0,
        y: 0
    }
});

// jugador1.pruebaMostrarPersonaje();

const jugador2 = new Sprite({
    posicion: {
        x: canvas.width - 150,
        y: 100
    },
    color: "red",
    direccion: {
        x: 0,
        y: 0
    }
});

// jugador2.pruebaMostrarPersonaje();

function movimiento(){
    // sirve para hacer que el navegador redibuje el contenido continuamente al llamar a esta misma funcion
    window.requestAnimationFrame(movimiento);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    jugador1.actualizar();
    jugador2.actualizar();
    
}

movimiento();

window.addEventListener('keydown', (event) => {
    console.log(event.key);
    switch(event.key){
        case "w":
            jugador1.direccion.y = -6;
            break;
        case "s":
            jugador1.direccion.y = 6;
            break;
        case "ArrowUp":
            jugador2.direccion.y = -6;
            break;
        case "ArrowDown":
            jugador2.direccion.y = 6;
            break;
        case "a":
            jugador1.direccion.x = -4;
            break;
        case "d":
            jugador1.direccion.x = 4;
            break;
        case "ArrowLeft":
            jugador2.direccion.x = -4;
            break;
        case "ArrowRight":
            jugador2.direccion.x = 4;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    console.log(event.key);
    switch(event.key){
        case "w":
            jugador1.direccion.y = 0;
            break;
        case "s":
            jugador1.direccion.y = 0;
            break;
        case "ArrowUp":
            jugador2.direccion.y = 0;
            break;
        case "ArrowDown":
            jugador2.direccion.y = 0;
            break;
        case "a":
            jugador1.direccion.x = 0;
            break;
        case "d":
            jugador1.direccion.x = 0;
            break;
        case "ArrowLeft":
            jugador2.direccion.x = 0;
            break;
        case "ArrowRight":
            jugador2.direccion.x = 0;
            break;
    }
});