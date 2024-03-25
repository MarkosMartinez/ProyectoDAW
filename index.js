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

const teclas = {
    a: {
        presionada: false
    },
    d: {
        presionada: false
    },
    flechaIzquierda: {
        presionada: false
    },
    flechaDerecha: {
        presionada: false
    },
}

function movimiento(){
    // sirve para hacer que el navegador redibuje el contenido continuamente al llamar a esta misma funcion
    window.requestAnimationFrame(movimiento);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Prubas colision entre personajes 
    // if(jugador1.posicion.x + jugador1.anchura >= jugador2.posicion.x && jugador1.posicion.x <= jugador2.posicion.x + jugador2.anchura){
    //     if(jugador1.posicion.y + jugador1.altura >= jugador2.posicion.y && jugador1.posicion.y <= jugador2.posicion.y + jugador2.altura){
    //         jugador1.direccion.x -= 4;
    //         jugador2.direccion.x += 4;
    //     }
    // }

    jugador1.actualizar();
    jugador2.actualizar();
    
    jugador1.direccion.x = 0;
    jugador2.direccion.x = 0;

    if (teclas.a.presionada) {
        jugador1.direccion.x = -4;
    } else if (teclas.d.presionada) {
        jugador1.direccion.x = 4;
    }

    if (teclas.flechaIzquierda.presionada) {
        jugador2.direccion.x = -4;
    } else if (teclas.flechaDerecha.presionada) {
        jugador2.direccion.x = 4;
    }

    // ataques

    // pruebas colision entre ataques de ambos jugadores (no funciona coreectamente)
    // function colisionAtaque(jugadorAtacante, jugadorAtacado) {
    //     return jugadorAtacante.posicion.x + jugadorAtacante.width >= jugadorAtacado.posicion.x &&
    //     jugadorAtacante.posicion.x <= jugadorAtacado.posicion.x + jugadorAtacado.anchura &&
    //     jugadorAtacante.posicion.y + jugadorAtacante.height >= jugadorAtacado.posicion.y &&
    //     jugadorAtacante.posicion.y <= jugadorAtacado.posicion.y + jugadorAtacado.altura &&
    //     jugadorAtacante.atacando == true;
    // }    
    
    // if (colisionAtaque(jugador1.ataque, jugador2)) {
    //     console.log("ataque jug1");
    // }

    // if (colisionAtaque(jugador2.ataque, jugador1)) {
    //     console.log("ataque jug2");
    // }


    function pruebaColi(jugadorAtacante, jugadorAtacado) {
        return jugadorAtacante.posicion.x + jugadorAtacante.width >= jugadorAtacado.posicion.x &&
        jugadorAtacante.posicion.x <= jugadorAtacado.posicion.x + jugadorAtacado.anchura &&
        jugadorAtacante.posicion.y + jugadorAtacante.height >= jugadorAtacado.posicion.y &&
        jugadorAtacante.posicion.y <= jugadorAtacado.posicion.y + jugadorAtacado.altura;
    }

    if (jugador1.atacando && pruebaColi(jugador1.ataque, jugador2)) {
        jugador1.atacando = false;
        console.log("ataque jug1");
    }

    if (jugador2.atacando && pruebaColi(jugador2.ataque, jugador1)) {
        jugador2.atacando = false;
        console.log("ataque jug2");
    }
}

movimiento();

window.addEventListener('keydown', (event) => {
    // console.log(event.key);
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
            teclas.a.presionada = true;
            break;
        case "d":
            teclas.d.presionada = true;
            break;
        case "ArrowLeft":
            teclas.flechaIzquierda.presionada = true;
            break;
        case "ArrowRight":
            teclas.flechaDerecha.presionada = true;
            break;
        case " ":
            jugador1.realizarAtaque();
            break;
        case "Control":
            jugador2.realizarAtaque();
            break;
    }
});

window.addEventListener('keyup', (event) => {
    // console.log(event.key);
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
            teclas.a.presionada = false;
            break;
        case "d":
            teclas.d.presionada = false;
            break;
        case "ArrowLeft":
            teclas.flechaIzquierda.presionada = false;
            break;
        case "ArrowRight":
            teclas.flechaDerecha.presionada = false;
            break;
    }
});