import { Component, OnInit } from '@angular/core';
import { Acteur } from '../Modeles/acteur/acteur';
import { Statut } from '../modeles/statut/statut';
import { AdminActeurUserService } from '../services/admin-ajouter-acteur-user/admin-acteur-user.service';
import { StatutService } from '../services/statutService';

@Component({
  selector: 'app-admin-ajouter-acteur-user',
  templateUrl: './admin-ajouter-acteur-user.page.html',
  styleUrls: ['./admin-ajouter-acteur-user.page.scss'],
})
export class AdminAjouterActeurUserPage implements OnInit {

  // nom: any;
  // prenom: any;
  // email: any;
  statut: any;

  // telephone:any


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
  numero: '';
  email: '';



  donner: any;
  erreur: any;

  constructor(private serviceActeur: AdminActeurUserService, private serviceStatut: StatutService) { }

  ngOnInit() {
    // On recupere les statut
    this.serviceStatut.afficherToutesLesStatus().subscribe(data=>{ this.statut = data ;});
  }



  ajouterUtilisateur() {

    // console.log("----------- "+this.statutChoix)

    if (this.nom != " " && this.prenom != '' && this.email != "" && this.statutChoix != null && this.numero != null) {

      this.acteurs.nom = this.nom;
      this.acteurs.prenom = this.prenom;
      this.acteurs.email = this.email;
      this.acteurs.statut.nom = this.statutChoix;
      this.acteurs.numero = this.numero;



      this.serviceActeur.ajouterActeur(this.acteurs, this.nom).subscribe(data => {
        this.donner = data;

        console.log("--------- " + this.donner.contenu)
 })
    }
    else {
      this.erreur = " Veuillez remplir tous les champs !";


    }



  }
}
