import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from 'src/app/modeles/Tache/tache';

@Injectable({
  providedIn: 'root'
})
export class AjouterTacheService {
  url = "http://localhost:8080"


  constructor(private http:HttpClient) { 
  }
  afficherToutDesignation(): Observable<any>{
    return this.http.get<any>(`${this.url}/designation/recupererToutDesignination`);
  }

  ajouterTacheF(libdesign: string, libstatut: string, libAct: string, tache:Tache): Observable<any>{
    return this.http.post<any>(`${this.url}/tache/ajouter/${libdesign}/${libstatut}/${libAct}`, tache);
  }
}
