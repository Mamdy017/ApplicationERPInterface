import { Utilisateur } from "./utilisateur/utilisateur";

export class Entite {
    idEntite!: number;
    nom!: string;
    description!: string;
    slogant!: string;
    photoentite!: string;
    iduser!: Utilisateur
   
}
export class Fichier {

    photoentite!: string;
    file!:File;
}
