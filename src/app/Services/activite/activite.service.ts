import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Activite } from 'src/app/modeles/activite/activite';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  api="http://localhost:8080";

  constructor(private http: HttpClient) { }

  recupererListeActiviteT():Observable<any>{
    return this.http.get(`${this.api}/activite/afficher`);
  }

// ==========================AJOUT DE L'Activite

postActivite(idacteurs: string, idacteurInternes: string, libelleEntite: string, typeAct: string, libelleSalle: string, activite:Activite):Observable<any>{

  console.log(`${this.api}/activite/ajouter/${idacteurs}/${idacteurInternes}/${libelleEntite}/${typeAct}/${libelleSalle}`, activite)

  return this.http.post(`${this.api}/activite/ajouter/${idacteurs}/${idacteurInternes}/${libelleEntite}/${typeAct}/${libelleSalle}`, activite);
}

// ===========================

recupererListeEntite():Observable<any>{
  return this.http.get(`${this.api}/entite/afficher`);
}

recupererListeSalle():Observable<any>{
  return this.http.get(`${this.api}/salle/afficher`);
}

recupererListeTypeActivite():Observable<any>{
  return this.http.get(`${this.api}/typeactivite/afficher`);
}

recupererListeAnne():Observable<any>{
  return this.http.get(`${this.api}/annee/afficher`)
}




}
