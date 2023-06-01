import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { InicioComponent } from './inicio/inicio.component';
import { ChoferComponent } from './chofer/chofer.component';

const routes: Routes = [
  {path : 'inicio', component : InicioComponent},
  {path : 'principal', component : PrincipalComponent},
  {path : 'chofer', component : ChoferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
