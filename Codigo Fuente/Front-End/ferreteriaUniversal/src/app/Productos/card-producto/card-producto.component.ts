import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  @Input() producto;
  constructor() {
    console.log(this.producto);
  }

  ngOnInit(): void {
  }

}
