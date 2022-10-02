import { ListePostulant } from "../liste-postulant/liste-postulant";

export class Postulant {

  id!: number;
  nom_postulant!: string;
  prenom_postulant!: string;
  numero_postulant: string ;
  email!: string;
  genre!: string;
  etat!: boolean;
 
  //listepostulant!: ListePostulant;
}
