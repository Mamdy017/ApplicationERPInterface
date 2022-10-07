import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tirage } from 'src/app/modeles/tirage/tirage';
import { Postulant } from 'src/app/modeles/postulant/postulant';

@Injectable({
  providedIn: 'root'
})
export class PageListeTirageService {

  constructor(private http:HttpClient) { }

// ICI ON RECUPERE LE NOMBRE TOTAL DE TIRAGE EFFECTUER 
  totalTirage():Observable<any>{
    return this.http.get("http://localhost:8080/tirage/AfficherTirageTotal");
  }

  recupererLesTirageEnfonction(idListe:number):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/tirage/tirageParListe/${idListe}`)
  }

  recupererLesTirageValider():Observable<any>{
    return this.http.get<any>("http://localhost:8080/tirage/tiragevalide")
  }

  recupererLesTirageNonValider():Observable<any>{
    return this.http.get<any>("http://localhost:8080/tirage/tiragenonvalide")
  }

// ICI ON RECUPERE LES TIRAGES EFFECTUER 
lesTirages():Observable<any>{
  return this.http.get("http://localhost:8080/tirage/afficher")
}

// ICI ON RECUPERE LES PERSONNES D'UN TIRAGE PAR ID DE TIRAGE

postulantTirer(idTirage : number):Observable<any>{

  return this.http.get<any>(`http://localhost:8080/postulanttire/PostulantTireParTirage/${idTirage}`)
}

validerTirage(idtirage:number, tirage:any):Observable<any>{
  
  console.log("je suis pas d'accord");

  console.log(`http://localhost:8080/tirage/valider/${idtirage}`, tirage);

  return this.http.put<any>(`http://localhost:8080/tirage/valider/${idtirage}`, tirage);
}

}
