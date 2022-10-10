import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListePostulantService {

  constructor(private http : HttpClient) { }

  // ICI ON RECUPERE L'ENSEMBLE DES LISTES

listeTotales():Observable<any>{
  return this.http.get("http://localhost:8080/listepostulant/afficherNbreListePostulant")
}

// ICI ON RECUPERE LES LISTES
mesListes():Observable<any>{
return this.http.get("http://localhost:8080/listepostulant/afficher")
}

}
