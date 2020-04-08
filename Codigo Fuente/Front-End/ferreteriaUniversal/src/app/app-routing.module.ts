import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhatWeDoComponent } from './HomePage/what-we-do/what-we-do.component';

const routes: Routes = [
  {path: 'app-what-we-do', component: WhatWeDoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
