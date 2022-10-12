import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { DetailActiviteService } from '../Services/detail_activite.service';

@Component({
  selector: 'app-detail-activite',
  templateUrl: './detail-activite.page.html',
  styleUrls: ['./detail-activite.page.scss'],
})
export class DetailActivitePage implements OnInit {

  constructor(  public breakpointObserver: BreakpointObserver,  private route: Router,
    private routes : ActivatedRoute,
    private detailActiviteService: DetailActiviteService ) { }
  // /==============================================================================SESSION==========
  iduser:any;
  roles:any;
  noms_users:any;
  prenom_users:any;
 email_users: string;
 numero_users: string;
 menuBureau: boolean = true;
 menuMobile: boolean = false;

 detailsActivite:any;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

actualise(): void {
  setInterval(
    () => {
    }, 100, clearInterval(1500));
}


photo:any;
libelle:any
responsable:any
etat:any
dateDebut:any
datefin:any
objectifVise:any
salle:any

getDetailListes(){

  const idAct = this.routes.snapshot.params['idactivite']

  this.detailActiviteService.recupererDetailActivite(idAct).subscribe(data =>{
    this.detailsActivite = data;
    this.photo = this.detailsActivite.photo;
    this.libelle = this.detailsActivite.libelle
    this.dateDebut = this.detailsActivite.dateDebut
    this.responsable = this.detailsActivite.responsable
    this.etat = this.detailsActivite.etat
    this.datefin = this.detailsActivite.datefin
    this.objectifVise = this.detailsActivite.objectifVise
    this.salle = this.detailsActivite.salle
    console.log(this.detailsActivite)
  })
  

}



  ngOnInit() {
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
    // ===========================================================================SESSION VALEURS================================================
this.iduser =  sessionStorage.getItem("id_users");
this.roles = sessionStorage.getItem("role_users"); 
this.noms_users =  sessionStorage.getItem("nom_users");
this.prenom_users = sessionStorage.getItem("prenom_users",);
this.email_users = sessionStorage.getItem("email_users");
this.numero_users = sessionStorage.getItem("numero_users");

// ======================================================================

    this.getDetailListes();

  }

  deconnexion() {
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

}
