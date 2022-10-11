import { Tirage } from "../tirage/tirage";

export class PostulantTire {

  id!: number;
  idPostulant!: number;
  tirage!:Tirage;
}

export class Participant {
  nom_postulant!: string
  prenom_postulant!: string
  numero_postulant!: string
  email!: string
  genre!: string
  // activite!: 
}
