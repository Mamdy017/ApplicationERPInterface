import { Activite } from "../activite/activite";
import { Statut } from "../statut/statut";

export class Acteur {
  idacteur!: number;
  nom!: string;
  prenom!: string;
  numero!: string;
  // activite!: Activite;
  email!:any;
  statut!: Statut;
}
