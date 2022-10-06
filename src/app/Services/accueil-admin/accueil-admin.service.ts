import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entite } from 'src/app/modeles/entite';

@Injectable({
  providedIn: 'root'
})
export class AccueilAdminService {

  api="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  // ===================== Afficher les  entité de l'admin=======================
  afficherEntiteAdmin():Observable<Entite>{
    return this.http.get<Entite>("http://localhost:8080/entite/afficherEntiteAdmin");
  }


  
}
