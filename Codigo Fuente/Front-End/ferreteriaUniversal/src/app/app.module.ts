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
import { ProductosComponent } from './HomePage/productos/productos.component';

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
    ProductosComponent,
    AboutUsComponent
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
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
