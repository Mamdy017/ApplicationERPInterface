import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { Postulant } from '../modeles/postulant/postulant';
import { AjouterPostulantService } from '../Services/ajouter-postulant/ajouter-postulant.service';
@Component({
  selector: 'app-ajouter-postulant',
  templateUrl: './ajouter-postulant.page.html',
  styleUrls: ['./ajouter-postulant.page.scss'],
})
export class AjouterPostulantPage implements OnInit {
  
  menuBureau: boolean = true;
  menuMobile: boolean = false;

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
  
    listePostulant:any;
  
    liste:any;
    listes:any
    erreur: any;
    bool_erreur: boolean = false;
  
  
    constructor(
      private ajouterPostulant : AjouterPostulantService, public breakpointObserver: BreakpointObserver
    ) { }
  
    actualise(): void {
      setInterval(
        () => {
        }, 100, clearInterval(1500));
    }
    ngOnInit() {

      this.getListePostulant();
  
      this.breakpointObserver
      .observe(['(max-width: 767px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.menuBureau = false;
          this.menuMobile = true;
          this.actualise();
        } else {
          this.menuBureau = true;
          this.menuMobile = false;
          this.actualise();
        }
      });

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

    console.log(this.nom_postulant)
    console.log(this.prenom_postulant)
    console.log(this.numero_postulant)
    console.log(this.postulant)

    if(this.nom_postulant === "" || this.prenom_postulant === "" || this.email == "" || this.genre == "" || this.numero_postulant == ""){
      
      this.erreur = "Veuillez remplir tous les champs";

    }else{  
     
      this.ajouterPostulant.ajouterPostulant(this.liste, this.postulant).subscribe((data) =>{ 

       this.erreur = data

        })
        console.log(this.erreur);
    }
  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


}
