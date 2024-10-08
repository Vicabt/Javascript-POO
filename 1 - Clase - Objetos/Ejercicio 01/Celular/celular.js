//Defino la clase
class Celular{

    //metodo contructor
    constructor(marca, modelo, almacenamiento, ram, camara){
        this.marca = marca  //propiedades 
        this.modelo = modelo
        this.almacenamiento = almacenamiento
        this.ram = ram
        this.camara = camara

    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Dispositivo Movil</h3><br> ")
        document.write("Marca : " +this.marca+"<br>")
        document.write("Modelo : " +this.modelo+"<br>")
        document.write("Almacenamiento : " +this.almacenamiento+"<br>")
        document.write("Ram : " +this.ram+"<br>")
        document.write("Camara : " +this.camara+"<br>")
        document.write("<hr>")

    }

    //metodo para encender el celular
encender() {
    //atributo privado solo para el metodo encender
    let energia = parseInt(prompt("Digite el valor de la carga : "));
    //evaluamos si tiene carga el celular
    if (energia > 0) {
        document.write(`El celular :  ${this.modelo}  Se puede encender <br>`);
        document.write(`|||||||||| ${energia}% de carga <br>`);
        document.write("<hr>");
    } else {
        document.write(`El celular :  ${this.modelo}  No se puede encender <br>`);
        document.write(`|||||||||| ${energia}% de carga <br>`);
        document.write("<hr>");
    }
}


}

//Creamos objetos de la clase Celular
let celular1 = new Celular("Xiaomi", "Redmi Note 13", "256 GB", "8 GB", "108 MP");
let celular2 = new Celular("Apple", "iPhone 8 Plus", "256 GB", "3 GB", "12mpx");
let celular3 = new Celular("Apple", "iPhone X", "64 GB", "3 GB", "12mpx");

//Mostrar detalles de los objetos
celular1.mostrarDetalles();
celular1.encender();
celular2.mostrarDetalles();
celular2.encender();
celular3.mostrarDetalles();
celular3.encender();

