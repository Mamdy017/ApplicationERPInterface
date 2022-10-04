import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccueilUserService {

  constructor(private http:HttpClient) { }

// Avoir le nombre total des salles disponibles
totalSallesDisponible():Observable<any>{
  return this.http.get("http://localhost:8080/salle/affichernbresalledispo");
}

//Avoir le nombre total des apprenants et participants
apprenantOUParticipant(decider:any){
  return this.http.get("http://localhost:8080/postulant/afficherNombreParticipantOuApprenant/"+`${decider}`)
}

//avoir le nombre de formation
nombreFormation(){
  return this.http.get("http://localhost:8080/activite/nombreFormation")
}

//le nombre de talks
nombreTalks(){
  return this.http.get("http://localhost:8080/activite/nombreTalks")
}

//le nombre d'evements
nombreEvenements(){
  return this.http.get("http://localhost:8080/activite/nombreEvenements")
}



}
