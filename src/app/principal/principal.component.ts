import { Component, OnInit} from '@angular/core';
import { Chofer } from '../clases/chofer';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  pagina : string = "";
  opciones = ["Por matricula","Parada en ciudad", "Ciudad destino"];
  usuarios : Usuario[] = [];


  crearChofer(){
    this.pagina = "altaChofer";
  }

  listaChofer(){
    this.pagina = "listaChofer";
  }

  buscar() : void{
    this.pagina = "busqueda";
  }

  cancelarChofer(u : Usuario){
    this.usuarios.push(u);
    this.listaChofer();
  }

  ngOnInit() : void{
  
  }

  constructor(){
  }
}
