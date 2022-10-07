import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

// Avoir le nombre total des salles disponibles
totalSallesDisponible():Observable<any>{
  return this.http.get("http://localhost:8080/salle/affichernbresalledispo");
}

//Avoir le nombre total des apprenants et participants
apprenantOUParticipant(decider:any){
  return this.http.get("http://localhost:8080/postulant/afficherNombreParticipantOuApprenant/"+`${decider}`)
}

//
nombreApprenant():Observable<any>{

  return this.http.get("http://localhost:8080/postulanttire/compteApprenant")
}

}

