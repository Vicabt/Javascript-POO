// Clase base Vehiculo
class Vehiculo {
    descripcion() {
        // Método vacío para ser sobrescrito por las clases hijas
    }
}

// Clase Carro
class Carro extends Vehiculo {
    constructor() {
        super();
        this.nombre = "Carro";
        this.descripcion_vehiculo = "Vehículo de 4 ruedas.";
    }

    mostrar_info() {
        document.write(`Tipo: ${this.nombre}<br>`);
        document.write(`Descripción: ${this.descripcion_vehiculo}<br><br>`);
    }
}

// Clase Moto
class Moto extends Vehiculo {
    constructor() {
        super();
        this.nombre = "Moto";
        this.descripcion_vehiculo = "Vehículo de 2 ruedas.";
    }

    mostrar_info() {
        document.write(`Tipo: ${this.nombre}<br>`);
        document.write(`Descripción: ${this.descripcion_vehiculo}<br><br>`);
    }
}

// Clase Bicicleta
class Bicicleta extends Vehiculo {
    constructor() {
        super();
        this.nombre = "Bicicleta";
        this.descripcion_vehiculo = "Vehículo movido por el esfuerzo humano.";
    }

    mostrar_info() {
        document.write(`Tipo: ${this.nombre}<br>`);
        document.write(`Descripción: ${this.descripcion_vehiculo}<br><br>`);
    }
}

// Función polimórfica para mostrar información
function mostrar_informacion(vehiculo) {
    vehiculo.mostrar_info();
}

// Crear objetos
const carro = new Carro();
const moto = new Moto();
const bicicleta = new Bicicleta();

// Mostrar la información de cada vehículo
mostrar_informacion(carro);
mostrar_informacion(moto);
mostrar_informacion(bicicleta);
