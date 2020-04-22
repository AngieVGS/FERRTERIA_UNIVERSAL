import { Component, OnInit, Injectable } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';

@Component({
  selector: 'app-seccion-productos',
  templateUrl: './seccion-productos.component.html',
  styleUrls: ['./seccion-productos.component.css'],
})
export class SeccionProductosComponent implements OnInit {

  categorias: any = [];
  empresa = new Empresa();
  productos: any = [];
  searchText = '';
  categoria = '';

  public searching = false;

  constructor() {
    this.productos = this.empresa.getProductos();
    this.categorias = this.empresa.getCategorias();
  }

  ngOnInit(): void {}

  public showSearchResults(event: any): void {
    this.productos = this.empresa.getProductos();
    this.showSearch();
  }

  public showProductsbyCategory(categoria: string): any {
    this.categoria = categoria;
    console.log(this.categoria);
    this.showSearch();
  }

  public showAllProducts(){
    this.categoria = '';
    this.showSearch();
  }

  public showSearch(): any {
    this.productos = this.empresa.getProductos();
    if (!this.productos) {
      return [];
    }
    if (!this.searchText && !this.categoria) {
      return this.productos;
    }
    const text = this.searchText.toLowerCase();
    const cate = this.removeDiacritics(this.categoria.toLowerCase());
    console.log(text);

    const result = [];
    for (const product of this.productos){
      if ( product.nombre.toLowerCase().indexOf(text) > -1){
        if (this.removeDiacritics(product.categoria) == cate || !cate){
          console.log(product.nombre.toLowerCase());
          result.push(product);
        }
      }else if ( product.categoria.toLowerCase().indexOf(text.toLowerCase()) > -1 && !cate){
        result.push(product);
      }
    }
    this.productos = result;
  }
  public removeDiacritics(input): string {
    var tittles = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
    var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
    for (var i = 0; i < tittles.length; i++) {
        input = input.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
    };
    return input;
  }
}
