import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class BusquedaComponent implements OnChanges, OnInit {
  usuarios: Usuario[] = [];
  usuariosElegidos: Usuario[] = [];
  @Input() aBuscar: string = "";
  @Output() choferModificado: EventEmitter<Chofer> = new EventEmitter<Chofer>();

  constructor(private users: UsersService, private msj: MensajesService) { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.buscar();
  }

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
          this.buscar();
        } else if (result.isDismissed) {
          this.msj.info("No se borro el chofer " + lgjo, "Ok");
        }
      })
  }

  modificar(chofer: Chofer | undefined) {
    this.choferModificado.emit(chofer);
  }

}
