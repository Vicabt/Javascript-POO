// Clase abstracta FormaGeometrica
class FormaGeometrica {
    constructor() {
        if (this.constructor === FormaGeometrica) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
    }

    // Método abstracto
    calcularArea() {
        throw new Error("El método calcularArea() debe ser implementado");
    }
}

// Clase Cuadrado
class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

// Clase Círculo
class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

// Uso de las clases
const cuadrado = new Cuadrado(5);
const circulo = new Circulo(3);

// Mostrar las áreas calculadas en la consola
console.log(`Área del cuadrado: ${cuadrado.calcularArea()}`);
console.log(`Área del círculo: ${circulo.calcularArea()}`);

// Mostrar las áreas calculadas en el HTML
document.getElementById('areaCuadrado').innerText = `Área del cuadrado: ${cuadrado.calcularArea()}`;
document.getElementById('areaCirculo').innerText = `Área del círculo: ${circulo.calcularArea()}`;
