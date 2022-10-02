import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Postulant } from 'src/app/modeles/postulant/postulant';


@Injectable({
  providedIn: 'root'
})
export class AjouterPostulantService {

  api="http://localhost:8080";

  constructor(private http: HttpClient) { }

  recupererListePostulant():Observable<any>{
    return this.http.get(`${this.api}/listepostulant/afficher`);
  }
  
    //methode permettant d'ajouter un postulant
    ajouterPostulant(libelleListe: string, postulant: Postulant):Observable<any>{
      return this.http.post<Postulant>(`${this.api}/postulant/ajouter/${libelleListe}`, postulant);
    }

}
