import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { HomePageComponent } from './HomePage/home-page/home-page.component';
import { ContactoComponent } from './Contacto/contacto/contacto.component';
import { SeccionProductosComponent } from './Productos/seccion-productos/seccion-productos.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: 'Productos', component: SeccionProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
