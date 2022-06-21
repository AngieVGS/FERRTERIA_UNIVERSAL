import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';



// Modulos Creados

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

// Componenetes creados
import { BarraNavegacionComponent } from './HomePage/barra-navegacion/barra-navegacion.component';
import { BarraContactoComponent } from './HomePage/barra-contacto/barra-contacto.component';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { HomePageComponent } from './HomePage/home-page/home-page.component';
import { CaracteristicasComponent } from './HomePage/caracteristicas/caracteristicas.component';
import { WhatWeDoComponent } from './HomePage/what-we-do/what-we-do.component';
import { BuzonContactoComponent } from './HomePage/buzon-contacto/buzon-contacto.component';
import { FooterComponent } from './HomePage/footer/footer.component';
import { TestimoniosComponent } from './HomePage/testimonios/testimonios.component';
import { ContactoComponent } from './Contacto/contacto/contacto.component';
import { ServiciosComponent } from './Servicios/servicios/servicios.component';
import { SeccionProductosComponent } from './Productos/seccion-productos/seccion-productos.component';
import { CardProductoComponent } from './Productos/card-producto/card-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './HomePage/blog/blog.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    BarraContactoComponent,
    HomePageComponent,
    CaracteristicasComponent,
    WhatWeDoComponent,
    BuzonContactoComponent,
    FooterComponent,
    TestimoniosComponent,
    AboutUsComponent,
    ContactoComponent,
    ServiciosComponent,
    SeccionProductosComponent,
    CardProductoComponent,
    BlogComponent,
    FormProductoComponent,
    ListaProductosComponent,
    LoginComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
