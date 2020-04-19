import { Categoria } from './Categoria';

export class Producto{
  nombre: string;
  imagen: string;
  sinonimos: string[];
  descripcion: string;
  categoria: Categoria;

  constructor(nombre: string, imagen: string, sinonimos: string[], descripcion: string, categoria: Categoria){
    this.nombre = nombre;
    this.imagen = imagen;
    this.sinonimos = sinonimos;
    this.descripcion = descripcion;
    this.categoria = categoria;
  }


}
