import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  
  entrar : boolean = false;
  usuario : string | undefined;
  contrasenia : string | undefined;


  verificarIngreso(){
    if(this.users.getMasterUser() == this.usuario && this.users.getMasterContra() == this.contrasenia){
      this.ingresar();
    }else{
      let usuarios = this.users.getUsuarios();
      for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].usuario == this.usuario && usuarios[i].contrasenia == this.contrasenia){
          this.ingresar();
        }
      }
    }
    if(!this.entrar){
      this.msj.usuarioIncorrecto();
    }
  }

  ingresar(){
    this.msj.ingreso();
    this.entrar = true;
    this.router.navigate(['/principal']);
  }

  constructor(private router : Router, private users : UsersService, private msj : MensajesService){}

ngOnInit(){
  this.users.inicioChoferes();
}

}
