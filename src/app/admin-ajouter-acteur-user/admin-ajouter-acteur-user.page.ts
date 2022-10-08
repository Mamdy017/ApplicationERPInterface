import { Component, OnInit } from '@angular/core';
import { Acteur } from '../Modeles/acteur/acteur';
import { Statut } from '../modeles/statut/statut';
import { AdminActeurUserService } from '../services/admin-ajouter-acteur-user/admin-acteur-user.service';
import { StatutService } from '../services/statutService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-ajouter-acteur-user',
  templateUrl: './admin-ajouter-acteur-user.page.html',
  styleUrls: ['./admin-ajouter-acteur-user.page.scss'],
})
export class AdminAjouterActeurUserPage implements OnInit {
  statut: any;

  telephone: any;


  statutChoix: any;


  acteurs: Acteur = {
    nom: '',
    idActeur: null,
    prenom: '',
    numero: '',
    email: '',
    statut: Statut
  };
    nom = '';
    prenom = '';
    numero= '';
    email= '';
  // eslint-disable-next-line @typescript-eslint/naming-convention


  donner: any;
  erreur: any;
  modif: any;

  menuBureau = true;
  menuMobile = false;

  constructor(private serviceActeur: AdminActeurUserService) { }

  ngOnInit() {

  }
  resetForm(){
    this.nom = '';
    this.prenom = '';
    this.numero= '';
    this.email= '';
  }




  ajouterUtilisateur() {


    // eslint-disable-next-line eqeqeq
    if (this.nom != '' && this.prenom != '' && this.email != '') {

      this.acteurs.nom = this.nom;
      this.acteurs.prenom = this.prenom;
      this.acteurs.email = this.email;
      this.acteurs.numero = this.numero;

      this.serviceActeur.ajouterActeur(this.acteurs, this.statutChoix).subscribe(data => {
      this.donner = data;
      this.modif = 'Acteur ajouter avec succes';
      this.resetForm();
        console.log('--------- ' + this.donner.contenu);
      });
    }
    else {
      console.log('--------- ERREUR!');
      this.erreur = 'Veuillez remplir tous les champs !';
    }
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }
}
