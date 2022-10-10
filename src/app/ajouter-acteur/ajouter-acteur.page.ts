import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-acteur',
  templateUrl: './ajouter-acteur.page.html',
  styleUrls: ['./ajouter-acteur.page.scss'],
})
export class AjouterActeurPage implements OnInit {

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

}
