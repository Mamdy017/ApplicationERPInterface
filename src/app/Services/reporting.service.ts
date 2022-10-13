import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Activite } from '../modeles/activite/activite'

@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  constructor(private Http : HttpClient) { }

// ============================================================= AFFICHER TOUTE LES ACTIVITE++++++++++++++++++++++++++++++++++++++++++++++++++
afficherTouteLesActivite():Observable<any>{
  
  return this.Http.get("http://localhost:8080/activite/afficher")
}

// ============================================================= AFFICHER TOUTE LES ACTIVITE++++++++++++++++++++++++++++++++++++++++++++++++++
filtreParEntite(nomEntite:string):Observable<any>{
  
  return this.Http.get(`http://localhost:8080/activite/ReportingparEntite/${nomEntite}`)
}

// ============================================================= AFFICHER TOUTE LES ACTIVITE par une liste ++++++++++++++++++++++++++++++++++++++++++++++++++
filtreParListe(liste:string):Observable<any>{
  
  return this.Http.get(`http://localhost:8080/activite/filtreliste/${liste}`)
}

// ============================================================= AFFICHER TOUTE LES ACTIVITE par une liste ++++++++++++++++++++++++++++++++++++++++++++++++++
filtreParActivite(activite:string):Observable<any>{
  
  return this.Http.get(`http://localhost:8080/activite/filtreParAcivite/${activite}`)
}

// ============================================================= AFFICHER TOUTE LES ACTIVITE par une liste ++++++++++++++++++++++++++++++++++++++++++++++++++
filtreParAnnee(annee:string):Observable<any>{
  
  return this.Http.get(`http://localhost:8080/activite/filtreParAnnee/${annee}`)
}
// ============================================================= AFFICHER TOUTE LES ACTIVITE par etat de l'activité ++++++++++++++++++++++++++++++++++++++++++++++++++
filtreParEtat(etat:string):Observable<any>{
  
  return this.Http.get(`http://localhost:8080/activite/filtreParEtat/${etat}`)
}

// ==========================================================RECUPERER TOUTE LES PERSONNES D'UN TIRAGE VALIDE========================
lesPersonnesTireValide(idactivite:number){
  
  return this.Http.get(`http://localhost:8080/activite/lesPersonnes/${idactivite}`)
}
// ==========================================================Filtrer par entite========================
filtrerParEntite(entite:any):Observable<Activite[]> {
  return this.Http.get<Activite[]>(`http://localhost:8080/activite/parEntite/${entite}`)
}

//afficher dans reportiong
afficherReporting():Observable<any> {
  return this.Http.get(`http://localhost:8080/activite/afficherDansReporting`)

}

//afficher dans etat de l'activité
afficherEtatActivité():Observable<any> {
  return this.Http.get(`http://localhost:8080/etatactivite/afficher`)

}





}
