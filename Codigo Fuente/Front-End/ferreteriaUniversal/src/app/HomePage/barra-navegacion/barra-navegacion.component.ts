import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToInicio(){
    this.router.navigate(['home']);
  }

  goToProductos(){
    this.router.navigate(['Productos']);
  }

  goToContacto(){
    this.router.navigate(['Contacto']);
  }

  goToQuienesSomos(){
    this.router.navigate(['aboutUs']);
  }
  goToServicios(){
    this.router.navigate(['sevices']);
  }
}
