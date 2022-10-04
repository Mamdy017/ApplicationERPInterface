import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Entite } from '../modeles/entite/entite';
import { Utilisateur } from '../modeles/utilisateur/utilisateur';
import { GestionentiteService } from '../Services/gestionentite/gestionentite.service';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';
import { ListeUserService } from '../services/liste-user/liste-user.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.page.html',
  styleUrls: ['./liste-utilisateur.page.scss'],
})
export class ListeUtilisateurPage implements OnInit {


  page:any;
  maListes:any
  donnees: any
  entite: Entite;
  reponse: any;
  select_liste: string;
  modifierU: any;
  ev:any
  ods:any
  testt:any;
  affiche:boolean
  af:String
  supprimerU:any

  constructor(private serviceUtilisateur: ListeActeurService,
    private serviceEntite: GestionentiteService,
    private servicelisteutilisateur: ListeUserService) { }

  ngOnInit() {

     

     this.serviceEntite.afficherEntite().subscribe((data) => {
       this.reponse = data;
     })
     this.servicelisteutilisateur.filtreParTout().subscribe((data)=>{
  
      // console.log(this.select_liste)
  
      this.ods = data
  
      console.log(this.ods)
     })

    

  }



  filtreUserParEntite(event) {

    if(this.select_liste != "Filtre par Entité"){


      console.log(event.target.value)

      // console.log(this.ev)
      
      this.ev = event.target.value
    
     this.servicelisteutilisateur.filtreParEntite(this.select_liste).subscribe((data)=>{
  
      // console.log(this.select_liste)
  
      this.ods = data
  
      console.log(this.ods)
     })


    }
  
   
   
  }

  //modifier user
  modifier() {
    this.servicelisteutilisateur.modifierUser().subscribe((data) => {
      this.modifierU = data;
    })
      }

      //Supprimer User
      supprimer(iduser:any){
        this.servicelisteutilisateur.SupprimerUser(iduser).subscribe((data) =>{
          this.supprimerU = data
        })
      }
}
