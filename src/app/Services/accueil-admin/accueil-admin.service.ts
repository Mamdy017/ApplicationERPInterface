import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccueilAdminService {

  api="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  // ===================== Afficher les  entité de l'admin=======================
  afficherEntiteAdmin():Observable<any>{
    return this.http.get('${this.api}/entite/afficherEntiteAdmin');
  }


  
}
