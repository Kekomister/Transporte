import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chofer } from 'src/app/clases/chofer';
import { Usuario } from 'src/app/clases/usuario';
import { ChequeosService } from 'src/app/services/chequeos.service';
import { UsersService } from 'src/app/services/users.service';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-altaChofer',
  templateUrl: './altaChofer.component.html',
  styleUrls: ['./altaChofer.component.css']
})
export class AltaChoferComponent {
  usuarios: Usuario[] = [];
  @Output() agregar: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  date : Date | undefined;

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
      alert("Algo esta vacio");
    }else{
      estaVacio = this.chequeos.verificarNumber(numeros);
      if(estaVacio){
        alert("Dni o Legajo esta vacio");
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
          alert("Registrado!");
          this.usuarioPermitido = u;
          this.volver();
        } else {
          alert("Ya esta registrado ese mail!");
        }
      } else {
        alert("Ya esta registrado ese legajo!");
      }
    } else {
      alert("Las contraseñas no coinciden!");
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

  constructor(private router: Router, private chequeos : ChequeosService, private users : UsersService) { }

  ngOnInit() {
    this.usuarios = this.users.getUsuarios();
  }
}
