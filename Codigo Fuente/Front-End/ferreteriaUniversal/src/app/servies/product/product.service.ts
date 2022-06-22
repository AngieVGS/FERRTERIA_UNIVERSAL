import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Producto[]>('http://localhost:8080/products/getall');
  }

  saveProduct(product: Producto){
    return this.http.post<Producto[]>(
      'http://localhost:8080/products/product/save',
      product);
  }

  updateProduct(product: Producto){
    return this.http.put<Producto[]>(
      'http://localhost:8080/products/product/update',
      product);
  }

  deleteProduct(product: Producto){
    return this.http.put<Producto[]>(
      'http://localhost:8080/products/product/delete/id/' + product.id,
      product.id);
  }


}
