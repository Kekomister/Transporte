import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  @Output() cancelar : EventEmitter<number> = new EventEmitter<number>();

  verificarIngreso(){
    alert("Ingresado!");
    this.router.navigate(['/principal']);
  }

  recuperar(){
    this.cancelar.emit();
  }

  constructor(private router : Router){}
}
