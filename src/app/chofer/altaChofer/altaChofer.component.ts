import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chofer } from 'src/app/clases/chofer';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-altaChofer',
  templateUrl: './altaChofer.component.html',
  styleUrls: ['./altaChofer.component.css']
})
export class AltaChoferComponent {
  @Input() usuarios : Usuario[] = [];
  @Output() cancelar : EventEmitter<Usuario> = new EventEmitter<Usuario>();
  
 // datos personales
  dni : number | undefined;
  legajo : number | undefined;
  nombre : string | undefined;
  apellido : string | undefined;
  fechaNac : string | undefined;

 // datos de cuenta

  usuario : string | undefined;
  mail : string | undefined;
  contrasenia : string | undefined;
  extraContrasenia : string | undefined;

  usuarioPermitido : Usuario | undefined;
  
  verificarRegistro(){
    let hayProblema = false;
    let c = new Chofer(this.dni, this.legajo,this.nombre,this.apellido,this.fechaNac);
    let u = new Usuario(this.usuario,this.mail,this.contrasenia,this.extraContrasenia,c);

    hayProblema = this.verificarChofer(c);
    if(!hayProblema){
      hayProblema = this.verificarUsuario(u);
      if(!hayProblema){
        alert("Registrado!");
        this.usuarioPermitido = u;
        this.volver();
      }else{
        alert("Ya esta registrado ese mail!");
      }
    }else{
      alert("Ya esta registrado ese legajo!");
    }
  }

  verificarChofer(c : Chofer) : boolean{
    let yaEsta = false;
    for(let i = 0; i < this.usuarios.length && !yaEsta ;i++){
      if(this.usuarios[i].chofer?.legajo == c.legajo){
        yaEsta = true;
      }
    }
    return yaEsta;
  }

  verificarUsuario(u : Usuario) : boolean{
    let yaEsta = false;
    for(let i = 0; i < this.usuarios.length && !yaEsta ;i++){
      if(this.usuarios[i].mail == u.mail){
        yaEsta = true;
      }
    }
    return yaEsta;
  }

  volver(){
    this.cancelar.emit(this.usuarioPermitido);
  }

  constructor(private router : Router){}

  ngOnInit(){
  }
}
