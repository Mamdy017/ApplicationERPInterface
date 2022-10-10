import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entite } from 'src/app/modeles/entite';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntiteService {

  api="http://localhost:8080/";

  entitecreer() {
    throw new Error('Method not implemented.');
  }

  file:any;
  constructor(private http:HttpClient) { }

    // ===================== AFicher une entité =======================
    afficherEntite() :Observable<any>{
      return this.http.get("http://localhost:8080/entite/afficher");
    }
  
    //  // ===================== Afficher les  entité de l'admin=======================
    //  afficherEntiteAdmin() :Observable<Entite>{
    //   return this.http.get<Entite>(`${this.api}/entite/afficherEntiteAdmin`);
    // }

  //======================Ajouter entite=================

  ajouterEntite(nom: string, description: string, slogant: string, file:any):Observable<any>{
    let data =new FormData();
    data.append("file",file);
    data.append("nom", nom);
    data.append("description", description);
    data.append("slogant", slogant)
    return this.http.post<any>('http://localhost:8080/entite/ajouterE', data);
  }



  
}
