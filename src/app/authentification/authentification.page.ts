import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthentificationService } from '../Services/authentification/authentification.service';
import { Utilisateur } from '../modeles/utilisateur/utilisateur';
import { Router } from '@angular/router';
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
    // else if(this.email != this.utilisateur.email)
    // {
    //       this.erreur = data.contenu

    //     console.log("VVVVVVVV "+this.erreur)
    // }    
    else {
      this.service.seConnecter(this.email, this.password).subscribe(data => {
        this.connexion = data;
      

        // console.log("session "+data);

        if (this.connexion.email == this.email && this.connexion.password == this.password) {
          //On recupere le type de role de l'utilisateur en question
          this.typeUser = data.role.nom;

          if (this.typeUser != null) {
            sessionStorage.setItem("id_users", data.iduser);
            sessionStorage.setItem("nom_users", data.nom);
            sessionStorage.setItem("prenom_users", data.prenom);
            sessionStorage.setItem("email_users", data.email);
            sessionStorage.setItem("numero_users", data.numero);

            if (this.typeUser == "user") {
              this.route.navigateByUrl('/user-accueil');
            }
            else if (this.typeUser == "admin") {
              this.route.navigateByUrl('/admin-accueil');
            }
            else {
              this.route.navigateByUrl('h');
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


