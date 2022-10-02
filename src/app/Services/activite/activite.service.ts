import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  url = "http://localhost:8080/activite"

  constructor(private http:HttpClient) { 
  }
  afficherActivite(): Observable<any>{
    return this.http.get<any>(`${this.url}/afficher`);

  }
}
