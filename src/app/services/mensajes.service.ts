import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private users : UsersService) { }

  success(titulo : string, textoBoton : string) {
    Swal.fire({
      title: titulo,
      confirmButtonText: textoBoton,
      icon : 'success',
      allowEnterKey: true
    });
  }

  error(titulo : string, texto : string, textoBoton : string) {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'error',
      confirmButtonText: textoBoton,
      allowEnterKey: true
    })
  }

  preguntarBorrado(titulo : string, texto : string, textoBotonSi : string, textoBotonNo : string){
    return Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: textoBotonSi,
      cancelButtonText: textoBotonNo,
      allowEnterKey: true,
      timer: 30000,
      timerProgressBar: true,
    })
  }

  info(titulo : string, textoBoton : string){
    Swal.fire({
      title: titulo,
      confirmButtonText: textoBoton,
      icon : 'info',
      allowEnterKey: true
    });
  }

}
