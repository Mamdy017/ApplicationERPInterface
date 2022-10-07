import { Activite } from "../activite/activite";
import { Statut } from "../statut/statut";

export class Acteur {
  idActeur!: number;
  nom!: string;
  prenom!: string;
  numero!: string;
  // activite!: Activite;
  email!:any;
  statut: any;
  static id: number;
  static idacteur: number;
  // statut!: Statut;
}
