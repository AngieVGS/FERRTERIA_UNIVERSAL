import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormProductoComponent } from '../form-producto/form-producto.component';
import { Producto } from '../models/Producto';
import { ProductService } from '../servies/product/product.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  listaEjercicios = new MatTableDataSource<Ejercicio> (ELEMENT_DATA);
  productList: Producto[] =[];
  displayedColumns: string[] = ['nombre', 'valor', 'marca', "categorias", "acciones"];  
  animal: string;
  name: string;
  
  constructor(public dialog: MatDialog,
    private productsService: ProductService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormProductoComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit(): void {
    this.listaEjercicios.paginator = this.paginator;
    this.listaEjercicios.sort = this.sort;
    this.loadProducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaEjercicios.filter = filterValue.trim().toLowerCase();
    if (this.listaEjercicios.paginator) {
      this.listaEjercicios.paginator.firstPage();
    }
  }

  loadProducts(){
    this.productsService.getAllProducts().subscribe(
      result=>{
        this.productList = result;
        console.log(result);
      }
    );
  }
}

export interface Ejercicio {
  id: number;
  nombre: string;
}

const ELEMENT_DATA: Ejercicio[] = [
  {id: 1, nombre: 'Hydrogen'},
  {id: 2, nombre: 'Helium'},
  {id: 3, nombre: 'Lithium'},
  {id: 4, nombre: 'Beryllium'},
  {id: 5, nombre: 'Boron'},
  {id: 6, nombre: 'Carbon'},
  {id: 7, nombre: 'Nitrogen'},
  {id: 8, nombre: 'Oxygen'},
  {id: 9, nombre: 'Fluorine'},
  {id: 10, nombre: 'Neon'}
];

export interface DialogData {
  animal: string;
  name: string;
}