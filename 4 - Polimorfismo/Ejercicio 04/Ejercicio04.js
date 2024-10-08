// Clase base Instrumento
class Instrumento {
    constructor(tipo_de_instrumento, marca, material_de_fabricacion) {
        this.tipo_de_instrumento = tipo_de_instrumento;
        this.marca = marca;
        this.material_de_fabricacion = material_de_fabricacion;
    }

    tocar() {
        // Método vacío para ser sobrescrito por las clases hijas
    }
}

// Clase Guitarra
class Guitarra extends Instrumento {
    constructor(tipo_de_instrumento, marca, material_de_fabricacion) {
        super(tipo_de_instrumento, marca, material_de_fabricacion);
        this.nombre = "Guitarra";
    }

    tocar() {
        return "La Guitarra suena así: Do, Do#, Re, Re#, Mi, Fa, Fa#, Sol, Sol#, La, La#, Si.";
    }

    mostrar_info() {
        document.write("-----------------------------<br>");
        document.write(`INSTRUMENTO REGISTRADO: ${this.nombre}<br>`);
        document.write("-----------------------------<br>");
        document.write(`Tipo de Instrumento:  ${this.tipo_de_instrumento}<br>`);
        document.write(`Marca:  ${this.marca}<br>`);
        document.write(`Material de Fabricación:  ${this.material_de_fabricacion}<br>`);
        document.write("-----------------------------<br><br>");
    }
}

// Clase Piano
class Piano extends Instrumento {
    constructor(tipo_de_instrumento, marca, material_de_fabricacion) {
        super(tipo_de_instrumento, marca, material_de_fabricacion);
        this.nombre = "Piano";
    }

    tocar() {
        return "El Piano suena así: Do, Do#, Re, Re#, Mi, Fa, Fa#, Sol, Sol#, La, La#, Si.";
    }

    mostrar_info() {
        document.write("-----------------------------<br>");
        document.write(`INSTRUMENTO REGISTRADO: ${this.nombre}<br>`);
        document.write("-----------------------------<br>");
        document.write(`Tipo de Instrumento:  ${this.tipo_de_instrumento}<br>`);
        document.write(`Marca:  ${this.marca}<br>`);
        document.write(`Material de Fabricación:  ${this.material_de_fabricacion}<br>`);
        document.write("-----------------------------<br><br>");
    }
}

// Clase Trompeta
class Trompeta extends Instrumento {
    constructor(tipo_de_instrumento, marca, material_de_fabricacion) {
        super(tipo_de_instrumento, marca, material_de_fabricacion);
        this.nombre = "Trompeta";
    }

    tocar() {
        return "La Trompeta suena así: Do, Do#, Re, Re#, Mi, Fa, Fa#, Sol, Sol#, La, La#, Si.";
    }

    mostrar_info() {
        document.write("-----------------------------<br>");
        document.write(`INSTRUMENTO REGISTRADO: ${this.nombre}<br>`);
        document.write("-----------------------------<br>");
        document.write(`Tipo de Instrumento:  ${this.tipo_de_instrumento}<br>`);
        document.write(`Marca:  ${this.marca}<br>`);
        document.write(`Material de Fabricación:  ${this.material_de_fabricacion}<br>`);
        document.write("-----------------------------<br><br>");
    }
}

// Función polimórfica para mostrar información
function mostrar_informacion(instrumento) {
    instrumento.mostrar_info();
}

// Crear objetos
const objeto_guitarra = new Guitarra('Cuerda', 'Yamaha', 'Madera');
const objeto_piano = new Piano('Teclas', 'Yamaha', 'Madera');
const objeto_trompeta = new Trompeta('Viento', 'Mirage', 'Metal');

// Mostrar la información de cada instrumento
mostrar_informacion(objeto_guitarra);
mostrar_informacion(objeto_piano);
mostrar_informacion(objeto_trompeta);
