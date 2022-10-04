import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable, of } from 'rxjs';
import { Acteur } from 'src/app/modeles/acteur/acteur';
=======
import { Observable } from 'rxjs';
import { Acteur } from 'src/app/modeles/acteur/acteur';
// import { Acteur } from '../act';
>>>>>>> e71fb2394032ce888cfb97cefa42eb57085dcc62

@Injectable({
  providedIn: 'root'
})
export class ListeActeurService {

  constructor(private http : HttpClient) { }

<<<<<<< HEAD
  afficherLesActeurs() :Observable<Acteur[]> {
    return this.http.get<Acteur[]>("http://localhost:8080/acteur/afficher");
  }

  supprimerActeur(id : number) :Observable<any>{
    return this.http.delete(`http://localhost:8080/acteur/supprimer/${id}`);
  }
=======
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

>>>>>>> e71fb2394032ce888cfb97cefa42eb57085dcc62
}
