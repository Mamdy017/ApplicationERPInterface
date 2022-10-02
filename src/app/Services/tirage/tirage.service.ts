import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tirage } from 'src/app/modeles/tirage/tirage';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class TirageService {

  api="http://localhost:8080";

  constructor(private http: HttpClient) {
   }

   postTirage(libelleListe:string, libelleActivite:string, tirage:Tirage):Observable<any>{

    return this.http.post<Tirage>(`${this.api}/tirage/ajouter/${libelleListe}/${libelleActivite}`, tirage);
   }
}
