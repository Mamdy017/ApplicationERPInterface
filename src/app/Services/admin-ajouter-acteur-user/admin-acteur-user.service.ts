import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acteur } from 'src/app/Modeles/acteur/acteur';

@Injectable({
  providedIn: 'root'
})

export class AdminActeurUserService {


  constructor(private http: HttpClient) { }

// Formulaire d'ajout des Acteurs

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-shadow
ajouterActeur(Acteur: Acteur, stat: string): Observable<Acteur>{


  return this.http.post<Acteur>(`http://localhost:8080/acteur/ajouter/${stat}`, Acteur);
}

// eslint-disable-next-line @typescript-eslint/naming-convention
modifierActeur(acteur: Acteur, idacteur: number): Observable<any>{
  return this.http.put<void>(`http://localhost:8080/acteur/modifier/${idacteur}`, acteur);
}

// eslint-disable-next-line @typescript-eslint/ban-types
trouverparId(idacteur: number): Observable<Acteur>{
  return this.http.get<Acteur>(`http://localhost:8080/acteur/unacteur/${idacteur}`);
}

}
