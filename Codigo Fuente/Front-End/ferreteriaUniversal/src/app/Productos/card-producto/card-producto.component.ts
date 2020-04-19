import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  categoria: Categoria;
  @Input() producto: Producto;
  constructor() {
  }

  ngOnInit(): void {

  }

}
