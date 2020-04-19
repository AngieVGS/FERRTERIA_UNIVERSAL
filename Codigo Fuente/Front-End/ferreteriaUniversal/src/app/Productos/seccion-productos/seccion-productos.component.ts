import { Component, OnInit, Injectable } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Empresa } from 'src/app/models/Empresa';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-seccion-productos',
  templateUrl: './seccion-productos.component.html',
  styleUrls: ['./seccion-productos.component.css']
})

export class SeccionProductosComponent implements OnInit {

   categorias = Categoria;
   empresa = new Empresa();
   productos: any = [];

   constructor() {
     this.productos = this.empresa.getProductos();
     console.log(this.productos);
  }

  ngOnInit(): void {
  }
}
