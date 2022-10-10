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
  nombreTalk(idEntite : number) :Observable<any>{
    return this.http.get(`${this.api}/activite/parTypeActiviteEtEntite/Talks/${idEntite}`)
  }
  nombreEvennement(idEntite : number) :Observable<any>{
    return this.http.get(`${this.api}/activite/parTypeActiviteEtEntite/Evennement/${idEntite}`)
  }

  globalActiviteEnCours() :Observable<any> {
    return this.http.get(`${this.api}/activite/ParEtat/encours`)
  }
  
  globalActiviteAvenir() :Observable<any> {
    return this.http.get(`${this.api}/activite/ParEtat/avenir`)
  }
  globalActiviteTerminer() :Observable<any> {
    return this.http.get(`${this.api}/activite/ParEtat/terminer`)
  };

  activiteEnCours(idEntite : number) :Observable<any> {
    return this.http.get(`${this.api}/activite/parEntiteEtEtat/encours/${idEntite}`)
  }

  activiteAvenir(idEntite : number) :Observable<any> {
    return this.http.get(`${this.api}/activite/parEntiteEtEtat/avenir/${idEntite}`)
  }

  activiteTerminer(idEntite : number) :Observable<any> {
    return this.http.get(`${this.api}/activite/parEntiteEtEtat/terminer/${idEntite}`)
  }

  responsableEntite(idEntite : number) :Observable<any> {
    return this.http.get(`${this.api}/utilisateur/responsableParEntite/Responsable/${idEntite}`)
  }
}
  