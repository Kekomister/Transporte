import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { UsersService } from '../services/users.service';
import { Chofer } from '../clases/chofer';
import { MensajesService } from '../services/mensajes.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  usuarios: Usuario[] = [];
  usuariosElegidos: Usuario[] = [];
  @Input() aBuscar: string = "";
  @Output() choferModificado: EventEmitter<Chofer> = new EventEmitter<Chofer>();

  constructor(private users: UsersService, private msj: MensajesService) { }

  ngOnInit() {
    if (this.users.getUsuarios().length == 0) {
      this.users.inicioChoferes();
    }
    this.usuarios = this.users.getUsuarios();
    this.buscar();
  }

  buscar() {
    this.usuariosElegidos = [];
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].chofer?.nombre?.includes(this.aBuscar)) {
        this.usuariosElegidos.push(this.usuarios[i]);
      }
    }
  }

  eliminarChofer(indice: any) {
    // this.msj.preguntarBorrado(this.usuariosElegidos[indice].chofer?.legajo);
    this.users.borrarUsuario(this.usuariosElegidos[indice].chofer?.legajo);
    // setTimeout(() => {
    //   this.buscar();
    // }, 30000);
    this.buscar();
  }

  modificar(chofer: Chofer | undefined) {
    //localStorage.setItem('chofer',JSON.stringify(chofer));
    this.choferModificado.emit(chofer);
  }

}
