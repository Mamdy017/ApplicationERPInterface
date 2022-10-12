import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tirage } from 'src/app/modeles/tirage/tirage';

@Injectable({
  providedIn: 'root'

})

export class PostulantTireService {

  constructor(private http:HttpClient) { }

  // ICI ON RECUPERE LE NOMBRE d'homme sur un tirage
    homme(genre: string, idTirage:number):Observable<any>{
      return this.http.get(`http://localhost:8080/postulanttire/nombrePostulantTireParGenre/${genre}/${idTirage}`);
    }


    supprimerpostulant(id:number):Observable<object>{
      return this.http.get(`http://localhost:8080/postulanttire/supprimer/${id}`)
    }

 
}

// export class PostulantTireService {

//   constructor(private http:HttpClient) { }

//   // ICI ON RECUPERE LE NOMBRE d'homme sur un tirage
//     homme(idTirage:number):Observable<any>{
//       return this.http.get(`http://localhost:8080/postulanttire/nombrePostulantTireParGenre  + ${idTirage}`);
//     }

 
// }