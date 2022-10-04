import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  api = "http://localhost:8080/";

  constructor(private http: HttpClient) { }
  //methode permettant de recuperer une liste postulant

  afficherRole(): Observable<any> {
    return this.http.get(`${this.api}role/afficher`);
  }
}
