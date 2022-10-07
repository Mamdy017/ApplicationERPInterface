import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Entite } from '../modeles/entite';
import { ServicesService } from '../services.service';
import { AccueilAdminService } from '../Services/accueil-admin/accueil-admin.service';
import { EntiteService } from '../Services/entite.service';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';

@Component({
  selector: 'app-admin-accueil',
  templateUrl: './admin-accueil.page.html',
  styleUrls: ['./admin-accueil.page.scss'],
})
export class AdminAccueilPage implements OnInit {
  totalSalleLibre: any;
  menuBureau: boolean = true;
  menuMobile: boolean = false;

  totalUtilisateur: any;     // Nomre total d'utilisateurs 
  apprenantsTotal: any;     // Nomre total d'apprenants
  participantTotal: any;    // Nomre total des participants

  nom: any;
  prenom: any;
  nbre: any
  role:any
  afficherEntiteAdmin:any;
  entite:Entite
  afficheAnnee:any


  constructor(private service: ServicesService,
     private serviceActeur: ListeActeurService,
     private serviceAccueil: AccueilAdminService,
     public breakpointObserver: BreakpointObserver) { }
  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  @ViewChild('barCanvas') public barCanvas: ElementRef;
  barChart: Chart<"bar", number[], any>;


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

    // Ici on recupere le nombre total d'utilisateurs


    this.totalUtilisateur = this.serviceActeur.utilisateurTotal().subscribe(data => {
      this.nbre = data
    })

    //Afficher les entités de l'admin
    this.serviceAccueil.afficherEntiteAdmin().subscribe(data =>{
      this.afficherEntiteAdmin = data
      console.log(this.afficherEntiteAdmin+"dvvvvvvvvvv")
    })


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

      //affiche année
      this.serviceAccueil.afficherAnnee().subscribe(data => {
        this.afficheAnnee= data
      })


      // Ici on charge les sessions

      this.prenom = sessionStorage.getItem("prenom_users");
      this.nom = sessionStorage.getItem("nom_users");
      this.role = sessionStorage.getItem("role_user")
      

    })

  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


  ionViewDidEnter() {
    this.barChatMethod();
  }
  barChatMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [{
          barPercentage: 0.8,
          barThickness: 'flex',
          label: "Kalanso",
          stack: "Base",
          backgroundColor: "#F3A774",
          data: [10, 20, 30, 50, 7, 9, 5, 2, 8, 10, 11, 4],
        }, {
          barPercentage: 0.8,
          barThickness: 'flex',
          label: "Fab",
          stack: "Base2",
          backgroundColor: "#A9A3A3",
          data: [9, 5, 40, 12, 7, 9, 5, 2, 8, 10, 11, 4],
        },
        {
          barPercentage: 0.8,
          barThickness: 'flex',
          label: "Solidaire",
          stack: "Base3",
          backgroundColor: "#A2C07C",
          data: [9, 5],
        }

        ]
      },
      options: {
        scales: {
          myScale: {
            type: 'logarithmic',
            position: 'right', // `axis` is determined by the position as `'y'`
          }
        }
      }
    })
  }
}
