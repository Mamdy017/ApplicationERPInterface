import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthentificationService } from '../Services/authentification/authentification.service';
import { Router } from '@angular/router';
import { Utilisateur } from '../modeles/utilisateur/utilisateur';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  connexion:any;
  email:any;
  password:any;
  erreur:any;
  typeUser:any;



  utilisateur: Utilisateur = {
    iduser:0,
    nom:'',
    prenom:'',
    numero:'',
    email:'',
    password:'',
  }

  bool_erreur: boolean = false;
  
  constructor(private service : AuthentificationService, private http:HttpClient, private route:Router) { }

  ngOnInit() {
  
    
  }

  Connexion(){
    this.bool_erreur = true;
    if(typeof this.email === 'undefined' || typeof this.password === 'undefined'){
      
      this.erreur="Tous les champs sont obligatoires";
      console.log(this.erreur);
    }else{
        this.service.seConnecter(this.email,this.password).subscribe(data=>{
          this.connexion = data;

          console.log("session "+data);
          
          if(this.connexion.email == this.email && this.connexion.password==this.password)
          {
           //On recupere le type de role de l'utilisateur en question
            this.typeUser = data.role.nom;   
            
            if(this.typeUser != null)
              {
                      sessionStorage.setItem("id_users",data.iduser);
                      sessionStorage.setItem("nom_users",data.nom);
                      sessionStorage.setItem("prenom_users",data.prenom);
                      sessionStorage.setItem("email_users",data.email);
                      sessionStorage.setItem("numero_users",data.numero);
                      




                      if(this.typeUser == "User")
                      {
                      this.route.navigateByUrl('/accueil-user');
                      }
                      else if(this.typeUser == "admin")
                      {
                      this.route.navigateByUrl('/accueil-admin');
                        
                      
                      }
                      else
                      {
                        this.route.navigateByUrl('h');
                      }
              }
          }
           //On recupere le type de role de l'utilisateur en question
          // console.log("Utilisateur = "+this.typeUser)
          
          // ajouter-postulant
          // this.route.navigateByUrl('/ajouter-postulant');accueil-user
          // routerLink="/ajouter-postulant"
          this.erreur = data.contenu;

          
        })
      }
      
    } 
 
    
  }
  
