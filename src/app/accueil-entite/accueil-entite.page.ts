import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';
import { Activite } from '../modeles/activite/activite';
import { Entite } from '../modeles/entite';
import { GestionentiteService } from '../Services/gestionentite/gestionentite.service';

@Component({
  selector: 'app-accueil-entite',
  templateUrl: './accueil-entite.page.html',
  styleUrls: ['./accueil-entite.page.scss'],
})
export class AccueilEntitePage implements OnInit {



  // /==============================================================================SESSION==========
  iduser: any;
  roles: any;
  noms_users: any;
  prenom_users: any;
  email_users: string;
  numero_users: string;
  // /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  p = 1;
  nom_res: string;
  prenom_res: string;
  img_res: string;

  responsables: any;
  encours: boolean = false;
  avenir: boolean = false;
  nom_responsable: string;
  prenom_responsable: string;
  img_responsable: string;

  nom_entite: Entite;
  activite_encours: Activite[];
  activite_avenir: Activite[];
  nombre_formation: number;
  nombre_talk: number;
  nombre_evennement: number;
  menuBureau: boolean = true;
  menuMobile: boolean = false;
  formation: any;
  dec: number = 0;
  nov: number = 0;
  oct: number = 0;
  sep: number = 0;
  au: number = 0;
  juil: number = 0;
  jui: number = 0;
  mai: number = 0;
  av: number = 0;
  mar: number = 0;
  fe: number = 0;
  jan: number = 0;


  dec1: number = 0;
  nov1: number = 0;
  oct1: number = 0;
  sep1: number = 0;
  au1: number = 0;
  juil1: number = 0;
  jui1: number = 0;
  mai1: number = 0;
  av1: number = 0;
  mar1: number = 0;
  fe1: number = 0;
  jan1: number = 0;

  dec2: number = 0;
  nov2: number = 0;
  oct2: number = 0;
  sep2: number = 0;
  au2: number = 0;
  juil2: number = 0;
  jui2: number = 0;
  mai2: number = 0;
  av2: number = 0;
  mar2: number = 0;
  fe2: number = 0;
  jan2: number = 0;

  constructor(public breakpointObserver: BreakpointObserver,
    private serviceEntite: GestionentiteService,
    private route: ActivatedRoute, private routes: Router) { }


  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  @ViewChild('barCanvas') public barCanvas: ElementRef;
  barChart: Chart<"bar", number[], any>;


  ngOnInit() {
    
    this.barChart;
    this.barCanvas;
    this.ionViewDidEnter;
    this.barChatMethod;

    // ===========================================================================SESSION VALEURS================================================
    this.iduser = sessionStorage.getItem("id_users");
    this.roles = sessionStorage.getItem("role_users");
    this.noms_users = sessionStorage.getItem("nom_users");
    this.prenom_users = sessionStorage.getItem("prenom_users",);
    this.email_users = sessionStorage.getItem("email_users");
    this.numero_users = sessionStorage.getItem("numero_users");

    const id = this.route.snapshot.params['id_entite']
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
      for (const entie of data) {
        if (entie.idEntite == id) {
          this.nom_entite = entie.nom;
          console.log("Bonjours ici dans la boucle " + data)
        }
      }
      console.log("Bonjours ici apres la boucle " + data)

    });

    this.serviceEntite.nombreFormation(id).subscribe(data => {
      this.nombre_formation = data;
    });


    this.serviceEntite.formation(id).subscribe(data => {
      this.formation = data;
      console.log("°°°°°°°°°°°°°°°°°°°°°")
      console.log(this.formation[0].mois)
      for (const ft of this.formation) {
        if (ft.mois == 1) {
          this.jan += 1;
          console.log("oublie pas jan}}}}}}}}}}===============")
        }
        if (ft.mois == 2) {
          this.fe += 1;
          console.log("oublie pas fe }}}}}}}}}}===============")
        }
        if (ft.mois == 3) {
          this.mar += 1;
          console.log("oublie pas mar }}}}}}}}}}===============")
        }
        if (ft.mois == 4) {
          this.av += 1;
          console.log("oublie pas av }}}}}}}}}}===============")
        }
        if (ft.mois == 5) {
          this.mai += 1;
          console.log("oublie pas mai }}}}}}}}}}===============")
        }
        if (ft.mois == 6) {
          this.jui += 1;
          console.log("oublie pas juin }}}}}}}}}}===============")
        }
        if (ft.mois == 7) {
          this.juil += 1;
          console.log("oublie pas juil }}}}}}}}}}===============")
        }
        if (ft.mois == 8) {
          this.au += 1;
          console.log("oublie pas aout}}}}}}}}}}===============")
        }
        if (ft.mois == 9) {
          this.sep += 1;
          console.log("oublie pas septempre }}}}}}}}}}===============")
        }
        if (ft.mois === 10) {
          this.oct += 1;
          console.log("oublie pas octobre }}}}}}}}}}===============  " + this.oct)
        }
        if (ft.mois == 11) {
          this.nov += 1;
          console.log("oublie pas novembre }}}}}}}}}}===============")
        }
        if (ft.mois == 12) {
          this.dec += 1;
          console.log("oublie pas decembre }}}}}}}}}}===============")
        }

      }
    })

    this.serviceEntite.talk(id).subscribe(data => {
      this.formation = data;
      console.log("°°°°°°°°°°°°°°°°°°°°°")
      console.log(this.formation[0].mois)
      for (const ft of this.formation) {
        if (ft.mois == 1) {
          this.jan1 += 1;
          console.log("oublie pas jan}}}}}}}}}}===============")
        }
        if (ft.mois == 2) {
          this.fe1 += 1;
          console.log("oublie pas fe }}}}}}}}}}===============")
        }
        if (ft.mois == 3) {
          this.mar1 += 1;
          console.log("oublie pas mar }}}}}}}}}}===============")
        }
        if (ft.mois == 4) {
          this.av1 += 1;
          console.log("oublie pas av }}}}}}}}}}===============")
        }
        if (ft.mois == 5) {
          this.mai1 += 1;
          console.log("oublie pas mai }}}}}}}}}}===============")
        }
        if (ft.mois == 6) {
          this.jui1 += 1;
          console.log("oublie pas juin }}}}}}}}}}===============")
        }
        if (ft.mois == 7) {
          this.juil1 += 1;
          console.log("oublie pas juil }}}}}}}}}}===============")
        }
        if (ft.mois == 8) {
          this.au1 += 1;
          console.log("oublie pas aout}}}}}}}}}}===============")
        }
        if (ft.mois == 9) {
          this.sep1 += 1;
          console.log("oublie pas septempre }}}}}}}}}}===============")
        }
        if (ft.mois === 10) {
          this.oct1 += 1;
          console.log("oublie pas octobre }}}}}}}}}}===============  " + this.oct)
        }
        if (ft.mois == 11) {
          this.nov1 += 1;
          console.log("oublie pas novembre }}}}}}}}}}===============")
        }
        if (ft.mois == 12) {
          this.dec1 += 1;
          console.log("oublie pas decembre }}}}}}}}}}===============")
        }

      }
    })

    this.serviceEntite.eve(id).subscribe(data => {
      this.formation = data;
      console.log("°°°°°°°°°°°°°°°°°°°°°")
      console.log(this.formation[0].mois)
      for (const ft of this.formation) {
        if (ft.mois == 1) {
          this.jan2 += 1;
          console.log("oublie pas jan}}}}}}}}}}===============")
        }
        if (ft.mois == 2) {
          this.fe2 += 1;
          console.log("oublie pas fe }}}}}}}}}}===============")
        }
        if (ft.mois == 3) {
          this.mar2 += 1;
          console.log("oublie pas mar }}}}}}}}}}===============")
        }
        if (ft.mois == 4) {
          this.av2 += 1;
          console.log("oublie pas av }}}}}}}}}}===============")
        }
        if (ft.mois == 5) {
          this.mai2 += 1;
          console.log("oublie pas mai }}}}}}}}}}===============")
        }
        if (ft.mois == 6) {
          this.jui2 += 1;
          console.log("oublie pas juin }}}}}}}}}}===============")
        }
        if (ft.mois == 7) {
          this.juil2 += 1;
          console.log("oublie pas juil }}}}}}}}}}===============")
        }
        if (ft.mois == 8) {
          this.au2 += 1;
          console.log("oublie pas aout}}}}}}}}}}===============")
        }
        if (ft.mois == 9) {
          this.sep2 += 1;
          console.log("oublie pas septempre }}}}}}}}}}===============")
        }
        if (ft.mois === 10) {
          this.oct2 += 1;
          console.log("oublie pas octobre }}}}}}}}}}===============  " + this.oct)
        }
        if (ft.mois == 11) {
          this.nov2 += 1;
          console.log("oublie pas novembre }}}}}}}}}}===============")
        }
        if (ft.mois == 12) {
          this.dec2 += 1;
          console.log("oublie pas decembre }}}}}}}}}}===============")
        }

      }
    })





    this.serviceEntite.nombreTalk(id).subscribe(data => {
      this.nombre_talk = data;
    });

    this.serviceEntite.nombreEvennement(id).subscribe(data => {
      this.nombre_evennement = data;
    });

    this.serviceEntite.activiteAvenir(id).subscribe(data => {
      this.activite_avenir = data;
      if (this.activite_avenir.length == 0) {
        this.avenir = true;
      };
    });

    this.serviceEntite.activiteEnCours(id).subscribe(data => {
      this.activite_encours = data;
      if (this.activite_encours.length == 0) {
        this.encours = true;
      };
    });

    this.serviceEntite.responsableEntite(id).subscribe(data => {
      this.responsable = data;
      this.nom_responsable = this.responsable[0][0];
      this.prenom_responsable = this.responsable[0][1];
      this.img_responsable = this.responsable[0][2]
      console.table("==============  " + this.responsable[0][2])
    })




  } 
  
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


  responsable(entite: number) {
    if (entite == 1) {
      this.nom_res == "Diallo";
      this.prenom_res == "Kaou";
      this.img_res == "assets/icon/user.png";
    }
    if (entite == 2) {
      this.nom_res == "Maïga";
      this.prenom_res == "Abdoulaziz";
      this.img_res == "assets/icon/user.png";
    }
    if (entite == 3) {
      this.nom_res == "Koloma";
      this.prenom_res == "Jeremi";
      this.img_res == "assets/icon/user.png";
    }
    if (entite == 6) {
      this.nom_res == "Diarra";
      this.prenom_res == "Diarra";
      this.img_res == "assets/icon/user.png";
    }

  }
  deconnexion() {
    sessionStorage.clear();
    console.log('je suis le log')
    this.routes.navigateByUrl('/authentification');
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
          label: "Formations",
          stack: "Base",
          backgroundColor: "#FF6600",
          data: [this.jan, this.fe, this.mar, this.av,
          this.mai, this.jui, this.juil, this.au,
          this.sep, this.oct, this.nov, this.dec],
        },
        {
          barPercentage: 0.8,
          barThickness: 'flex',
          label: "Talks",
          stack: "Base2",
          backgroundColor: "#24BB9D",
          data: [this.jan1, this.fe1, this.mar1, this.av1,
          this.mai1, this.jui1, this.juil1, this.au1,
          this.sep1, this.oct1, this.nov1, this.dec1],
        },
        {
          barPercentage: 0.8,
          barThickness: 'flex',
          label: "Evènnements",
          stack: "Base2",
          backgroundColor: "#202020",
          data: [this.jan2, this.fe2, this.mar2, this.av2,
          this.mai2, this.jui2, this.juil2, this.au2,
          this.sep2, this.oct2, this.nov2, this.dec2],
        },


        ],

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
