const gravedad = 0.2;

// Como va a haber mas de 1 sprite vamos a utilizar clases
class Sprite{

    // Un constructor indica que parametros va a tener un objeto de la clase Sprite
    constructor({posicion, color, direccion}){
        this.posicion = posicion
        this.color = color
        this.direccion = direccion
        this.altura = 200
        this.anchura = 100
    }

    pruebaMostrarPersonaje(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posicion.x, this.posicion.y, this.anchura, this.altura);
    }

    mostrarSprite(){

    }

    actualizar(){
        this.pruebaMostrarPersonaje();
        
        this.posicion.y += this.direccion.y;
        this.posicion.x += this.direccion.x;


        // si la posicion del jugador1 es mayor o igual a la altura del canvas - 50 se queda a 50 pixeles del borde inferior, sino, se aplica la gravedad a la
        // direccion "y", haciendo que los jugadores caigan hasta que se cumple la condicion antes mencionada
        if(this.posicion.y + this.altura >= canvas.height -50){
            this.posicion.y = canvas.height - (this.altura + 50); 
            this.direccion.y = 0;
            // this.direccion.x = 0;
        } else {
            this.direccion.y += gravedad;
        }

        //hacer que los personajes no se salgan de los lados del canvas
        if(this.posicion.x <= 0){
            this.posicion.x = 0;
        } else if(this.posicion.x + this.anchura >= canvas.width){
            this.posicion.x = canvas.width - this.anchura;
        }
    }
}
