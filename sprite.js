const gravedad = 0.2;

// Como va a haber mas de 1 sprite vamos a utilizar clases
class Sprite{

    // Un constructor indica que parametros va a tener un objeto de la clase Sprite
    constructor({posicion, color, direccion}){
        this.posicion = posicion
        this.color = color
        this.direccion = direccion
        this.altura = 200
    }

    pruebaMostrarPersonaje(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posicion.x, this.posicion.y, 100, this.altura);
    }

    mostrarSprite(){

    }

    actualizar(){
        this.pruebaMostrarPersonaje();
        
        this.posicion.y += this.direccion.y;

        // si la posicion del jugador1 es mayor o igual a la altura del canvas - 50 se queda a 50 pixeles del borde inferior, sino, se aplica la gravedad a la
        // direccion "y", haciendo que los jugadores caigan hasta que se cumple la condicion antes mencionada
        if(this.posicion.y + this.altura >= canvas.height -50){
            this.posicion.y = canvas.height - (this.altura + 50); 
            this.direccion.y = 0;
        } else {
            this.direccion.y += gravedad;
        }
    }
}
