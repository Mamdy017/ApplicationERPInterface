import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statut } from 'src/app/modeles/statut/statut';

@Injectable({
  providedIn: 'root'
})
export class StatutService {


  constructor(private http:HttpClient) { }


// =================================  ICI ON AFFICHE TOUS LES STATUTS  =====================================
afficherToutesLesStatus():Observable<Object>{
    return this.http.get("http://localhost:8080/statut/afficher");
}

}
