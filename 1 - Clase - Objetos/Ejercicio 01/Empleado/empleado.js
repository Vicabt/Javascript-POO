//Defino la clase
class Empleado{

    //metodo contructor
    constructor(nombre, edad, cargo, salario, años_experiencia) {
        this.nombre = nombre
        this.edad = edad
        this.cargo = cargo
        this.salario = salario
        this.años_experiencia = años_experiencia

    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Información del Empleado</h3><br> ")
        document.write("Nombre : " +this.nombre+"<br>")
        document.write("Edad : " +this.edad+"<br>")
        document.write("Cargo : " +this.cargo+"<br>")
        document.write("Salario : " +this.salario+"<br>")
        document.write("Años de Experiencia : " +this.años_experiencia+"<br>")
        

    }

    //metodo para calcular el aumento de salario
    calcularAumento(porcentaje_aumento){
        let aumento = this.salario * (porcentaje_aumento / 100);
        document.write(`${this.nombre} ha recibido un aumento de ${porcentaje_aumento}%. Nuevo Salario: $${this.salario+aumento}`);
    }


}

//Creamos objetos de la clase Celular
let empleado1 = new Empleado("Carlos", 35, "Ingeniero de Software", 50000, 10)
let empleado2 = new Empleado("Ana", 29, "Gerente de Ventas", 45000, 6)
let empleado3 = new Empleado("Luis", 42, "Director de Proyectos", 70000, 15)

//Mostrar detalles de los objetos
empleado1.mostrarDetalles();
empleado1.calcularAumento(5);
empleado2.mostrarDetalles();
empleado2.calcularAumento(10);
empleado3.mostrarDetalles();
empleado3.calcularAumento(15);

