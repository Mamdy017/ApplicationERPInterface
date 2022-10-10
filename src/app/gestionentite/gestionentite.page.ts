import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entite } from '../modeles/entite';
import { GestionentiteService } from '../Services/gestionentite/gestionentite.service';

@Component({
  selector: 'app-gestionentite',
  templateUrl: './gestionentite.page.html',
  styleUrls: ['./gestionentite.page.scss'],
})
export class GestionentitePage implements OnInit {
  entites : Entite[];
  img : string = "../../assets/icon/";
  menuBureau: boolean = true;
  menuMobile: boolean = false;

// /==============================================================================SESSION==========
iduser:any;
roles:any;
noms_users:any;
prenom_users:any;
email_users: string;
numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  constructor(public breakpointObserver: BreakpointObserver, private serviceEntite : GestionentiteService, private router : Router, private routes:Router) { }

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

      this.serviceEntite.afficherEntite().subscribe(data => {
        this.entites = data;
      });

      
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

  versEntite(entite : Entite){
    this.router.navigate(['/accueil-entite', entite.idEntite]);
  }
  deconnexion(){
    sessionStorage.clear();
    console.log('je suis le log')
    this.routes.navigateByUrl('/authentification');
    }
}
