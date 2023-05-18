import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  flag : number = 0;

  ingresar(i : number){
		this.flag = 0;
  }
  recuperar(r : number){
		this.flag = 1;
	}

  constructor(private router : Router){}

}
