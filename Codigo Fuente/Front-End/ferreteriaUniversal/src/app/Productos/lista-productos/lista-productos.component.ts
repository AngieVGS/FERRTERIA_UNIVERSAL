import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormProductoComponent } from 'src/app/form-producto/form-producto.component';
import { Producto } from 'src/app/models/Producto';
import { ProductService } from 'src/app/servies/product/product.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  listaProductos =new MatTableDataSource<Producto> ();
  displayedColumns: string[] = ['nombre', 'valor', 'marca', "categorias", "acciones"];  
  animal: string;
  name: string;
  
  constructor(public dialog: MatDialog,
    private productsService: ProductService) {
      this.loadProducts();
    }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormProductoComponent, {
      height: '80%',
      width: '90%',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaProductos.filter = filterValue.trim().toLowerCase();
    if (this.listaProductos.paginator) {
      this.listaProductos.paginator.firstPage();
    }
  }

  loadProducts(){
    this.productsService.getAllProducts().subscribe(
      result=>{
        this.listaProductos = new MatTableDataSource<Producto> (result);
        this.listaProductos.paginator = this.paginator;
        this.listaProductos.sort = this.sort;
      }
    );
  }
}

export interface DialogData {
  animal: string;
  name: string;
}