import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
iduser:any;
roles:any;
noms_users:any;
prenom_users:any;
email_users: string;
numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  nom_res : string;
  prenom_res : string;
  img_res : string;

  responsables : any;
  encours : boolean = false;
  avenir : boolean = false;
  nom_responsable : string;
  prenom_responsable : string;
  img_responsable : string;

  nom_entite : Entite;
  activite_encours : Activite [];
  activite_avenir : Activite [];
  nombre_formation : number;
  nombre_talk : number;
  nombre_evennement : number;
  menuBureau: boolean = true;
  menuMobile: boolean = false;

  constructor( public breakpointObserver: BreakpointObserver,
     private serviceEntite : GestionentiteService,
     private route : ActivatedRoute , private routes:Router) { }


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

    const id = this.route.snapshot.params['id']
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
          if(entie.idEntite == id){
            this.nom_entite = entie.nom;
          }
        }
      });
      
      this.serviceEntite.nombreFormation(id).subscribe(data => {
        this.nombre_formation = data;
      });
      
      this.serviceEntite.nombreTalk(id).subscribe(data => {
        this.nombre_talk = data;
      });

      this.serviceEntite.nombreEvennement(id).subscribe(data => {
        this.nombre_evennement = data;
      });
      
      this.serviceEntite.activiteAvenir(id).subscribe(data => {
        this.activite_avenir = data;
        if(this.activite_avenir.length == 0){
          this.avenir = true;
        };
      });

      this.serviceEntite.activiteEnCours(id).subscribe(data => {
        this.activite_encours = data;
        if(this.activite_encours.length == 0){
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

  }  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


  responsable (entite : number){
    if(entite == 1){
      this.nom_res == "Diallo";
      this.prenom_res == "Kaou";
      this.img_res == "assets/icon/user.png";
    }
    if(entite == 2){
      this.nom_res == "Maïga";
      this.prenom_res == "Abdoulaziz";
      this.img_res == "assets/icon/user.png";
    }
    if(entite == 3){
      this.nom_res == "Koloma";
      this.prenom_res == "Jeremi";
      this.img_res == "assets/icon/user.png";
    }
    if(entite == 6){
      this.nom_res == "Diarra";
      this.prenom_res == "Diarra";
      this.img_res == "assets/icon/user.png";
    }
    
  }
  deconnexion(){
    sessionStorage.clear();
    console.log('je suis le log')
    this.routes.navigateByUrl('/authentification');
    }

}
