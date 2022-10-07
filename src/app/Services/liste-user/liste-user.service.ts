import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/modeles/utilisateur/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ListeUserService {

  api = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  //Affichage des utilisateur
  afficherListeUser(): Observable<any> {
    return this.http.get(`${this.api}utilisateur/afficher`);
  }

  //Modifier user
  modifierUser(): Observable<any> {
    return this.http.get(`${this.api}utilisateur/modifier`);
  }


  //Filtre user par entité
  filtreParEntite(entite: any): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.api}utilisateur/afficher/${entite}`);

  }

  //Afficher entite, entite et rôle
  filtreParTout(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.api}utilisateur/afficherToute`);

  }

  //Supprimer User
  SupprimerUser(idUser: number): Observable<Utilisateur[]> {
    return this.http.delete<Utilisateur[]>(`${this.api}utilisateur/supprimer/${idUser}`);
  }
}
