import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ListePostulant } from '../modeles/liste-postulant/liste-postulant';
import { ListePostulantService } from '../Services/liste-postulant.service';

@Component({
  selector: 'app-liste-globale',
  templateUrl: './liste-globale.page.html',
  styleUrls: ['./liste-globale.page.scss'],
})
export class ListeGlobalePage implements OnInit {

  menuBureau: boolean = true;
  menuMobile: boolean = false;
  constructor(private serviceListe: ListePostulantService, public breakpointObserver: BreakpointObserver) { }
  liste: any
  listeTotal: any
  mesListe: any
  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
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

    // ON RECUPERE LE NOMBRE TOTAL DE LISTE
    this.serviceListe.listeTotales().subscribe(data => { this.listeTotal = data })

    // ON RECUPERE LES LISTES
    this.serviceListe.mesListes().subscribe(data => {
      this.mesListe = data
      // console.log("Activite "+this.mesListe.Activite)
    })



  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


}
