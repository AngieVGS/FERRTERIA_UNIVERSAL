import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goToQuienesSomos(){
    this.router.navigate(['aboutUs']);
  }

  goToServicios(){
    this.router.navigate(['servicios']);
  }
}
