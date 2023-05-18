import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  pagina : string = "";

  crearChofer(){
    this.pagina = "altaChofer";
  }

  listaChofer(){
    this.pagina = "listaChofer";
  }

  buscar() : void{
    this.pagina = "busqueda";
  }

  cancelarChofer(c : number){
    this.listaChofer();
  }

  ngOnInit() : void{
  
  }
}
