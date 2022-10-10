import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
// import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuBureau: boolean = true;
  menuMobile: boolean = false;

  constructor(private route:Router) { }
  // /==============================================================================SESSION==========
  iduser:any;
  roles:any;
  noms_users:any;
  prenom_users:any;
 email_users: string;
 numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  actualise(): void{
    setInterval(
      ()=>{
      },100, clearInterval(1500));
  }

  ngOnInit() {

<<<<<<< HEAD
    // ===========================================================================SESSION VALEURS================================================
this.iduser =  sessionStorage.getItem("id_users");
this.roles = sessionStorage.getItem("role_users"); 
this.noms_users =  sessionStorage.getItem("nom_users");
this.prenom_users = sessionStorage.getItem("prenom_users",);
this.email_users = sessionStorage.getItem("email_users");
this.numero_users = sessionStorage.getItem("numero_users");

}
=======

    this.nom =  sessionStorage.getItem("nom_users")
    this.role =  sessionStorage.getItem("role_users")
    this.prenom =  sessionStorage.getItem("prenom_users")


   console.log("Je suis le role ========================== "+this.role);
>>>>>>> f6dc2ee8b4f7f4f1b4cd1d6534d723c045dafcdf

  // ===========================================================================SESSION VALEURS================================================


}
