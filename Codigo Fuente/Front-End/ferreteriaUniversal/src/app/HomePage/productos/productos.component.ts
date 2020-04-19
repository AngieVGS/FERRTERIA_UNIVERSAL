import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  categorias = Categoria;
  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line: forin
    for ( const cat in this.categorias){
    console.log('enum member:', Categoria[cat]);
    }
  }

}
