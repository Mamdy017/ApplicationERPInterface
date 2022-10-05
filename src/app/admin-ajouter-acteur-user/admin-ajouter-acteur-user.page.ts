import { Component, OnInit } from '@angular/core';
import { Acteur } from '../Modeles/acteur/acteur';
import { AdminActeurUserService } from '../services/admin-ajouter-acteur-user/admin-acteur-user.service';
import { StatutService } from '../services/statutService';

@Component({
  selector: 'app-admin-ajouter-acteur-user',
  templateUrl: './admin-ajouter-acteur-user.page.html',
  styleUrls: ['./admin-ajouter-acteur-user.page.scss'],
})
export class AdminAjouterActeurUserPage implements OnInit {

  nom: any;
  prenom: any;
  email: any;
  statut: any;
 
  telephone:any


 statutChoix:any;
 menuBureau: boolean = true;
 menuMobile: boolean = false;

 


  acteurs: Acteur = {
    nom: "",
    idActeur: null,
    prenom: '',
    numero: '',
    email: " ",
    statut: undefined
  }
  donner: any;
  erreur: any;

 

  constructor(private serviceActeur: AdminActeurUserService, private serviceStatut:StatutService) { }

  ngOnInit() {
    // On recupere les statutd
    this.serviceStatut.afficherToutesLesStatus().subscribe(data=>{ this.statut = data })
  }



  ajouterUtilisateur() {

    // console.log("----------- "+this.statutChoix)

    if (this.nom != " " && this.prenom != "" && this.email != "" && this.statutChoix != null && this.telephone != null) {
      
      this.acteurs.nom = this.nom;
      this.acteurs.prenom = this.prenom;
      this.acteurs.email = this.email;
      // this.acteurs.statut.idstatut = this.statutChoix;
      this.acteurs.numero = this.telephone;



      this.serviceActeur.ajouterActeur(this.acteurs).subscribe(data => {
        this.donner = data

        console.log("--------- " + this.donner.contenu)
 })
    }
    else {
      this.erreur = " Veuillez remplir tous les champs !";
     
     
    }



  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  } 
}
