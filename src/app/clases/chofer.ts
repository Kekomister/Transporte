export class Chofer{

  dni : number | undefined;
  legajo : number | undefined;
  nombre : string | undefined;
  apellido : string | undefined;
  fechaNac : string | undefined;

    constructor(
  dni : number | undefined, lgjo : number | undefined, nom : string | undefined, 
  apdo : string | undefined, fecNac : string | undefined
    ){
        this.dni = dni;
        this.legajo = lgjo;
        this.nombre = nom;
        this.apellido = apdo;
        this.fechaNac = fecNac;
    }

}