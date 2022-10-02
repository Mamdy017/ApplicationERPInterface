import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatutService {
  url = "http://localhost:8080/statut"


  constructor(private http:HttpClient) { 
  }
  afficherStatut(): Observable<any>{
    return this.http.get<any>(`${this.url}/afficher`);
  }
}
