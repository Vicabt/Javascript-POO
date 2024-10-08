// Clase base Profesion
class Profesion {
    constructor(nombre, especialidad, experiencia) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.experiencia = experiencia;
    }

    trabajar() {
        // Método vacío para ser sobrescrito por las clases hijas
    }
}

// Clase Medico
class Medico extends Profesion {
    constructor(nombre, especialidad, experiencia) {
        super(nombre, especialidad, experiencia);
    }

    trabajar() {
        return `Soy ${this.nombre}, un médico especializado en ${this.especialidad} con ${this.experiencia} años de experiencia.`;
    }
}

// Clase Ingeniero
class Ingeniero extends Profesion {
    constructor(nombre, especialidad, experiencia) {
        super(nombre, especialidad, experiencia);
    }

    trabajar() {
        return `Soy ${this.nombre}, un Ingeniero especializado en ${this.especialidad} con ${this.experiencia} años de experiencia.`;
    }
}

// Clase Docente
class Docente extends Profesion {
    constructor(nombre, especialidad, experiencia) {
        super(nombre, especialidad, experiencia);
    }

    trabajar() {
        return `Soy ${this.nombre}, un Docente especializado en ${this.especialidad} con ${this.experiencia} años de experiencia.`;
    }
}

// Función polimórfica para mostrar información
function describir_trabajo(profesion) {
    document.write(profesion.trabajar() + "<br>");
}

// Crear objetos
const objeto_medico = new Medico('Javier Ortiz', 'Medicina Interna', 15);
const objeto_ingeniero = new Ingeniero('Victor Cabas', 'Sistemas', 5);
const objeto_docente = new Docente('Vanessa Cabas', 'Idiomas', 2);

// Mostrar la información de cada profesional
describir_trabajo(objeto_medico);
describir_trabajo(objeto_ingeniero);
describir_trabajo(objeto_docente);
