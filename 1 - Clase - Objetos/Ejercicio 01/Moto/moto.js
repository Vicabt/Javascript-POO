//Defino la clase
class Moto{

    //metodo contructor
    constructor(marca, modelo, cilindrada, tipo, color) {
        this.marca = marca
        this.modelo = color
        this.cilindrada = cilindrada
        this.tipo = tipo
        this.color = color
    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Información de la Moto</h3><br> ")
        document.write("Marca : " +this.marca+"<br>")
        document.write("Modelo : " +this.modelo+"<br>")
        document.write("Cilindrada : " +this.cilindrada+"<br>")
        document.write("Tipo : " +this.tipo+"<br>")
        document.write("Color : " +this.color+"<br>")
        

    }

    //metodo para encender la moto
    encender(){
        document.write(`La Moto ${this.marca} ${this.modelo} Se Esta encendiendo...`);
        document.write("<hr>");
    }


}

//Creamos objetos de la clase Celular
let moto1 = new Moto("Yamaha", "MT-07", 689, "Naked", "Negro")
let moto2 = new Moto("Honda", "CB500F", 471, "Naked", "Rojo")
let moto3 = new Moto("Kawasaki", "Ninja 400", 399, "Deportiva", "Verde")


//Mostrar detalles de los objetos
moto1.mostrarDetalles();
moto1.encender();
moto2.mostrarDetalles();
moto2.encender();
moto3.mostrarDetalles();
moto3.encender();

