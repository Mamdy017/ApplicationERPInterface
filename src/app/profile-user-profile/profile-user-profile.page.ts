import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-user-profile',
  templateUrl: './profile-user-profile.page.html',
  styleUrls: ['./profile-user-profile.page.scss'],
})
export class ProfileUserProfilePage implements OnInit {

  // /==============================================================================SESSION==========
  iduser:any;
  roles:any;
  noms_users:any;
  prenom_users:any;
 email_users: string;
 numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  menuBureau= true;
  menuMobile= false;

  constructor( public breakpointObserver: BreakpointObserver, private route:Router) { }
  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }

  ngOnInit() {


    // ===========================================================================SESSION VALEURS================================================
this.iduser =  sessionStorage.getItem("id_users");
this.roles = sessionStorage.getItem("role_users"); 
this.noms_users =  sessionStorage.getItem("nom_users");
this.prenom_users = sessionStorage.getItem("prenom_users",);
this.email_users = sessionStorage.getItem("email_users");
this.numero_users = sessionStorage.getItem("numero_users");

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
