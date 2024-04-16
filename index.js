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
    },
    posicionLateral:{
        x: 0,
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
    },
    posicionLateral:{
        x: 100,
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
        case "ç":
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

// recibe el objeto de cada jugar al completo poder utilizar sus propiedades
function colisionAtaque({jugadorAtacante, jugadorAtacado}){
    return (jugadorAtacante.ataque.posicion.x + jugadorAtacante.ataque.width >= jugadorAtacado.posicion.x &&
        jugadorAtacante.ataque.posicion.x <= jugadorAtacado.posicion.x + jugadorAtacado.anchura &&
        jugadorAtacante.ataque.posicion.y + jugadorAtacante.ataque.height >= jugadorAtacado.posicion.y &&
        jugadorAtacante.ataque.posicion.y <= jugadorAtacado.posicion.y + jugadorAtacado.altura)
}

function resetearTiempo() {
    tiempo = 3;
}


function tiempoRestante() {
    setTimeout(tiempoRestante, 1000);

    if (tiempo >= 0) {
        document.getElementById("contador").innerHTML = tiempo;
        tiempo--;
    } else if (tiempo < 0){
        alert("Tiempo agotado");
    }
}

resetearTiempo();
tiempoRestante();

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

    if (colisionAtaque({jugadorAtacante: jugador1, jugadorAtacado: jugador2}) && jugador1.atacando) {
        jugador1.atacando = false;
        console.log("ataque jug1");
        jugador2.vida -= 10;
        // document.getElementById("vidaJug2").style.width = jugador2.vida + "%";
        document.getElementById("vidaJug2").style.clipPath = `inset(0% ${100 - jugador2.vida}% 0% 0%)`;
    }

    if (colisionAtaque({jugadorAtacante: jugador2, jugadorAtacado: jugador1}) && jugador2.atacando) {
        jugador2.atacando = false;
        jugador1.vida -= 10;
        // document.getElementById("vidaJug1").style.width = jugador1.vida + "%";
        document.getElementById("vidaJug1").style.clipPath = `inset(0% ${100 - jugador1.vida}% 0% 0%)`;
        console.log("ataque jug2");
    }
}

movimiento();