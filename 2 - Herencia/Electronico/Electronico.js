class Electronico {
    constructor(marca, modelo, tipoDeProcesador) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipoDeProcesador = tipoDeProcesador;
        this.ram = parseInt(prompt("Digite la cantidad de RAM del equipo (en Gigas): "));
    }

    registrar() {
        document.write("-----------------------------<br>");
        document.write("DISPOSITIVO REGISTRADO<br>");
        document.write("-----------------------------<br>");
        document.write(`Marca:  ${this.marca}<br>`);
        document.write(`Modelo:  ${this.modelo}<br>`);
        document.write(`Tipo de Procesador:  ${this.tipoDeProcesador}<br>`);
        document.write(`RAM:  ${this.ram} Gigas<br>`);
        document.write("-----------------------------<br>");
    }

    encender() {
        const encender = parseInt(prompt("¿Desea encender la Laptop? \n1. Sí \n2. No\n"));
        if (encender === 1) {
            document.write("-----------------------------<br>");
            document.write("DISPOSITIVO ENCENDIDO<br>");
            document.write("-----------------------------<br>");
            document.write(`Marca:  ${this.marca}<br>`);
            document.write(`Modelo:  ${this.modelo}<br>`);
            document.write(`Tipo de Procesador:  ${this.tipoDeProcesador}<br>`);
            document.write(`RAM:  ${this.ram} Gigas<br>`);
            document.write(`Tipo de Disco Duro:  ${this.tipoDeDiscoDuro}<br>`);
            document.write(`Duración de la Batería:  ${this.duracionBateria} Horas<br>`);
            document.write("-----------------------------<br>");
        } else {
            document.write("No se encenderá la Laptop.<br>");
        }
    }
}

class Laptop extends Electronico {
    constructor(marca, modelo, tipoDeProcesador, tipoDeDiscoDuro) {
        super(marca, modelo, tipoDeProcesador);
        this.tipoDeDiscoDuro = tipoDeDiscoDuro;
        this.duracionBateria = prompt("Digite la duración de la batería en horas: ");
    }
}

// Instanciando la subclase
const objetoLaptop = new Laptop('HP', 'Laptop', 'Ryzen 9000', 'SSD');
objetoLaptop.registrar(); // Registrando el dispositivo
objetoLaptop.encender(); // Solicita encender el dispositivo