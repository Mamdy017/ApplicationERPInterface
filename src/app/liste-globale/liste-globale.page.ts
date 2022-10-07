import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListePostulant } from '../modeles/liste-postulant/liste-postulant';
import { ListePostulantService } from '../Services/liste-postulant.service';

@Component({
  selector: 'app-liste-globale',
  templateUrl: './liste-globale.page.html',
  styleUrls: ['./liste-globale.page.scss'],
})
export class ListeGlobalePage implements OnInit {

  // /==============================================================================SESSION==========
  iduser:any;
  roles:any;
  noms_users:any;
  prenom_users:any;
 email_users: string;
 numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




  p =1;
  menuBureau = true;
  menuMobile = false;
  constructor(private serviceListe: ListePostulantService, public breakpointObserver: BreakpointObserver,private route:Router) { }

  listeTotal: any
  mesListe: any
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

    // ON RECUPERE LE NOMBRE TOTAL DE LISTE
    this.serviceListe.listeTotales().subscribe(data => { this.listeTotal = data })

    // ON RECUPERE LES LISTES
    this.serviceListe.mesListes().subscribe(data => {
      this.mesListe = data
      //console.log("Activite "+ this.mesListe.activate.nom)
      
    })



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
