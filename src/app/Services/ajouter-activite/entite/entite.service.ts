import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entite } from 'src/app/modeles/entite/entite';

@Injectable({
  providedIn: 'root'
})
export class EntiteService {
  constructor(private http: HttpClient) { }
  api="http://localhost:8080/utilisateur";

  ajouter(entite: Entite):Observable<any>
  {
    return this.http.get(`${this.api}/this.ajouter`);
  }
}
