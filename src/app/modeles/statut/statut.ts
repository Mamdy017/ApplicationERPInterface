import { Acteur } from "../acteur/acteur";

export class Statut {

  idstatut!: number;
  nom!: string;
  acteur!: Acteur;

  constructor( nom: string){
    this.nom=nom;
  }
}
