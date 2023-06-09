import { Chofer } from "./chofer";

export class Usuario{

  usuario : string | undefined;
  mail : string | undefined;
  contrasenia : string | undefined;
  chofer : Chofer | undefined;

    constructor(
  usua : string | undefined, mail : string | undefined,
  contra : string | undefined, chofer : Chofer | undefined
    ){
      this.usuario = usua;
      this.mail = mail;
      this.contrasenia = contra;
      this.chofer = chofer;
      }

      
}

