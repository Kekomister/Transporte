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
  usuarios: Usuario[] = [];
  @Output() choferModificado: EventEmitter<Chofer> = new EventEmitter<Chofer>();

  eliminarChofer(u: Usuario) {
    let lgjo = u.chofer?.legajo;
    this.msj.preguntarBorrado(
      "Estas seguro de borrar el chofer " + lgjo + "?",
      "No hay vuelta atras despues de aceptar",
      "Borrar",
      "Cancelar").then((result) => {
        if (result.isConfirmed) {
          this.msj.success("Chofer " + lgjo + " borrado!", "Ok");
          this.users.borrarUsuario(lgjo);
        } else if (result.isDismissed) {
          this.msj.info("No se borro el chofer " + lgjo, "Ok");
        }
      })
  }

  modificar(chofer: Chofer | undefined) {
    this.choferModificado.emit(chofer);
  }

  ngOnInit() {
    if (this.users.getUsuarios().length == 0) {
      this.users.inicioChoferes();
    }
    this.usuarios = this.users.getUsuarios();
  }

  constructor(private users: UsersService, private msj: MensajesService) { }
}