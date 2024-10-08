class Instrumento {
    constructor(tipoDeInstrumento, marca, materialDeFabricacion) {
        this.tipoDeInstrumento = tipoDeInstrumento;
        this.marca = marca;
        this.materialDeFabricacion = materialDeFabricacion;
        this.precio = parseInt(prompt("Digite el precio del instrumento: "));
    }

    registrar() {
        document.write("-----------------------------<br>");
        document.write("INSTRUMENTO REGISTRADO<br>");
        document.write("-----------------------------<br>");
        document.write(`Tipo de Instrumento:  ${this.tipoDeInstrumento}<br>`);
        document.write(`Marca:  ${this.marca}<br>`);
        document.write(`Material de Fabricación:  ${this.materialDeFabricacion}<br>`);
        document.write(`Precio:  $${this.precio}<br>`);
        document.write("-----------------------------<br>");
    }

    tocar() {
        const tocar = parseInt(prompt("¿Desea probar la guitarra con los acordes proporcionados? \n1. Sí \n2. No\n"));
        if (tocar === 1) {
            document.write("-----------------------------<br>");
            document.write("INSTRUMENTO REGISTRADO<br>");
            document.write("-----------------------------<br>");
            document.write(`Tipo de Instrumento:  ${this.tipoDeInstrumento}<br>`);
            document.write(`Marca:  ${this.marca}<br>`);
            document.write(`Material de Fabricación:  ${this.materialDeFabricacion}<br>`);
            document.write(`Número de Cuerdas:  ${this.numeroDeCuerdas}<br>`);
            document.write(`Precio:  $${this.precio}<br>`);
            document.write(`Acordes:  ${this.acordes}<br>`);
            document.write("-----------------------------<br>");
        } else {
            document.write("No se probará el instrumento.<br>");
        }
    }
}

class Guitarra extends Instrumento {
    constructor(tipoDeInstrumento, marca, materialDeFabricacion, numeroDeCuerdas) {
        super(tipoDeInstrumento, marca, materialDeFabricacion);
        this.numeroDeCuerdas = numeroDeCuerdas;
        this.acordes = prompt("Digite unos acordes para probar la guitarra: ");
    }
}

// Instanciando la subclase
const objetoGuitarra = new Guitarra(
    'Cuerda',
    'Tamaha',
    'Madera',
    parseInt(prompt("Digite la cantidad de cuerdas: "))
);
objetoGuitarra.registrar(); // Registrando el instrumento
objetoGuitarra.tocar(); // Solicita probar el instrumento
