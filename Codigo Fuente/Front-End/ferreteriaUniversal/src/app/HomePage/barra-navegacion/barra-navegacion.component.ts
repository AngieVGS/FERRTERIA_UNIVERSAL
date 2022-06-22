import { Component, OnInit } from '@angular/core';
import * as router_1 from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css'],
})
export class BarraNavegacionComponent implements OnInit {
  constructor(private router: router_1.Router) {
    this.router.events.subscribe(() => {
      document.querySelector('.mat-sidenav-content').scrollTop = 0;
    });
  }

  ngOnInit(): void {}

  goToInicio() {
    this.router.navigate(['home']);
  }

  goToProductos() {
    this.router.navigate(['productos']);
  }

  goToContacto() {
    this.router.navigate(['contacto']);
  }

  goToQuienesSomos() {
    this.router.navigate(['aboutUs']);
  }

  goToBlog() {
    this.router.navigate(['blog']);
  }

  goToServicios() {
    this.router.navigate(['servicios']);
  }

  goToListProducts() {
    this.router.navigate(['productosList']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
