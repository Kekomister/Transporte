import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AltaChoferComponent } from './chofer/altaChofer/altaChofer.component';
import { PrincipalComponent } from './principal/principal.component';
import { InicioComponent } from './inicio/inicio.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ChoferComponent } from './chofer/chofer.component';
import { RutaComponent } from './ruta/ruta.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { AutobusComponent } from './autobus/autobus.component';
import { ModificarChoferComponent } from './chofer/modificar-chofer/modificar-chofer.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaChoferComponent,
    PrincipalComponent,
    InicioComponent,
    BusquedaComponent,
    ChoferComponent,
    RutaComponent,
    CiudadComponent,
    AutobusComponent,
    ModificarChoferComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
