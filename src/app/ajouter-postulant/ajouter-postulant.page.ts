import { Component, OnInit } from '@angular/core';
import { Postulant } from '../modeles/postulant/postulant';
import { AjouterPostulantService } from '../Services/ajouter-postulant/ajouter-postulant.service';
@Component({
  selector: 'app-ajouter-postulant',
  templateUrl: './ajouter-postulant.page.html',
  styleUrls: ['./ajouter-postulant.page.scss'],
})
export class AjouterPostulantPage implements OnInit {

  postulant: Postulant = {
    nom_postulant: "",
    prenom_postulant: "",
    numero_postulant: "",
    email: "",
    genre: ""
    }
  
    nom_postulant: string = '';
    prenom_postulant: string = '';
    numero_postulant: string = '';
    email: string = '';
    genre: string = '';
  
    listePostulant = "";
  
    liste:any;
  
    erreur: any;
    bool_erreur: boolean = false;
  
  
    constructor(
      private ajouterPostulant : AjouterPostulantService
    ) { }
  
  
    ngOnInit() {
  
      this.getListePostulant();
  
    }
  
  
    getListePostulant(){
      this.ajouterPostulant.recupererListePostulant().subscribe((data) =>{
        this.listePostulant = data;
      })
    }
  
    posterPostulant(){
      
      this.postulant.nom_postulant = this.nom_postulant;
      this.postulant.prenom_postulant = this.prenom_postulant;
      this.postulant.numero_postulant = this.numero_postulant;
      this.postulant.email = this.email;
      this.postulant.genre = this.genre;
  
      this.bool_erreur = true;
  
      if(this.nom_postulant === "" || this.prenom_postulant === "" || this.email == "" || this.genre == "" || this.numero_postulant == ""){
        
        this.erreur = "Veuillez remplir tous les champs";
  
      }else{  
       
        this.ajouterPostulant.ajouterPostulant(this.liste, this.postulant).subscribe((data) =>{ 
  
          if(data == null){
            this.erreur = "Ce postulant existe déjà";
          }else{
            this.erreur = "Postulant ajouté avec succes";
          }
  
          })
          console.log(this.erreur);
      }
    }
  
  

}
