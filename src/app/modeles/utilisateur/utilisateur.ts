import { Entite } from "../entite";
import { Role } from "../role/role";

export class Utilisateur {
    iduser!:number;
    nom!:String;
    prenom!:String;
    numero!:String;
    email!:String;
  password!: String;
 role!: Role;
  entite!: Entite;
}
