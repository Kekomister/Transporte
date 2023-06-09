import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { UsersService } from '../services/users.service';
import { MensajesService } from '../services/mensajes.service';
import { Chofer } from '../clases/chofer';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent {
  usuarios : Usuario[] = [];
  @Output() choferModificado : EventEmitter<Chofer> = new EventEmitter<Chofer>();


eliminarChofer(indice: any){
  this.msj.preguntarBorrado(this.usuarios[indice].chofer?.legajo);
}

modificar(chofer: Chofer | undefined){
  //localStorage.setItem('chofer',JSON.stringify(chofer));
  this.choferModificado.emit(chofer);
  
}

ngOnInit(){
  if(this.users.getUsuarios().length == 0){
    this.users.inicioChoferes();
  }
  this.usuarios = this.users.getUsuarios();
}

constructor(private users : UsersService, private msj : MensajesService){}
}