import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulant } from '../../modeles/postulant/postulant';

@Injectable({
  providedIn: 'root'

})

export class PostulantTireService {

  constructor(private http:HttpClient) { }

  // ICI ON RECUPERE LE NOMBRE d'homme sur un tirage
    homme(genre: string, idTirage:number):Observable<any>{
      return this.http.get(`http://localhost:8080/postulanttire/nombrePostulantTireParGenre/${genre}/${idTirage}`);
    }

 
  api = "http://localhost:8080";

  //methode permettant d'ajouter un postulant tiré
  ajouterPostulantTire(libelleliste: string, libelleTirage: string, postulant: Postulant): Observable<any> {
    return this.http.post<Postulant>(`http://localhost:8080/postulanttire/ajouter/${libelleliste}/${libelleTirage}`, postulant);
  }

  //methode permettant de recuperer une liste postulant

  recupererListePostulant(): Observable<any> {
    return this.http.get(`${this.api}listepostulant/afficher`);
  }
  
}

// export class PostulantTireService {

//   constructor(private http:HttpClient) { }

//   // ICI ON RECUPERE LE NOMBRE d'homme sur un tirage
//     homme(idTirage:number):Observable<any>{
//       return this.http.get(`http://localhost:8080/postulanttire/nombrePostulantTireParGenre  + ${idTirage}`);
//     }

 
// }