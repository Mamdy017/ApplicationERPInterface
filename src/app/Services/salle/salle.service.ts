import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from 'src/app/modeles/salle/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {


  constructor(private http:HttpClient) { }


// =================================  ICI ON AJOUTE UN SALLE  =====================================
ajouterUneSalle(salle:Salle):Observable<any>
{
  return this.http.post(`http://localhost:8080/salle/ajouter`,Salle);
}

}
