import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthentificationService } from '../Services/authentification/authentification.service';

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

  bool_erreur: boolean = false;
  
  constructor(private service : AuthentificationService, private http:HttpClient) { }

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
        console.log(data);
        this.erreur = data.contenu; 
      })
    } 

    
  }
  
 
}
