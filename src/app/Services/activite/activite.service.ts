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

  recupererListeActivite():Observable<any>{
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


ajouterActivite(file:File, nom:string, description:string, nombrepersonnedemande:string, datedeb:string, datefin:string, idacteurs:string, idacteurInternes:string, libelleEntite:string, typeAct:string, libelleSalle:string, idresponsable:string, userid:string):Observable<any>{
  //file, nom, description,nombrepersonnedemande, datedeb, datefin, idacteurs, idacteurInternes, libelleEntite, typeAct, libelleSalle, idresponsable, userid
  
  let data = new FormData();
  

  data.append("file",file);
  data.append("nom", nom);
  data.append("description", description);
  data.append("nombrepersonnedemande", nombrepersonnedemande);
  data.append("datedeb", datedeb);
  data.append("datefin", description);
  data.append("idacteurs",idacteurs);
  data.append("idacteurInternes", idacteurInternes);
  data.append("idacteurInternes", idacteurInternes);
  data.append("libelleEntite", libelleEntite);
  data.append("typeAct", typeAct);
  data.append("libelleSalle",libelleSalle);
  data.append("idresponsable", idresponsable);
  data.append("userid", userid);

  return this.http.post<any>('http://localhost:8080/activite/ajouter', data);
}




}
