import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class DetailActiviteService {

  api="http://localhost:8080";

  constructor(private http: HttpClient) {}

  recupererDetailActivite(idactivite:number):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/activite/tousActivites/${idactivite}`)
  }

  
  
}
