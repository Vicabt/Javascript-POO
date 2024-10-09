// Clase abstracta TareaEmpleado
class TareaEmpleado {
    constructor(nombre) {
        if (this.constructor === TareaEmpleado) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
        this.nombre = nombre;
    }

    realizarTarea() {
        throw new Error("El método realizarTarea() debe ser implementado");
    }
}

// Clase concreta Ingeniero
class Ingeniero extends TareaEmpleado {
    constructor(nombre, especialidad) {
        super(nombre);
        this.especialidad = especialidad;
    }

    realizarTarea() {
        return `Soy el Ingeniero ${this.nombre}, y estoy trabajando en un proyecto de ${this.especialidad}.`;
    }
}

// Clase concreta Doctor
class Doctor extends TareaEmpleado {
    constructor(nombre, especialidad) {
        super(nombre);
        this.especialidad = especialidad;
    }

    realizarTarea() {
        return `Soy el Doctor ${this.nombre}, y estoy atendiendo a pacientes en la especialidad de ${this.especialidad}.`;
    }
}

// Uso de las clases
const ingeniero = new Ingeniero('Luis Morales', 'software');
const doctor = new Doctor('María Rivera', 'cardiología');

// Mostrar los resultados en el HTML
document.getElementById('tareaIngeniero').innerText = ingeniero.realizarTarea();
document.getElementById('tareaDoctor').innerText = doctor.realizarTarea();
