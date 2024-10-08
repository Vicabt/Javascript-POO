class Electrodomestico {
    constructor(marca, color, capacidad) {
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
        this.consumoElectrico = parseInt(prompt("Digite el consumo eléctrico en Kwh: "));
    }

    registrar() {
        document.write("-----------------------------<br>");
        document.write("ELECTRODOMESTICO REGISTRADO<br>");
        document.write("-----------------------------<br>");
        document.write(`Marca:  ${this.marca}<br>`);
        document.write(`Color:  ${this.color}<br>`);
        document.write(`Capacidad:  ${this.capacidad}<br>`);
        document.write(`Consumo en Kwh:   ${this.consumoElectrico}<br>`);
        document.write(`Temperatura:  ${this.temperatura}<br>`);
        document.write("-----------------------------<br>");
    }

    detallesActualizados() {
        document.write("-----------------------------<br>");
        document.write("ELECTRODOMESTICO REGISTRADO<br>");
        document.write("-----------------------------<br>");
        document.write(`Marca:  ${this.marca}<br>`);
        document.write(`Color:  ${this.color}<br>`);
        document.write(`Capacidad:  ${this.capacidad}<br>`);
        document.write(`Consumo en Kwh:   ${this.consumoElectrico}<br>`);
        document.write(`Nueva Temperatura:  ${this.nuevaTemperatura}<br>`);
        document.write("-----------------------------<br>");
    }
}

class Refrigerador extends Electrodomestico {
    constructor(marca, color, capacidad, tipoDeRefrigerador) {
        super(marca, color, capacidad);
        this.tipo = parseInt(prompt("¿Qué tipo de refrigerador es?: \n1. Frost \n2. No Frost \n"));
        this.temperatura = parseInt(prompt("Digite la temperatura inicial (en °C): "));
        this.nuevaTemperatura = parseInt(prompt("Digite la nueva temperatura: "));
    }
}

// Instanciando la subclase Refrigerador
const objetoRefrigerador = new Refrigerador('Haceb', 'Gris', '250 Litros', '50');
objetoRefrigerador.registrar(); // Registrando el electrodoméstico
objetoRefrigerador.detallesActualizados();