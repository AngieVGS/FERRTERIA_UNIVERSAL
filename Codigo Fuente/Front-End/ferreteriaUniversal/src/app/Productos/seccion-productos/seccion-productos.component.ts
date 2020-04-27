import { Component, OnInit, Injectable, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';
import { MatTableDataSource } from '@angular/material/table';
import { CardProductoComponent } from '../card-producto/card-producto.component';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/Producto';

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
  dataSource: MatTableDataSource<Producto>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.productos = this.empresa.getProductos();
    this.categorias = this.empresa.getCategorias();
    this.dataSource = new MatTableDataSource<Producto>(this.productos);
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public showProductsbyCategory(categoria: string): any {
    this.categoria = this.removeDiacritics(categoria);
    this.dataSource.filter = categoria;
    const result = [];
    for (const product of this.productos){
      if (this.removeDiacritics(product.categoria) == this.categoria || this.categoria == 'todos'){
        console.log(product.nombre.toLowerCase());
        result.push(product);
      }
    }
    this.dataSource = new MatTableDataSource<Producto>(result);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  public showAll(): any {
    this.dataSource.data = this.empresa.getProductos();
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
