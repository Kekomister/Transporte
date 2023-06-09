import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { UsersService } from './users.service';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private users : UsersService) { }

  ingreso() {
    Swal.fire({
      title: 'Ingresado correctamente',
      confirmButtonText: 'Genial',
      allowEnterKey: true
    });
  }

  usuarioIncorrecto() {
    Swal.fire({
      title: 'Error!',
      text: 'El usuario o contraseña es erroneo',
      icon: 'error',
      confirmButtonText: 'Entendido',
      allowEnterKey: true
    })
  }

  preguntarBorrado(legajo : number | undefined){
    Swal.fire({
      title: 'Estas seguro de borrar al chofer '+legajo+'?',
      text: "No vas a poder ir para atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'Cancelar',
      allowEnterKey: true,
      timer: 30000,
      timerProgressBar: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Chofer '+legajo+' borrado!', '', 'success')
        this.users.borrarUsuario(legajo);
      } else if (result.isDismissed) {
        Swal.fire('No se borro el chofer '+legajo, '', 'info')
      }
    })
  }


}
