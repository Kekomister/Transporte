import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Chofer } from '../clases/chofer';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  pagina: string = "listaChofer";
  opciones = ["Nombre", "Por matricula", "Parada en ciudad", "Ciudad destino"];
  opcionElegida: string | undefined;
  busqueda: string = "";
  campoABuscar : string = "";
  choferModificar: Chofer | undefined;

  crearChofer() {
    this.pagina = "altaChofer";
  }

  listaChofer() {
    this.pagina = "listaChofer";
  }

  buscar(): void {
    if (this.opcionElegida == this.opciones[0]) {
      this.campoABuscar = this.busqueda;
      this.pagina = "busqueda";
    }
  }

  agregarChofer(u: Usuario) {
    this.users.agregarUsuario(u);
    this.listaChofer();
  }

  logout() {
    this.router.navigate(['inicio']);
  }

  choferModificado(chofer: Chofer) {
    this.choferModificar = chofer;
    this.pagina = "modChofer";
  }

  ngOnInit(): void {

  }

  constructor(private users: UsersService, private router: Router) {
  }
}
