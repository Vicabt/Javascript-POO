//Defino la clase
class Carro{

    //metodo contructor
    constructor(marca, modelo, año, color, tipo) {
        this.marca = marca  //propiedades 
        this.modelo = modelo
        this.año = año
        this.color = color
        this.tipo = tipo

    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Carro</h3><br> ")
        document.write("Marca : " +this.marca+"<br>")
        document.write("Modelo : " +this.modelo+"<br>")
        document.write("Año : " +this.año+"<br>")
        document.write("Color : " +this.color+"<br>")
        document.write("Tipo : " +this.tipo+"<br>")
        

    }

    //metodo para encender el carro
    encender(){
        document.write(`El Carro ${this.marca} ${this.modelo} Se puede encender...`);
        document.write("<hr>");
    }


}

//Creamos objetos de la clase Celular
let carro1 = new Carro("Toyota", "Corolla", 2020, "Rojo", "Sedán")
let carro2 = new Carro("Ford", "Mustang", 2022, "Azul", "Deportivo")
let carro3 = new Carro("Tesla", "Model 3", 2021, "Blanco", "Eléctrico")

//Mostrar detalles de los objetos
carro1.mostrarDetalles();
carro1.encender();
carro2.mostrarDetalles();
carro2.encender();
carro3.mostrarDetalles();
carro3.encender();

