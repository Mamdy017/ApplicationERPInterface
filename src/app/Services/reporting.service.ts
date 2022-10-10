import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  
  return this.Http.get(`http://localhost:8080/activite/parEntite/${nomEntite}`)
}

// ==========================================================RECUPERER TOUTE LES PERSONNES D'UN TIRAGE VALIDE========================
lesPersonnesTireValide(idactivite:number){
  
  return this.Http.get(`http://localhost:8080/activite/lesPersonnes/${idactivite}`)
}

// Afficher dans reporting

afficherReporting():Observable<any>{
  return this.Http.get(`http://localhost:8080/activite/afficherDansReporting`)

}


}
