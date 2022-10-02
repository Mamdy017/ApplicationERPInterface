import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acteur } from 'src/app/Modeles/acteur/acteur';

@Injectable({
  providedIn: 'root'
})

export class AdminActeurUserService {

  
  constructor(private http:HttpClient) { }

// Formulaire d'ajout des Acteurs

ajouterActeur(Acteur:Acteur):Observable<Object>{

  
  return this.http.post<Object>(`http://localhost:8080/acteur/ajouter`,Acteur);
}

}
