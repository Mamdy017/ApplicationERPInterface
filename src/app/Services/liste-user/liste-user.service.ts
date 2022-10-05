import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeUserService {
  http: any;

  constructor() { }
  supprimerUtilisateur(iduser: number) :Observable<any>{
    return this.http.delete(`http://localhost:8080/acteur/supprimer/${iduser}`);
  }
}
