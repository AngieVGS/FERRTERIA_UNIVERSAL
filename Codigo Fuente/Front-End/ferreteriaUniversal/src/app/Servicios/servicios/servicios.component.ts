import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/Empresa';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(public router: Router) { }
  empresa = new Empresa();

  ngOnInit(): void {
  }

  goToContacto(){
    this.router.navigate(['contacto']);
  }
}
