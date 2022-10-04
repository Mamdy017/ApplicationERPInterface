import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthentificationService } from '../Services/authentification/authentification.service';
import { Utilisateur } from '../modeles/utilisateur/utilisateur';
import { Router } from '@angular/router';
import { Role } from '../modeles/role/role';
import { Entite } from '../modeles/entite';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  connexion: any;
  email: any;
  password: any;
  erreur: any;
  typeUser: any;



  utilisateur: Utilisateur = {
    iduser: 0,
    nom: '',
    prenom: '',
    numero: '',
    email: '',
    password: '',
    role: new Role,
    entite: new Entite
  }

  bool_erreur: boolean = false;

  constructor(private service: AuthentificationService, private http: HttpClient, private route: Router) { }

  ngOnInit() {


  }

  Connexion() {
    this.bool_erreur = true;
    if (typeof this.email === 'undefined' || typeof this.password === 'undefined') {

      this.erreur = "Tous les champs sont obligatoires";
      console.log(this.erreur);
    } 
   
    else {
      this.service.seConnecter(this.email, this.password).subscribe(data => {
        this.connexion = data;
      

        // console.log("session "+data);

        if (this.connexion.email == this.email && this.connexion.password == this.password) {
          //On recupere le type de role de l'utilisateur en question
          this.typeUser = data.role.nom;

          if (this.typeUser != null) {
            sessionStorage.setItem("id_users", data.iduser);
            sessionStorage.setItem("role_users", data.role.nom); 
            sessionStorage.setItem("nom_users", data.nom);
            sessionStorage.setItem("prenom_users", data.prenom);
            sessionStorage.setItem("email_users", data.email);
            sessionStorage.setItem("numero_users", data.numero);

            if (this.typeUser == "user") {
              this.route.navigateByUrl('/accueil-user');
            }
            else if (this.typeUser == "admin") {
              this.route.navigateByUrl('/admin-accueil');
            }
            else {
              this.route.navigateByUrl('/admin-accueil');
              console.log(data.contenu);             
            }
          }
        }
        else{
      this.erreur = data.contenu
      console.log("VVVVVVVV "+this.erreur)
        }

    

      })
    }

  }


}


