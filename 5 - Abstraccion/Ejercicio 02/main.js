// Clase abstracta Empleado
class Empleado {
    constructor(nombre) {
        if (this.constructor === Empleado) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
        this.nombre = nombre;
    }

    calcularSalario() {
        throw new Error("El método calcularSalario() debe ser implementado");
    }
}

// Clase concreta Empleado a tiempo completo
class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, salarioMensual) {
        super(nombre);
        this.salarioMensual = salarioMensual;
    }

    calcularSalario() {
        return `El salario mensual de ${this.nombre} es: ${this.salarioMensual} USD.`;
    }
}

// Clase concreta Empleado por horas
class EmpleadoPorHoras extends Empleado {
    constructor(nombre, horasTrabajadas, pagoPorHora) {
        super(nombre);
        this.horasTrabajadas = horasTrabajadas;
        this.pagoPorHora = pagoPorHora;
    }

    calcularSalario() {
        const salario = this.horasTrabajadas * this.pagoPorHora;
        return `El salario de ${this.nombre} por ${this.horasTrabajadas} horas trabajadas es: ${salario} USD.`;
    }
}

// Uso de las clases
const empleadoTC = new EmpleadoTiempoCompleto('Carlos Pérez', 2000);
const empleadoPH = new EmpleadoPorHoras('Ana Gómez', 120, 15);

// Mostrar los resultados en el HTML
document.getElementById('salarioTiempoCompleto').innerText = empleadoTC.calcularSalario();
document.getElementById('salarioPorHoras').innerText = empleadoPH.calcularSalario();
