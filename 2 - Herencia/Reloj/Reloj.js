class Reloj {
    constructor(marca, tipoReloj, material) {
        this.marca = marca;
        this.modelo = tipoReloj;
        this.material = material;
        this.precio = parseInt(prompt("Digite el precio del reloj: "));
    }

    registrar() {
        document.write("-----------------------------<br>");
        document.write("RELOJ REGISTRADO<br>");
        document.write("-----------------------------<br>");
        document.write(`Marca:  ${this.marca}<br>`);
        document.write(`Modelo:  ${this.modelo}<br>`);
        document.write(`Material:  ${this.material}<br>`);
        document.write(`Precio:  $${this.precio}<br>`);
        document.write("-----------------------------<br>");
    }

    encender() {
        const encender = parseInt(prompt("¿Desea encender el reloj? \n1. Sí \n2. No\n"));
        if (encender === 1) {
            document.write("-----------------------------<br>");
            document.write("RELOJ REGISTRADO<br>");
            document.write("-----------------------------<br>");
            document.write(`Marca:  ${this.marca}<br>`);
            document.write(`Modelo:  ${this.modelo}<br>`);
            document.write(`Material:  ${this.material}<br>`);
            document.write(`Precio:  $${this.precio}<br>`);
            document.write(`Tipo de Pantalla:  ${this.tipoDePantalla}<br>`);
            document.write(`Sistema Operativo:  ${this.sistemaOperativo}<br>`);
            document.write("-----------------------------<br>");
        } else {
            document.write("No se encenderá el reloj.<br>");
        }
    }
}

class RelojInteligente extends Reloj {
    constructor(marca, tipoReloj, material, tipoDePantalla) {
        super(marca, tipoReloj, material);
        this.tipoDePantalla = tipoDePantalla;
        const sistemaOp = parseInt(prompt("¿Cuál es el Sistema Operativo? \n1. Apple \n2. Android \n"));
        this.sistemaOperativo = sistemaOp === 1 ? "Apple" : "Android";
    }
}

// Instanciando la subclase
const objetoRelojInteligente = new RelojInteligente('Apple', 'Watch', 'Titanio', 'Amoled');
objetoRelojInteligente.registrar(); // Registrando el dispositivo
objetoRelojInteligente.encender(); // Solicita encender el dispositivo