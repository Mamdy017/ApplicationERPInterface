import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postulant } from '../../modeles/postulant/postulant';

@Injectable({
  providedIn: 'root'
})
export class PostulantTireService {

  api = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  //methode permettant d'ajouter un postulant tiré
  ajouterPostulantTire(libelleliste: string, libelleTirage: string, postulant: Postulant): Observable<any> {
    return this.http.post<Postulant>(`http://localhost:8080/postulanttire/ajouter/${libelleliste}/${libelleTirage}`, postulant);
  }

  //methode permettant de recuperer une liste postulant

  recupererListePostulant(): Observable<any> {
    return this.http.get(`${this.api}listepostulant/afficher`);
  }
  
}
