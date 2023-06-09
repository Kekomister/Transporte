import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChequeosService {

  verificarString(s : (string | undefined)[]) : boolean{
    let estaVacio = false;
    for(let i = 0; i < s.length && !estaVacio; i++){
      if(s[i]?.length == 0 || s[i] == undefined){
        estaVacio = true;
      }else{
        let t = s[i]?.replace(/\s/g, "");
        if(t?.length == 0 || t == undefined){
          estaVacio = true;
        }
      }
    }
    return estaVacio;
  }

  verificarNumber(n : (number | undefined)[]) : boolean{
    let estaVacio = false;
    for(let i = 0; i < n.length && !estaVacio; i++){
      if(n[i] == 0 || n[i] == undefined){
        estaVacio = true;
      }
    }
    return estaVacio;
  }

  constructor() { }
}
