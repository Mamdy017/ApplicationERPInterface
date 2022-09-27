import { Component, OnInit } from '@angular/core';
import { AccueilUserService } from '../Services/accueil-user/accueil-user.service';

@Component({
  selector: 'app-accueil-user',
  templateUrl: './accueil-user.page.html',
  styleUrls: ['./accueil-user.page.scss'],
})
export class AccueilUserPage implements OnInit {
  totalSalleLibre:any;
  totalApprrenant:any;
  apprenantsTotal: any;
  participantTotal: any;
  

      constructor(private service:AccueilUserService) { }

      ngOnInit() {

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
})

  }

}
