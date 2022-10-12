import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acteur } from '../Modeles/acteur/acteur';
import { Statut } from '../modeles/statut/statut';
import { AdminActeurUserService } from '../services/admin-ajouter-acteur-user/admin-acteur-user.service';
import { StatutService } from '../services/statutService';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-ajouter-acteur-user',
  templateUrl: './admin-ajouter-acteur-user.page.html',
  styleUrls: ['./admin-ajouter-acteur-user.page.scss'],
})
export class AdminAjouterActeurUserPage implements OnInit {

// /==============================================================================SESSION==========
iduser:any;
roles:any;
noms_users:any;
prenom_users:any;
email_users: string;
numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



  // nom: any;
  // prenom: any;
  // email: any;
  statut: any;

  telephone: any;


  statutChoix: any;


  acteurs: Acteur = {
    nom: '',

    prenom: '',
    numero: '',
    email: '',
    statut: Statut,
    idActeur: 0
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


  constructor(private serviceActeur: AdminActeurUserService, /*private serviceStatut: StatutService*/ private route:Router) { }

  ngOnInit() {

      // ===========================================================================SESSION VALEURS================================================
this.iduser =  sessionStorage.getItem("id_users");
this.roles = sessionStorage.getItem("role_users"); 
this.noms_users =  sessionStorage.getItem("nom_users");
this.prenom_users = sessionStorage.getItem("prenom_users",);
this.email_users = sessionStorage.getItem("email_users");
this.numero_users = sessionStorage.getItem("numero_users");


    // // On recupere les statut
    // this.serviceStatut.afficherToutesLesStatus().subscribe(data=>{ this.statut = data ;});
  }

  resetForm(){
    this.nom='';
    this.prenom='';
    this.numero='';
    this.email='';
  }




  ajouterUtilisateur() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-danger',
        confirmButton: 'btn btn-primary',
        

      },
      heightAuto: false
    })


    // eslint-disable-next-line eqeqeq
    if (this.nom != '' && this.prenom != '' && this.email != '') {
      swalWithBootstrapButtons.fire({
        title: 'Cet acteur va etre ajouté !!!!',
        text: "Vous pouvez annuler ou confirmer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confimer!',
        cancelButtonText: 'Annuler!',

      }).then((result) => {
        if (result.isConfirmed) {
          this.acteurs.nom = this.nom;
          this.acteurs.prenom = this.prenom;
          this.acteurs.email = this.email;
          this.acteurs.numero = this.numero;
          this.serviceActeur.ajouterActeur(this.acteurs, this.statutChoix).subscribe(data => {
          this.donner = data;
          this.route.navigateByUrl("/liste-acteur")
              swalWithBootstrapButtons.fire(
                'Acteur ajouté avec succes!',
                'Vous êtes diriger vers la liste des acteurs.',
                'success',)
          // this.modif = 'Acteur ajouter avec succes';
          this.resetForm();
        console.log('--------- ' + this.donner.contenu);
      });
    }
        // }else {
        //   swalWithBootstrapButtons.fire(
        //     'Annulation réussie'  
        //   )
          
        // }
      })
        

      
    }
    else {
      console.log('--------- ERREUR!');
      swalWithBootstrapButtons.fire(
        'Veuillez remplir tous les champs !'       
     )
      // this.erreur = 'Veuillez remplir tous les champs !';
    }
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }
  deconnexion(){
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
    }
}
