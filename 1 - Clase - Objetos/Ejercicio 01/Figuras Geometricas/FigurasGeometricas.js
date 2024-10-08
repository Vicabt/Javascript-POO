//Defino la clase
class FiguraGeometrica{

    //metodo contructor
    constructor(tipo, color, base, altura, lado) {
        this.tipo = tipo
        this.color = color
        this.base = base
        this.altura = altura
        this.lado = lado
    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Información de la Figura Geométrica</h3><br> ")
        document.write("Tipo : " +this.tipo+"<br>")
        document.write("Color : " +this.color+"<br>")
        document.write("Base : " +this.base+"<br>")
        document.write("Altura : " +this.altura+"<br>")
        document.write("Lado : " +this.lado+"<br>")
        

    }

    //metodo para calcular el area del triangulo
    calcularAreaTriangulo() {
        if (this.tipo === "triangulo"){
            let area = 0.5 * this.base * this.altura;
            document.write(`El area del triangulo es ${area} cm2`);
        } else {
            document.write(`El tipo de Figura ${this.tipo} no es un triangulo. `);
        }
    }

    //metodo para calcular el area de un cuadrado
    calcularAreaCuadrado() {
        if (this.tipo === "cuadrado") {
            let area = this.lado **2;
            document.write(`El area del cuadrado es ${area} cm2`);
        } else {
            document.write(`El tipo de Figura ${this.tipo} no es un cuadrado. `);
        }
    }


}

//Creamos objetos de la clase Celular
let figura1 = new FiguraGeometrica("triángulo", "rojo", 10, 5, 0)
let figura2 = new FiguraGeometrica("cuadrado", "azul", 0, 0, 4)


//Mostrar detalles de los objetos
figura1.mostrarDetalles();
figura1.calcularAreaTriangulo();
figura2.mostrarDetalles();
figura2.calcularAreaCuadrado();


