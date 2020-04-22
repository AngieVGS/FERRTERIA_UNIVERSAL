export class Producto{
  nombre: string;
  imagen: string;
  sinonimos: string[];
  descripcion: string;

  constructor(nombre: string, imagen: string, sinonimos: string[], descripcion: string){
    this.nombre = nombre;
    this.imagen = imagen;
    this.sinonimos = sinonimos;
    this.descripcion = descripcion;
  }


}
