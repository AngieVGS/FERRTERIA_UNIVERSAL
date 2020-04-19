import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/Empresa';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  empresa = new Empresa();
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
