import { Descripcion } from "./descripcion";

export class Producto{
  id: string;
  nombre: string;
  descripcion: Descripcion;
  valorUnitario:number;
  unidadMedida: string;
  iva: string;
  imagen: string;
  categorias: string[];
}