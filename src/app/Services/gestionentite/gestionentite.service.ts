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
    return this.http.get(`${this.api}/activite/parTypeActiviteEtEntite/Formation/${idEntite}`)
  }

  formation(IdEntite : number):Observable<any>{
    return this.http.get(`${this.api}/activite/ParEntite/${IdEntite}`)
  }
  talk(IdEntite : number):Observable<any>{
    return this.http.get(`${this.api}/activite/ParEntite1/${IdEntite}`)
  }
  eve(IdEntite : number):Observable<any>{
    return this.http.get(`${this.api}/activite/ParEntite2/${IdEntite}`)
  }
  nombreTalk(idEntite : number) :Observable<any>{
    return this.http.get(`${this.api}/activite/parTypeActiviteEtEntite/Talk/${idEntite}`)
  }
  nombreEvennement(idEntite : number) :Observable<any>{
    return this.http.get(`${this.api}/activite/parTypeActiviteEtEntite/Evennement/${idEntite}`)
  }

  activiteEnCours(idEntite : number) :Observable<any> {
    return this.http.get(`${this.api}/activite/parEntiteEtEtat/encours/${idEntite}`)
  }
  
  activiteAvenir(idEntite : number) :Observable<any> {
    return this.http.get(`${this.api}/activite/parEntiteEtEtat/avenir/${idEntite}`)
  }

  responsableEntite(idEntite : number) :Observable<any> {
    return this.http.get(`${this.api}/utilisateur/responsableParEntite/responsable/${idEntite}`)
  }
}
  