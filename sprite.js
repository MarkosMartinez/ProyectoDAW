// Como va a haber mas de 1 sprite vamos a utilizar clases
class Sprite{

    // Un constructor indica que parametros va a tener un objeto de la clase Sprite
    constructor(posicion, color){
        this.posicion = posicion
        this.color = color
    }

    pruebaMostrarPersonaje(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posicion.x, this.posicion.y, 100, 200);
    }

    mostrarSprite(){

    }
}
