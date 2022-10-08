import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { Entite } from '../modeles/entite';
import { ServicesService } from '../services.service';
import { AccueilAdminService } from '../Services/accueil-admin/accueil-admin.service';
import { AccueilUserService } from '../Services/accueil-user/accueil-user.service';
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
  // /==============================================================================SESSION==========
  iduser: any;
  roles: any;
  noms_users: any;
  prenom_users: any;
  email_users: string;
  numero_users: string;
  // /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





  nom: any;
  prenom: any;
  nbre: any
  role: any
  KalansoJanvier: any;
  KalansoFe: any;
  KalansoMa: any;
  KalansoAv: any;
  KalansoMai: any;
  KalansoJuin: any;
  KalansoJuil: any;
  KalansoAout: any;
  KalansoSep: any;
  KalansoOct: any;
  KalansoNo: any;
  KalansoDe: any;

  fabJanvier: any;
  fabFe: any;
  fabMa: any;
  fabAv: any;
  fabMai: any;
  fabJuin: any;
  fabJuil: any;
  fabAout: any;
  fabSep: any;
  fabOct: any;
  fabNo: any;
  fabDe: any;

  fablabJanvier: any;
  fablabFe: any;
  fablabMa: any;
  fablabAv: any;
  fablabMai: any;
  fablabJuin: any;
  fablabJuil: any;
  fablabAout: any;
  fablabSep: any;
  fablabOct: any;
  fablabNo: any;
  fablabDe: any;
  afficheAnnee: any;
  afficherEntiteAdmin: Entite;



  constructor(private service: ServicesService, private serviceActeur: ListeActeurService,
    public breakpointObserver: BreakpointObserver, private route: Router,
    private serviceAccueil: AccueilUserService,private serviceAdminEntite:AccueilAdminService
  ) { }
  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  @ViewChild('barCanvas') public barCanvas: ElementRef;
  barChart: Chart<"bar", number[], any>;


  ngOnInit() {

    this.barChart; 


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
    this.iduser = sessionStorage.getItem("id_users");
    this.roles = sessionStorage.getItem("role_users");
    this.noms_users = sessionStorage.getItem("nom_users");
    this.prenom_users = sessionStorage.getItem("prenom_users",);
    this.email_users = sessionStorage.getItem("email_users");
    this.numero_users = sessionStorage.getItem("numero_users");



      // Recuperation des 4 entités =========================================================

      this.serviceAdminEntite.afficherEntiteAdmin().subscribe(data => {
        this.afficherEntiteAdmin=data;
        console.log("je suis les entites"+ this.afficherEntiteAdmin.nom);
      })






    // Ici on recupere le nombre total d'utilisateurs


    this.totalUtilisateur = this.serviceActeur.utilisateurTotal().subscribe(data => {
      this.nbre = data
    })

    // le statistique de kalanso

    this.KalansoJanvier = this.serviceActeur.KalansoJanvier().subscribe(data => {
      this.KalansoJanvier = data
    })

    this.KalansoFe = this.serviceActeur.KalansoFevier().subscribe(data => {
      this.KalansoFe = data
    })

    this.KalansoMa = this.serviceActeur.KalansoMars().subscribe(data => {
      this.KalansoMa = data
    })
    this.KalansoAv = this.serviceActeur.KalansoAvril().subscribe(data => {
      this.KalansoAv = data
    })
    this.KalansoMai = this.serviceActeur.KalansoMai().subscribe(data => {
      this.KalansoMai = data
    })
    this.KalansoJuin = this.serviceActeur.KalansoJuin().subscribe(data => {
      this.KalansoJuin = data
    })
    this.KalansoJuil = this.serviceActeur.KalansoJuillet().subscribe(data => {
      this.KalansoJuil = data
    })
    this.KalansoAout = this.serviceActeur.KalansoAout().subscribe(data => {
      this.KalansoAout = data
    })
    this.KalansoSep = this.serviceActeur.KalansoSep().subscribe(data => {
      this.KalansoSep = data
    })
    this.KalansoOct = this.serviceActeur.KalansoOct().subscribe(data => {
      this.KalansoOct = data
    })
    this.KalansoNo = this.serviceActeur.KalansoNo().subscribe(data => {
      this.KalansoNo = data
    })
    this.KalansoDe = this.serviceActeur.KalansoDe().subscribe(data => {
      this.KalansoDe = data
    })

    // fin du stistique de kalanso



    // le statistique de fab

    this.fabJanvier = this.serviceActeur.fabJanvier().subscribe(data => {
      this.fabJanvier = data
    })

    this.fabFe = this.serviceActeur.fabFevier().subscribe(data => {
      this.fabFe = data
    })

    this.fabMa = this.serviceActeur.fabMars().subscribe(data => {
      this.fabMa = data
    })
    this.fabAv = this.serviceActeur.fabAvril().subscribe(data => {
      this.fabAv = data
    })
    this.fabMai = this.serviceActeur.fabMai().subscribe(data => {
      this.fabMai = data
    })
    this.fabJuin = this.serviceActeur.fabJuin().subscribe(data => {
      this.fabJuin = data
    })
    this.fabJuil = this.serviceActeur.fabJuillet().subscribe(data => {
      this.fabJuil = data
    })
    this.fabAout = this.serviceActeur.fabAout().subscribe(data => {
      this.fabAout = data
    })
    this.fabSep = this.serviceActeur.fabSep().subscribe(data => {
      this.fabSep = data
    })
    this.fabOct = this.serviceActeur.fabOct().subscribe(data => {
      this.fabOct = data
    })
    this.fabNo = this.serviceActeur.fabNo().subscribe(data => {
      this.fabNo = data
    })
    this.fabDe = this.serviceActeur.fabDe().subscribe(data => {
      this.fabDe = data
    })

    // fin du stistique de fab


    // le statistique de fablab

    this.fablabJanvier = this.serviceActeur.fablabJanvier().subscribe(data => {
      this.fablabJanvier = data
    })

    this.fablabFe = this.serviceActeur.fablabFevier().subscribe(data => {
      this.fablabFe = data
    })

    this.fablabMa = this.serviceActeur.fablabMars().subscribe(data => {
      this.fablabMa = data
    })
    this.fablabAv = this.serviceActeur.fablabAvril().subscribe(data => {
      this.fablabAv = data
    })
    this.fablabMai = this.serviceActeur.fablabMai().subscribe(data => {
      this.fablabMai = data
    })
    this.fablabJuin = this.serviceActeur.fablabJuin().subscribe(data => {
      this.fablabJuin = data
    })
    this.fablabJuil = this.serviceActeur.fablabJuillet().subscribe(data => {
      this.fablabJuil = data
    })
    this.fablabAout = this.serviceActeur.fablabAout().subscribe(data => {
      this.fablabAout = data
    })
    this.fablabSep = this.serviceActeur.fablabSep().subscribe(data => {
      this.fablabSep = data
    })
    this.fablabOct = this.serviceActeur.fablabOct().subscribe(data => {
      this.fablabOct = data
    })
    this.fablabNo = this.serviceActeur.fablabNo().subscribe(data => {
      this.fablabNo = data
    })
    this.fablabDe = this.serviceActeur.fablabDe().subscribe(data => {
      this.fablabDe = data
    })

    // fin du stistique de fablab





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
      // this.serviceAccueil.afficherAnnee().subscribe(data => {
      //   this.afficheAnnee= data
      // })
      


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
          data: [this.KalansoJanvier, this.KalansoFe, this.KalansoMa, this.KalansoAv,
          this.KalansoMai, this.KalansoJuin, this.KalansoJuil, this.KalansoAout,
          this.KalansoSep, this.KalansoOct, this.KalansoNo, this.KalansoDe],
        }, {
          barPercentage: 0.8,
          barThickness: 'flex',
          label: "Fab",
          stack: "Base2",
          backgroundColor: "#A9A3A3",
          data: [this.fabJanvier, this.fabFe, this.fabMa, this.fabAv,
          this.fabMai, this.fabJuin, this.fabJuil, this.fabAout,
          this.fabSep, this.fabOct, this.fabNo, this.fabDe],
        },
        {
          barPercentage: 0.8,
          barThickness: 'flex',
          label: "Solidaire",
          stack: "Base3",
          backgroundColor: "#A2C07C",
          data: [this.fablabJanvier, this.fablabFe, this.fablabMa, this.fablabAv,
          this.fablabMai, this.fablabJuin, this.fablabJuil, this.fablabAout,
          this.fablabSep, this.fablabOct, this.fablabNo, this.fablabDe],
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
  deconnexion() {
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
  }
}
