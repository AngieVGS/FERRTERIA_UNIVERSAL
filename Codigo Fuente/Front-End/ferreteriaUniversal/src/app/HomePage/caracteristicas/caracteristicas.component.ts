import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  constructor(private router: Router) { }

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
