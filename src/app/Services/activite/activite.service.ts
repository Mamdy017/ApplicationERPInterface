import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  api="http://localhost:8080";

  constructor(private http: HttpClient) { }

  recupererListeActivite():Observable<any>{
    return this.http.get(`${this.api}/activite/afficher`);
  }
}
