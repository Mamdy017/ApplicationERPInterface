import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant, PostulantTire } from 'src/app/modeles/postulant-tire/postulant-tire';
import { Tirage } from 'src/app/modeles/tirage/tirage';

@Injectable({
  providedIn: 'root'

})

export class PostulantTireService {

  api = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  // ICI ON RECUPERE LE NOMBRE d'homme sur un tirage
    homme(genre: string, idTirage:number):Observable<any>{
      return this.http.get(`${this.api}/postulanttire/nombrePostulantTireParGenre/${genre}/${idTirage}`);
    }


    recupererListePostulant():Observable<any>{
      return this.http.get(`${this.api}/listepostulant/afficher`);
    }


    recupererListePostulantT():Observable<any>{
      return this.http.get(`${this.api}/listepostulant/afficher`);
    }

    ajouterParticipant(libelleListe: string, participant: Participant):Observable<any>{
      console.log(`${this.api}/postulanttire/ajouter/${libelleListe}`, participant);
      return this.http.post(`${this.api}/postulanttire/ajouter/${libelleListe}`, participant);
    }
 
}

// export class PostulantTireService {

//   constructor(private http:HttpClient) { }

//   // ICI ON RECUPERE LE NOMBRE d'homme sur un tirage
//     homme(idTirage:number):Observable<any>{
//       return this.http.get(`http://localhost:8080/postulanttire/nombrePostulantTireParGenre  + ${idTirage}`);
//     }

 
// }