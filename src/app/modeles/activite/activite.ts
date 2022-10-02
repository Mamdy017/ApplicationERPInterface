import { Acteur } from "../acteur/acteur";
import { Salle } from "../salle/salle";
import { TypeActivite } from "../type-activite/type-activite";
import { Utilisateur } from "../utilisateur/utilisateur";

export class Activite {

  idactivite!: number;
  nom!: string;
  description!: string;
  dateDebut!: Date;
  dateFin!: Date;
  acteur!: Acteur;
  nombrepersonnedemande!:number;
  typeActivite!: TypeActivite;
  utilisateur!: Utilisateur;
  salle!: Salle;
}
