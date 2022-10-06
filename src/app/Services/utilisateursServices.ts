import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statut } from 'src/app/modeles/statut/statut';
import { Utilisateur } from '../modeles/utilisateur/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService{


  constructor(private http:HttpClient) { }


// =================================  ICI ON INSERE LES UTILISATEURS =====================================
ajouterUser(utilisateur:Utilisateur):Observable<Object>{
    return this.http.post("http://localhost:8080/utilisateur/ajouter",utilisateur);
}

}
