import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acteur } from 'src/app/modeles/acteur/acteur';
import { status } from 'src/app/modeles/status/status';

@Injectable({
  providedIn: 'root'
})
export class ActeurService {

  constructor(private http:HttpClient) { }
  saveacteur(act:Acteur,lib:String) :Observable<Acteur>{
    return this.http.post<Acteur>(`http://localhost:8080/acteur/ajouter/${lib}`,act);
  }
 
}
