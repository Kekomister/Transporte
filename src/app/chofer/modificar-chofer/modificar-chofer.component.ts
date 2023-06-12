import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Chofer } from 'src/app/clases/chofer';
import { Usuario } from 'src/app/clases/usuario';
import { ChequeosService } from 'src/app/services/chequeos.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modificar-chofer',
  templateUrl: './modificar-chofer.component.html',
  styleUrls: ['./modificar-chofer.component.css']
})
export class ModificarChoferComponent implements OnInit {
  usuarios: Usuario[] = [];
  @Input() chofer: Chofer | undefined;
  @Output() agregar: EventEmitter<any> = new EventEmitter<Usuario>();

  // datos personales
  dni: number | undefined;
  legajo: number | undefined;
  nombre: string | undefined;
  apellido: string | undefined;
  fechaNac: string | undefined;

  // datos extras
  usuarioPermitido: Usuario | undefined;

  verificarVacios() {
    let estaVacio = false;
    let textos = [this.nombre, this.apellido, this.fechaNac];
    let numeros = [this.dni, this.legajo];
    estaVacio = this.chequeos.verificarString(textos);
    if (estaVacio) {
      this.msj.error("Error","Algo esta vacio","Entendido");
    } else {
      estaVacio = this.chequeos.verificarNumber(numeros);
      if (estaVacio) {
        this.msj.error("Error","Dni esta vacio","Entendido");
      } else {
        this.verificarRegistro();
      }
    }
  }

  verificarRegistro() {
    let chofer: Chofer = new Chofer(this.dni, this.legajo, this.nombre, this.apellido, this.fechaNac);
    this.chofer = chofer;
    this.users.modificarChofer(this.chofer);
    this.msj.success("Modificado!","Genial");
    this.volver();
  }

  volver() {
    this.agregar.emit("asdsad");
  }

  constructor(private msj : MensajesService, private chequeos: ChequeosService, private users: UsersService) { }

  ngOnInit(): void {
    this.dni = this.chofer?.dni;
    this.apellido = this.chofer?.apellido;
    this.nombre = this.chofer?.nombre;
    this.legajo = this.chofer?.legajo;
    this.fechaNac = this.chofer?.fechaNac;
  }

}
