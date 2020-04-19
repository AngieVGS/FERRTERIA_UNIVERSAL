
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  constructor(private http: HttpClient) {
    this.http = http;
    this.http.get<Producto[]>('./assets/json/productos.json').subscribe(data => {
      this.productos = data;
    });
    console.log(this.productos);
  }
  static http: any;


  productos: any = [];
  cargados = false;

  static getProductos() {
    return this.http.get('./assets/json/productos.json');
  }

}
