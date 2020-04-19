import { Component, OnInit } from '@angular/core';
import * as router_1 from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(private router: router_1.Router) { }

  ngOnInit(): void {
  }

  goToInicio(){
    this.router.navigate(['home']);
  }

  goToProductos(){
    this.router.navigate(['productos']);
  }

  goToContacto(){
    this.router.navigate(['contacto']);
  }

  goToQuienesSomos(){
    this.router.navigate(['aboutUs']);
  }
  goToServicios(){
    this.router.navigate(['servicios']);
  }
}
