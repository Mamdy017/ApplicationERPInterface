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

ajouterActeur(Acteur:Acteur, nom: string): Observable<any>{


  return this.http.post<Acteur>(`http://localhost:8080/acteur/ajouter/${nom}`,Acteur);
}

}
