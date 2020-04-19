import { Component, OnInit, Injectable } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Empresa } from 'src/app/models/Empresa';
import { Producto } from 'src/app/models/Producto';
import { ServicioProductosService } from 'src/app/Servicios/producto/servicio-productos.service';

@Component({
  selector: 'app-seccion-productos',
  templateUrl: './seccion-productos.component.html',
  styleUrls: ['./seccion-productos.component.css']
})

export class SeccionProductosComponent implements OnInit {

   categorias = Categoria;
   productos: any ;
   constructor() {
     this.productos = Empresa.productos;
  }

  ngOnInit(): void {
  }
}
