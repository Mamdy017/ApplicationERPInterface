import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acteur } from 'src/app/modeles/acteur/acteur';
// import { Acteur } from '../act';

@Injectable({
  providedIn: 'root'
})
export class ListeActeurService {

  constructor(private http : HttpClient) { }

  // IcI ON RECUPERE LE NOMBRE TOTAL D'UTILISATEURS 
  utilisateurTotal():Observable<any>{
    return this.http.get("http://localhost:8080/utilisateur/afficherNbreUser")
  }
   // IcI ON RECUPERETOUS LES UTILISATEURS 
   lesUtilisateurs():Observable<any>
{
  return this.http.get("http://localhost:8080/utilisateur/afficher")
}


afficherLesActeurs() :Observable<Acteur[]> {
  return this.http.get<Acteur[]>("http://localhost:8080/acteur/afficher");
}

supprimerActeur(id : number) :Observable<any>{
  return this.http.delete(`http://localhost:8080/acteur/supprimer/${id}`);
}

supprimerUtilisateur( iduser: number) :Observable<any>{
  return this.http.delete(`http://localhost:8080/utilisateur/supprimer/${iduser}`);
}
}
