import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  entrar : boolean = false;

  verificarIngreso(){
    this.ingresar();
  }

  ingresar(){
    this.entrar = true;
    alert("Ingresado!");
    this.router.navigate(['/principal']);
  }


  constructor(private router : Router){}

}
