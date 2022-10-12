import { Component, OnInit } from '@angular/core';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  numero_users: string;
  email_users: string;
  prenom_users: string;
  respon: boolean;
  admin: boolean;
  roles: string;
  user: boolean;
  iduser: string;
  donnees: any;

  droit:any
  ID: any;
  nom_users: string;

  constructor(private serviceUtilisateur : ListeActeurService) { }

  ngOnInit() {

    this.iduser = sessionStorage.getItem("id_users");
    this.roles = sessionStorage.getItem("role_users");
    this.nom_users = sessionStorage.getItem("nom_users");
    this.prenom_users = sessionStorage.getItem("prenom_users",);
    this.email_users = sessionStorage.getItem("email_users");
    this.numero_users = sessionStorage.getItem("numero_users");

    this.serviceUtilisateur.lesUtilisateurs().subscribe(data => {
      this.donnees = data
      
      for(var a of this.donnees)
       this.ID = a.idusers
        if(a.idusers = this.iduser){
          this.droit = true
        console.log(" nous sommes ok ")
       }
      

    })

    // ===========================================================================SESSION VALEURS================================================


    // ICI ON VERIFIE LES ID
    

    if(this.roles == "user"){
      this.user = true;
    }else if(this.roles = "admin"){

      this.admin = true
    }else{
      this.respon = true;
    }
   

  }

}
