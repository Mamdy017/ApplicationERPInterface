import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AccueilUserService } from '../Services/accueil-user/accueil-user.service';
// import { AccueilUserService } from '../Services/accueil-user/accueil-user.service';

@Component({
  selector: 'app-accueil-user',
  templateUrl: './accueil-user.page.html',
  styleUrls: ['./accueil-user.page.scss'],
})
export class AccueilUserPage implements OnInit {
  totalSalleLibre: any;
  totalApprrenant: any;
  apprenantsTotal: any;
  participantTotal: any;

  nom: any;
  prenom: any;
  menuBureau: boolean = true;
  menuMobile: boolean = false;

  constructor(private service: AccueilUserService, public breakpointObserver: BreakpointObserver) { }

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
    //    Chargement du nombre de salle disponoble
    this.service.totalSallesDisponible().subscribe(data => {
      this.totalSalleLibre = data
    })
    // Ici on charge le nombre total des Apprenants
    this.service.apprenantOUParticipant("apprenant").subscribe(data => {
      this.apprenantsTotal = data
    })
    // Ici on charge le nombre total des Participants
    this.service.apprenantOUParticipant("participant").subscribe(data => {
      this.participantTotal = data

      // Ici on charge les sessions

      this.prenom = sessionStorage.getItem("prenom_users");
      this.nom = sessionStorage.getItem("nom_users")

    })

  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

}