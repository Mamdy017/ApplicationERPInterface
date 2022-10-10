import { Acteur } from "../acteur/acteur";
import { Salle } from "../salle/salle";
import { TypeActivite } from "../type-activite/type-activite";
import { Utilisateur } from "../utilisateur/utilisateur";

export class Activite {

  // idactivite!: number;
  nom!: string;
  description!: string;
  dateDebut!: Date;
  dateFin!: Date;
  nombrepersonnedemande!:number;
  photoactivite: string; 
  // acteur!: Acteur;
  // typeActivite!: TypeActivite;
  // utilisateur!: Utilisateur;
  // salle!: Salle;
}
