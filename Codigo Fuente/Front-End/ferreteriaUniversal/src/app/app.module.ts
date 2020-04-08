import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// Componenetes creados
import { BarraNavegacionComponent } from './HomePage/barra-navegacion/barra-navegacion.component';
import { BarraContactoComponent } from './HomePage/barra-contacto/barra-contacto.component';
import { HomePageComponent } from './home-page/home-page.component';

// Modulos Creados

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CaracteristicasComponent } from './HomePage/caracteristicas/caracteristicas.component';
import { WhatWeDoComponent } from './HomePage/what-we-do/what-we-do.component';
import { BuzonContactoComponent } from './HomePage/buzon-contacto/buzon-contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    BarraContactoComponent,
    HomePageComponent,
    CaracteristicasComponent,
    WhatWeDoComponent,
    BuzonContactoComponent
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
