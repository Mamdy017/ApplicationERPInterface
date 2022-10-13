import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { ReportingService } from '../Services/reporting.service';
import { EntiteService } from '../Services/entite.service';
import { AlertController, AnimationController } from '@ionic/angular';
import { AccueilAdminService } from '../Services/accueil-admin/accueil-admin.service';
import { ActiviteService } from '../Services/activite/activite.service';
import { ListePostulantService } from '../Services/liste-postulant.service';
import { ListeUserService } from '../services/liste-user/liste-user.service';
import { Activite } from '../modeles/activite/activite';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.page.html',
  styleUrls: ['./reporting.page.scss'],
})
export class ReportingPage implements OnInit {menuBureau: boolean = true;
  menuMobile: boolean = false;
  p: 1

  // /==============================================================================SESSION==========
  iduser: any;
  roles: any;
  noms_users: any;
  prenom_users: any;
  email_users: string;
  numero_users: string;
  // /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  // ==================Les declarations ici ===============================
  lesActivites: any
  searchText: any;
  lesEntites: any;
  lesPersonnesTirer: any;
  elementVide: any
  affiche:any
  reponse:any
  select_liste: string;
  evenement:any
  donnees:any
  afficheAnnee:any
  etat:any
  activite:any
  liste:any
  Activite:Activite[]

  constructor(public breakpointObserver: BreakpointObserver,
    private serviceReporting: ReportingService,
    private serviceEntite: EntiteService,
    private alertController: AlertController,
    private animationCtrl: AnimationController,
    private route:Router,
    private adminService: AccueilAdminService,
    private activiteService:ActiviteService,
    private listePostulantService:ListePostulantService,
  ) { }

  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  ngOnInit() {// ===========================================================================SESSION VALEURS================================================
    this.iduser = sessionStorage.getItem("id_users");
    this.roles = sessionStorage.getItem("role_users");
    this.noms_users = sessionStorage.getItem("nom_users");
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
      console.log("voir si ça marche"+this.donnees)

         // =========================================== RECURATION : Activités =======================================
        this.serviceReporting.afficherReporting().subscribe(data =>{
          this.affiche = data
          console.log(this.affiche)

        })

          // =========================================== RECURATION Année =======================================

          this.adminService.afficherAnnee().subscribe(data =>{
            this.afficheAnnee = data
            console.log(this.afficheAnnee)
          })

          // =========================================== RECURATION activite =======================================

          this.serviceReporting.afficherEtatActivité().subscribe(data =>{
            this.etat = data
            console.log(this.etat+"me etat")
          })

          // =========================================== RECURATION liste postulant =======================================

          this.listePostulantService.mesListes().subscribe(data =>{
            this.liste = data
            console.log(this.liste+"me liste")
          })

           // =========================================== RECURATION etat activité =======================================

           this.activiteService.recupererListeActivite().subscribe(data =>{
            this.activite = data
            console.log(this.activite+"me activité")
          })


    // =========================================== RECURATION : Activités =======================================
    this.serviceReporting.afficherTouteLesActivite().subscribe(data => {
      this.lesActivites = data
    })

    // =========================================== RECURATION Entité =======================================

    this.serviceEntite.afficherEntite().subscribe(data => {
      this.lesEntites = data
      console.log(this.lesEntites+"gdfdfddfdgwdgdggdggg")
    })

  }
  
  

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Modal d'Affichage des Personnes tirées ++++++++++++++++++++++++++++

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };


  // ===================================ICI ON RECUPERE LES PERSONNES D'UNE ACTIVITE===========================================
  recId(idactivite: number) {
    this.serviceReporting.lesPersonnesTireValide(idactivite).subscribe(async data => {
      this.lesPersonnesTirer = data

      console.log("============ " + this.lesPersonnesTirer[0])

      

      if (this.lesPersonnesTirer[0] === undefined) {
        // alert("Cette activité n'as pas de tirage validé")

        const alert = await this.alertController.create({
          header: 'Desolé',
          subHeader: '',
          message: "Cette activité n'a pas de tirage validé sur une liste ",
          buttons: ['OK'],
        });

        await alert.present();

        
      }


    })

  }
  //-----PARTIE FILTRAGE----------

  //filtre par entite
  filtreUserParEntite(event) {



    if(event.target.value == "Année"){
     
      this.serviceReporting.afficherReporting().subscribe(data =>{
        this.affiche = data
        console.table(this.affiche)
       })
    }

    if(this.select_liste != "Filtre par Entité"){
      this.evenement = event.target.value
      console.log(event.target.value)
     this.serviceReporting.filtrerParEntite(this.select_liste).subscribe((data)=>{
      this.affiche = data
      console.table(this.affiche)
     })
    }
    else{
      this.serviceReporting.afficherReporting().subscribe(data =>{
        this.affiche = data
        console.table(this.affiche)
       })
  }
  }

  //filtre par libellé de la liste
  filtreUserParListe(event) {

    if(this.select_liste != "Filtre par liste"){
      this.evenement = event.target.value
      console.log(event.target.value)
     this.serviceReporting.filtreParListe(this.select_liste).subscribe((data)=>{
      this.affiche = data
      console.table(this.affiche)
     })
    }
    else{
      this.serviceReporting.afficherReporting().subscribe(data =>{
        this.affiche = data
        console.table(this.affiche)
       })
  }
  }

  //filtre par libellé de la liste
  filtreUserParActivite(event) {

    if(this.select_liste != "Filtre par liste"){
      this.evenement = event.target.value
      console.log(event.target.value)
     this.serviceReporting.filtreParActivite(this.select_liste).subscribe((data)=>{
      this.affiche = data
      console.table(this.affiche)
     })

    }
    else{
      this.serviceReporting.afficherReporting().subscribe(data =>{
        this.affiche = data
        console.table(this.affiche)
       })
  }
}

  //filtre par libellé de la etat de l'activité
  filtreActiviteParEtat(event) {

    if(this.select_liste != "Filtre par activite"){
      this.evenement = event.target.value
      console.log("voir si ça marche"+event.target.value)
     this.serviceReporting.filtreParEtat(this.select_liste).subscribe((data)=>{
      this.affiche = data
      console.table(this.affiche)
     })
    }
    else{
      this.serviceReporting.afficherReporting().subscribe(data =>{
        this.affiche = data
        console.table(this.affiche)
       })
  }
  }

   //filtre par année
   filtreActiviteParAnnee(event) {

    if(this.select_liste != "Filtre par activite"){
      this.evenement = event.target.value
      console.log("voir si ça marche"+event.target.value)
     this.serviceReporting.filtreParAnnee(this.select_liste).subscribe((data)=>{
      this.affiche = data
      console.table(this.affiche)
     })
    }
    else{
      this.serviceReporting.afficherReporting().subscribe(data =>{
        this.affiche = data
        console.table(this.affiche)
       })
  }
  }


  

  // Exportation du fichier

  name = 'lesPersonnesValider.xlsx';
  exportToExcel(): void {
    const element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
  }
  deconnexion(){
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
    }
}

