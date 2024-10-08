// Clase Lirbo con atributos privados y públicos
class Libro {
    // Método constructor
    constructor(titulo, autor, isbn, editorial) {
      this._titulo = titulo;  // privado (convención usando _)
      this._autor = autor;  // privado (convención usando _)
      this._isbn = isbn;  // privado
      this.editorial = editorial;  // público
    }

    // Métodos getter
    obtenerTitulo() {
        return this._titulo;
    }

    obtenerAutor() {
        return this._autor;
    }

    obtenerIsbn() {
        return this._isbn;
    }
    
    // Métodos setter
    establecerTitulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    establecerAutor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    establecerIsbn(nuevoIsbn) {
    this._isbn = nuevoIsbn;
    }

  // Método para mostrar detalles del libro
    mostrarDetalles() {
        document.write(`\nTítulo: ${this._titulo}<br>`);
        document.write(`Autor: ${this._autor}<br>`);
        document.write(`ISBN: ${this._isbn}<br>`);
        document.write(`Editorial: ${this.editorial}<br>`);
    }
}

// Crear objeto Libro
const libro = new Libro("1984", "George Orwell", "978-0451524935", "Penguin");

// Imprimir detalles del libro
libro.mostrarDetalles();

document.write("<hr>");


// Modificar atributos privados mediante setter y mostrar los cambios
libro.establecerTitulo("Animales"); // setter
document.write(`Titulo: ${libro.obtenerTitulo()} <br>`); //
libro.establecerAutor("George Orwell"); // setter
document.write(`Autor : ${libro.obtenerAutor()} <br>`); //
document.write(`ISBN ${libro.obtenerIsbn()} <br>`);
document.write(`Editorial ${libro.editorial} <br>`);
libro.mostrarDetalles();