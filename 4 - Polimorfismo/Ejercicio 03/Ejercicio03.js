// Clase base Animal
class Animal {
    descripcion() {
        // Método vacío para ser sobrescrito por las clases hijas
    }
}

// Clase Perro
class Perro extends Animal {
    constructor() {
        super();
        this.nombre = "Perro";
        this.sonido = "Guau";
    }

    mostrar_info() {
        document.write(`Tipo: ${this.nombre}<br>`);
        document.write(`El Perro ladra: ${this.sonido}<br><br>`);
    }
}

// Clase Gato
class Gato extends Animal {
    constructor() {
        super();
        this.nombre = "Gato";
        this.sonido = "Miau";
    }

    mostrar_info() {
        document.write(`Tipo: ${this.nombre}<br>`);
        document.write(`El Gato maulla: ${this.sonido}<br><br>`);
    }
}

// Clase Pajaro
class Pajaro extends Animal {
    constructor() {
        super();
        this.nombre = "Pájaro";
        this.sonido = "Pio Pio Pio";
    }

    mostrar_info() {
        document.write(`Tipo: ${this.nombre}<br>`);
        document.write(`El Pájaro está piando: ${this.sonido}<br><br>`);
    }
}

// Función polimórfica para mostrar información
function mostrar_informacion(animal) {
    animal.mostrar_info();
}

// Crear objetos
const perro = new Perro();
const gato = new Gato();
const pajaro = new Pajaro();

// Mostrar la información de cada objeto
mostrar_informacion(perro);
mostrar_informacion(gato);
mostrar_informacion(pajaro);
