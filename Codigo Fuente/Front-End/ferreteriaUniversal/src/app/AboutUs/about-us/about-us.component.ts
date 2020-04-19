import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  empresa  = new Empresa();
  constructor() { }

  ngOnInit(): void {
  }

}
