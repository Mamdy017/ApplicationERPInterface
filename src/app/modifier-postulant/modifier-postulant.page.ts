import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postulant } from '../modeles/postulant/postulant';

@Component({
  selector: 'app-modifier-postulant',
  templateUrl: './modifier-postulant.page.html',
  styleUrls: ['./modifier-postulant.page.scss'],
})
export class ModifierPostulantPage implements OnInit {

// /==============================================================================SESSION==========
iduser:any;
roles:any;
noms_users:any;
prenom_users:any;
email_users: string;
numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  menuBureau: boolean = true;
  menuMobile: boolean = false;
  constructor(public breakpointObserver: BreakpointObserver, private route:Router) { }
actualise(): void {
  setInterval(
    () => {
    }, 100, clearInterval(1500));
}


//************************************************************************************

  // eslint-disable-next-line @typescript-eslint/member-ordering
  modifierpostulant = new Postulant();
  // eslint-disable-next-line @typescript-eslint/member-ordering
  nom_postulant= '';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  prenom_postulant = '';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  numero_postulant= '';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  email= '';
   // eslint-disable-next-line @typescript-eslint/member-ordering
   genre= '';
   // eslint-disable-next-line @typescript-eslint/member-ordering
   activite= '';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  id!: any;

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