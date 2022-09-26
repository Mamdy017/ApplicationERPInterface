import { Activite } from "../activite/activite";
import { Statut } from "../statut/statut";

export class Acteur {
  idActeur!: number;
  nom!: string;
  prenom!: string;
  numero!: string;
  activite!: Activite;
  statut!: Statut;
}
