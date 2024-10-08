//Defino la clase
class Animal{

    //metodo contructor
    constructor(especie, edad, color, nombre, habitad){
        this.especie = especie  //propiedades 
        this.edad = edad
        this.color = color
        this.nombre = nombre
        this.habitad = habitad

    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Animal</h3><br> ")
        document.write("Especie : " +this.especie+"<br>")
        document.write("Edad : " +this.edad+"<br>")
        document.write("Color : " +this.color+"<br>")
        document.write("Nombre : " +this.nombre+"<br>")
        document.write("Habitad : " +this.habitad+"<br>")
        

    }

    //metodo para que el animal emita un sonido
emitirSonido() {
    //atributo privado solo para el metodo 
    if (this.especie === "Perro") {
        document.write(`${this.especie} esta ladrando : ¡Guau Guau!`);
        } else if (this.especie === "Gato") { 
            document.write(`${this.especie} esta maullando : ¡Miau Miau!`);
        } else {
            document.write(`${this.especie} esta emitiendo un sonido. `);
        }
        document.write("<hr>")
}


}

//Creamos objetos de la clase Celular
let animal1 = new Animal("Perro", 5, "Marrón", "Max", "Casa")
let animal2 = new Animal("Gato", 3, "Blanco", "Nieve", "Departamento")
let animal3 = new Animal("León", 8, "Dorado", "Simba", "Sabana")

//Mostrar detalles de los objetos
animal1.mostrarDetalles();
animal1.emitirSonido();
animal2.mostrarDetalles();
animal2.emitirSonido();
animal3.mostrarDetalles();
animal3.emitirSonido();

