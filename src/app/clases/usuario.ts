import { Chofer } from "./chofer";

export class Usuario{

  usuario : string | undefined;
  mail : string | undefined;
  contrasenia : string | undefined;
  extraContrasenia : string | undefined;
  chofer : Chofer | undefined;

    constructor(
  usua : string | undefined, mail : string | undefined, contra : string | undefined, 
  extraContra : string | undefined, chofer : Chofer | undefined
    ){
        this.usuario = usua;
        this.mail = mail;
        this.contrasenia = contra;
        this.extraContrasenia = extraContra;
        this.chofer = chofer;
    }

}