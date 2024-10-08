class Dispositivo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.capacidadBateria = parseInt(prompt("Digite la capacidad de la batería en Mah: "));
    }

    registrar() {
        document.write("-----------------------------<br>");
        document.write("DISPOSITIVO REGISTRADO<br>");
        document.write("-----------------------------<br>");
        document.write(`Marca:  ${this.marca}<br>`);
        document.write(`Modelo:  ${this.modelo}<br>`);
        document.write(`Año:  ${this.año}<br>`);
        document.write(`Capacidad de la Batería:  ${this.capacidadBateria} Mah<br>`);
        document.write(`Sistema Operativo:  ${this.sistemaOperativo}<br>`);
        document.write(`Tipo de Red:  ${this.conectividad || 'No Definido'}<br>`);
        document.write("-----------------------------<br>");
    }
}

class Smartphone extends Dispositivo {
    constructor(marca, modelo, año, capacidadBateria, sistemaOperativo) {
        super(marca, modelo, año);
        this.sistemaOperativo = sistemaOperativo;
        this.conectividad = parseInt(prompt("Digite la Red en la que se conectará (1 para 4G, 2 para 5G): "));
    }

    registrar() {
        super.registrar();
        let red;
        if (this.conectividad === 1) {
            red = "4G";
        } else if (this.conectividad === 2) {
            red = "5G";
        } else {
            red = "Desconocida";
        }
        document.write(`Red: ${red}<br>`);
    }

    encender() {
        const respuesta = prompt("¿Desea encender el dispositivo? (s/n): ");
        if (respuesta.toLowerCase() === 's') {
            document.write("El dispositivo está encendido.<br>");
        } else {
            document.write("El dispositivo no se encenderá.<br>");
        }
    }
}

// Instanciando la subclase Smartphone
const objetoSmartphone = new Smartphone('Iphone', 'XS', '2024', '2000 Mah', 'iOS');
objetoSmartphone.registrar(); // Registrando el dispositivo
objetoSmartphone.encender(); // Solicita encender el dispositivo