import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';
import { SalleService } from '../services/salle';

@Component({
  selector: 'app-admin-accueil',
  templateUrl: './admin-accueil.page.html',
  styleUrls: ['./admin-accueil.page.scss'],
})
export class AdminAccueilPage implements OnInit {
  totalSalleLibre:any;

  totalUtilisateur:any;     // Nomre total d'utilisateurs 
  apprenantsTotal: any;     // Nomre total d'apprenants
  participantTotal: any;    // Nomre total des participants

    nom:any;
    prenom:any;
    nbre:any
  

      constructor(private service:ServicesService, private serviceActeur:ListeActeurService,public breakpointObserver: BreakpointObserver) { }

      ngOnInit() {

    // Ici on recupere le nombre total d'utilisateurs

        this.totalUtilisateur = this.serviceActeur.utilisateurTotal().subscribe(data=>{
          this.nbre = data
        })
    
    //    Chargement du nombre de salle disponoble
        this.service.totalSallesDisponible().subscribe(data=>{
          this.totalSalleLibre = data
        })
    // Ici on charge le nombre total des Apprenants
        this.service.apprenantOUParticipant("apprenant").subscribe(data=>{
          this.apprenantsTotal = data
        })
    // Ici on charge le nombre total des Participants
    this.service.apprenantOUParticipant("participant").subscribe(data=>{
      this.participantTotal = data

      // Ici on charge les sessions

      this.prenom = sessionStorage.getItem("prenom_users");
      this.nom = sessionStorage.getItem("nom_users")

})

  }

}
