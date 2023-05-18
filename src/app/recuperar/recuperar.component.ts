import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  @Output() cancelar : EventEmitter<number> = new EventEmitter<number>();
  
  
  verificarRegistro(){
    alert("Registrado!");
    this.inicio();
  }

  inicio(){
    this.cancelar.emit();
  }

  constructor(private router : Router){}
}
