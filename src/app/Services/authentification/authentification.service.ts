import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }
  api="http://localhost:8080/utilisateur/seconnecter";

  seConnecter(email:String, password:String):Observable<any>
  {
    return this.http.get(`${this.api}/${email}/${password}`);
  }
}
