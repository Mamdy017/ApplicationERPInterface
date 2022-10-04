import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GestionentiteService {

  api = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  //methode permettant de recuperer une liste entité

  afficherEntite(): Observable<any> {
    return this.http.get(`${this.api}entite/afficher`);
  }
}
