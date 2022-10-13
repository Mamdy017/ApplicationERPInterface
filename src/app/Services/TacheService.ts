import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from '../modeles/Tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  ///recupererToutDesignination

  constructor(private http:HttpClient) { }

  ajouterTaches(tache:Tache, idusers:String, idAct:number, libelleDesignation:String):Observable<any>{
    console.log(`http://localhost:8080/tache/ajouter/${idusers}/${idAct}/${libelleDesignation}`, tache)
    return this.http.post(`http://localhost:8080/tache/ajouter/${idusers}/${idAct}/${libelleDesignation}`, tache);
  }

  recupererDesignation():Observable<any>{
    return this.http.get("http://localhost:8080/designation/recupererToutDesignination")
  }

}

