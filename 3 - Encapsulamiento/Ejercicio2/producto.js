// Clase Producto con atributos privados y públicos
class Producto {
    // Método constructor
    constructor(nombre, precio, cantidad, categoria) {
      this._nombre = nombre;  // privado (convención usando _)
      this._precio = precio;  // privado (convención usando _)
      this.cantidad = cantidad;  // público
      this.categoria = categoria;  // público
    }
  
    // Métodos getter
    obtenerNombre() {
      return this._nombre;
    }
  
    obtenerPrecio() {
      return this._precio;
    }
  
    // Métodos setter
    establecerNombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    establecerPrecio(nuevoPrecio) {
      this._precio = nuevoPrecio;
    }
  
    // Método para mostrar detalles del producto
    mostrarDetalles() {
      document.write(`\nNombre: ${this._nombre}<br>`);
      document.write(`Precio: ${this._precio}<br>`);
      document.write(`Cantidad: ${this.cantidad}<br>`);
      document.write(`Categoría: ${this.categoria}<br>`);
    }
  }
  
  // Crear objeto Producto
  const producto = new Producto("Laptop", 1000, 5, "Tecnología");
  
  // Imprimir detalles del producto
  producto.mostrarDetalles();
  
  document.write("<hr>");
  
  // Modificar atributos privados mediante setter y mostrar los cambios
  producto.establecerNombre("Tablet"); // setter
  document.write(`Nombres: ${producto.obtenerNombre()} <br>`); //
  producto.establecerPrecio(5000); // setter
  document.write(`Precio : ${producto.obtenerPrecio()} <br>`); //
  document.write(`Cantidad ${producto.cantidad} <br>`);
  document.write(`Categoria ${producto.categoria} <br>`);