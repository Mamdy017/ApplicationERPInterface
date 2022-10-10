import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tirage } from 'src/app/modeles/tirage/tirage';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class TirageService {

  api="http://localhost:8080";

  constructor(private http: HttpClient) {
   }

   postTirage(libelleListe:string, tirage:Tirage):Observable<any>{

    console.log(`${this.api}/tirage/ajouter/${libelleListe}`, tirage);

    return this.http.post<Tirage>(`${this.api}/tirage/ajouter/${libelleListe}`, tirage);
   }
   

   TrouverTirageParListe(idListe:number){
    return this.http.get(`${this.api}/tirage/tirageParListe/${idListe}`);
   }

   TrouverNombrePostulantTireParGenre(idtirage:number, genre:String){
    return this.http.get(`${this.api}/postulanttire/nombrePostulantTireParGenre/${idtirage}/${genre}`);
   }

   NombreMasculin
  
}
