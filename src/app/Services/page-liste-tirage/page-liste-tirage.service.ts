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

// ICI ON RECUPERE LES TIRAGES EFFECTUER 
lesTirages():Observable<any>{
  return this.http.get("http://localhost:8080/tirage/afficher")
}

// ICI ON RECUPERE LES PERSONNES D4UN TIRAGE PAR ID DE TIRAGE

postulantTirer(idTirage : number):Observable<any>{

  return this.http.get<any>(`http://localhost:8080/postulanttire/PostulantTireParTirage/${idTirage}`)
}

NombreMasculin(idTirage: number):Observable<any>{
  return this.http.get(`http://localhost:8080/postulanttire/nombrePostulantTireParGenre/Masculin/${idTirage}`)
}

}
