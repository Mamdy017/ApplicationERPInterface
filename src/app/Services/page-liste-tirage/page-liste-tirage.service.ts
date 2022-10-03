import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

}
