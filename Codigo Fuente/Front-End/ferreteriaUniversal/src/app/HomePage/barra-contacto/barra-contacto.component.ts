import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';

@Component({
  selector: 'app-barra-contacto',
  templateUrl: './barra-contacto.component.html',
  styleUrls: ['./barra-contacto.component.css']
})
export class BarraContactoComponent implements OnInit {

  empresa = new Empresa();

  constructor() { }

  ngOnInit(): void {
  }

}
