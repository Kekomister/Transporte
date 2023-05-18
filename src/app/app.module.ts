import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaChoferComponent } from './chofer/altaChofer/altaChofer.component';
import { LogInComponent } from './log-in/log-in.component';
import { PrincipalComponent } from './principal/principal.component';
import { InicioComponent } from './inicio/inicio.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ChoferComponent } from './chofer/chofer.component';
import { RutaComponent } from './ruta/ruta.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { AutobusComponent } from './autobus/autobus.component';
import { RecuperarComponent } from './recuperar/recuperar.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaChoferComponent,
    LogInComponent,
    PrincipalComponent,
    InicioComponent,
    BusquedaComponent,
    ChoferComponent,
    RutaComponent,
    CiudadComponent,
    AutobusComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
