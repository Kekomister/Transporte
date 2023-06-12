import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chofer } from 'src/app/clases/chofer';
import { Usuario } from 'src/app/clases/usuario';
import { ChequeosService } from 'src/app/services/chequeos.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-altaChofer',
  templateUrl: './altaChofer.component.html',
  styleUrls: ['./altaChofer.component.css']
})
export class AltaChoferComponent {
  usuarios: Usuario[] = [];
  @Output() agregar: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  // datos personales
  dni: number | undefined;
  legajo: number | undefined;
  nombre: string | undefined;
  apellido: string | undefined;
  fechaNac: string | undefined;

  // datos de cuenta

  usuario: string | undefined;
  mail: string | undefined;
  contrasenia: string | undefined;
  extraContrasenia: string | undefined;

  // datos extras
  usuarioPermitido: Usuario | undefined;

  verificarVacios(){
    let estaVacio = false;
    let textos = [this.nombre,this.apellido,this.fechaNac,this.usuario,this.mail,this.contrasenia,this.extraContrasenia]
    let numeros = [this.dni,this.legajo];

    estaVacio = this.chequeos.verificarString(textos);
    if(estaVacio){
      this.msj.error("Error","Algo esta vacio","Entendido");
    }else{
      estaVacio = this.chequeos.verificarNumber(numeros);
      if(estaVacio){
        this.msj.error("Error","Dni o Legajo esta vacio","Entendido");
      }else{
        this.verificarRegistro();
      }
    }
  }

  verificarRegistro() {

    let hayProblema = false;
    let c = new Chofer(this.dni, this.legajo, this.nombre, this.apellido, this.fechaNac);
    let u = new Usuario(this.usuario, this.mail, this.contrasenia, c);
    
    hayProblema = this.verificarContra(u);
    if (!hayProblema) {
      hayProblema = this.verificarChofer(c);
      if (!hayProblema) {
        hayProblema = this.verificarUsuario(u);
        if (!hayProblema) {
          this.msj.success("Registrado!","Genial");
          this.usuarioPermitido = u;
          this.volver();
        } else {
          this.msj.error("Error","Ya esta registrado ese mail o usuario!","Ok");
        }
      } else {
        this.msj.error("Error","Ya esta registrado ese legajo!","Ok");
      }
    } else {
      this.msj.error("Error","Las contraseñas no coinciden!","Ok");
    }
  }

  verificarContra(u: Usuario): boolean {
    let distintas = false;
    if (u.contrasenia != this.extraContrasenia) {
      distintas = true;
    }
    return distintas;
  }

  verificarChofer(c: Chofer): boolean {
    let yaEsta = false;
    for (let i = 0; i < this.usuarios.length && !yaEsta; i++) {
      if (this.usuarios[i].chofer?.legajo == c.legajo) {
        yaEsta = true;
      }
    }
    return yaEsta;
  }

  verificarUsuario(u: Usuario): boolean {
    let yaEsta = false;
    for (let i = 0; i < this.usuarios.length && !yaEsta; i++) {
      if (this.usuarios[i].mail == u.mail || this.usuarios[i].usuario == u.usuario) {
        yaEsta = true;
      }
    }
    return yaEsta;
  }

  volver() {
    this.agregar.emit(this.usuarioPermitido);
  }

  constructor(private chequeos : ChequeosService, private users : UsersService, private msj : MensajesService) { }

  ngOnInit() {
    this.usuarios = this.users.getUsuarios();
  }
}
