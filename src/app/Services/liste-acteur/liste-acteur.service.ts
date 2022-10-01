import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acteur } from 'src/app/modeles/acteur/acteur';

@Injectable({
  providedIn: 'root'
})
export class ListeActeurService {

  constructor(private http : HttpClient) { }

  afficherLesActeurs() :Observable<any> {
    return this.http.get("http://localhost:8080/acteur/afficher");
  }
}
