import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acteur } from 'src/app/modeles/acteur/acteur';

@Injectable({
  providedIn: 'root'
})
export class ListeActeurService {

  constructor(private http : HttpClient) { }

  afficherLesActeurs() :Observable<Acteur[]> {
    return this.http.get<Acteur[]>("http://localhost:8080/acteur/afficher");
  }
}
