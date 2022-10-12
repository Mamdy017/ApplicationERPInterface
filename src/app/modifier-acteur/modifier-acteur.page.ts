import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acteur } from '../modeles/acteur/acteur';
import { AdminActeurUserService } from '../services/admin-ajouter-acteur-user/admin-acteur-user.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-modifier-acteur',
  templateUrl: './modifier-acteur.page.html',
  styleUrls: ['./modifier-acteur.page.scss'],
})
export class ModifierActeurPage implements OnInit {
  donner: any;
  erreur: any;
  msg: any;
  menuBureau = true;
  menuMobile = false;
  obj: any;
  name: any;
  acteurModif: any;
  editForm: any;

// /==============================================================================SESSION==========
iduser:any;
roles:any;
noms_users:any;
prenom_users:any;
email_users: string;
numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  constructor() { }

  ngOnInit() {
    // ===========================================================================SESSION VALEURS================================================
this.iduser =  sessionStorage.getItem("id_users");
this.roles = sessionStorage.getItem("role_users"); 
this.noms_users =  sessionStorage.getItem("nom_users");
this.prenom_users = sessionStorage.getItem("prenom_users",);
this.email_users = sessionStorage.getItem("email_users");
this.numero_users = sessionStorage.getItem("numero_users");
  }
  resetForm(){
    this.nom = '';
    this.prenom = '';
    this.numero= '';
    this.email= '';
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


  public saveActeur(): void{
    this.modiferAct.idActeur = this.id;
    this.modiferAct.nom = this.nom;
    this.modiferAct.prenom = this.prenom;
    this.modiferAct.email = this.email;
    this.modiferAct.numero = this.numero;
    // eslint-disable-next-line no-cond-assign, eqeqeq
    if(this.nom == '' || this.prenom == '' || this.email == '' || this.numero == ''){
        this.erreur = 'Veuillez remplir tous les champs!';
     }
      else{
        this.service.modifierActeur(this.modiferAct, this.id).subscribe({
          next: () => this.saveComplete(),
        });
        this.resetForm();
      }
    }

public saveComplete(): void{
  this.router.navigate(['/liste-acteur']);
}
}
