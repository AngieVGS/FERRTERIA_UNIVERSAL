import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  empresa = new Empresa();
  constructor() { }

  ngOnInit(): void {
  }

}
