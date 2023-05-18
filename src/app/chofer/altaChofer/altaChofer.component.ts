import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altaChofer',
  templateUrl: './altaChofer.component.html',
  styleUrls: ['./altaChofer.component.css']
})
export class AltaChoferComponent {
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
