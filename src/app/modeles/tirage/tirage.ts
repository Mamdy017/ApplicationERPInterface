import { Activite } from "../activite/activite";
import { ListePostulant } from "../liste-postulant/liste-postulant";
import { Utilisateur } from "../utilisateur/utilisateur";

export class Tirage {

  id!: number;
  LibelleTirage!: string;
  nombrePostulantTire!: number;
  date!: Date;
  utilisateur!: Utilisateur;
  listepostulant!: ListePostulant;
  activite!:Activite;

}
