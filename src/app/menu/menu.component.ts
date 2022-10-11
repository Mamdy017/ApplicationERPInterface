import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

    // ===========================================================================SESSION VALEURS================================================
    this.iduser = sessionStorage.getItem("id_users");
    this.roles = sessionStorage.getItem("role_users");

    if(this.roles == "user"){
      this.user = true;
    }else if(this.roles = "admin"){

      this.admin = true
    }else{
      this.respon = true;
    }
    this.prenom_users = sessionStorage.getItem("nom_users");
    this.prenom_users = sessionStorage.getItem("prenom_users",);
    this.email_users = sessionStorage.getItem("email_users");
    this.numero_users = sessionStorage.getItem("numero_users");

  }

}
