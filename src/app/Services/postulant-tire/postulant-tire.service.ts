import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostulantTireService {

  api="http://localhost:8080";

  constructor(private http :HttpClient) { }

  TrouverNombrePostulantTireParGenre(idtirage:number, genre:String){
    return this.http.get(`${this.api}/postulanttire/nombrePostulantTireParGenre/${idtirage}/${genre}`);
   }
   
}
