import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { HomePageComponent } from './HomePage/home-page/home-page.component';
import { ContactoComponent } from './Contacto/contacto/contacto.component';
import { ServiciosComponent } from './Servicios/servicios/servicios.component';
import { SeccionProductosComponent } from './Productos/seccion-productos/seccion-productos.component';
import { BlogComponent } from './HomePage/blog/blog.component';
import { Producto } from './models/Producto';
import { ListaProductosComponent } from './Productos/lista-productos/lista-productos.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'productos', component: SeccionProductosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'productosList', component: ListaProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
