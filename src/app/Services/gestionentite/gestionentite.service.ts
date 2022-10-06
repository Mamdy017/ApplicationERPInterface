import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionentiteService {
  api="http://localhost:8080";
  constructor(private http: HttpClient) { }

  afficherEntite() :Observable<any>{
    return this.http.get(`${this.api}/entite/afficher`);
  }

  nombreFormation(idEntite : number) :Observable<any>{
    return this.http.get(`${this.api}/activite/parTypeActiviteEtEntite/Formations/${idEntite}`)
  }
  nombreTalk(idEntite : number) :Observable<any>{
    return this.http.get(`${this.api}/activite/parTypeActiviteEtEntite/Talks/${idEntite}`)
  }
  nombreEvennement(idEntite : number) :Observable<any>{
    return this.http.get(`${this.api}/activite/parTypeActiviteEtEntite/Evennement/${idEntite}`)
  }

  activiteEnCours(idEntite : number) :Observable<any> {
    return this.http.get(`${this.api}/activite/parEntiteEtEtat/En Cours/${idEntite}`)
  }
  
  activiteAvenir(idEntite : number) :Observable<any> {
    return this.http.get(`${this.api}activite/parEntiteEtEtat/à Venir/${idEntite}`)
  }
}
  