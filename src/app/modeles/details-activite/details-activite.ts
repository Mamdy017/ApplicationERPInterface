export class detailsActivite{
    nom!: string;
    description!: string;
    photoactivite:string
    // acteur!: Acteur;
   constructor(nom:string,desc:string,photo:string){
    this.nom=nom
    this.description=desc
    this.photoactivite=photo
   }
}