import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from '../modeles/Tache';
import { ActiviteService } from '../Services/activite/activite.service';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';
import { TacheService } from '../Services/TacheService';

@Component({
  selector: 'app-ajouter-tache',
  templateUrl: './ajouter-tache.page.html',
  styleUrls: ['./ajouter-tache.page.scss'],
})
export class AjouterTachePage implements OnInit {

  iduser:any;
  roles:any;
  noms_users:any;
  prenom_users:any;
  email_users: string;
  numero_users: string;
  // /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
    menuBureau: boolean = true;
    menuMobile: boolean = false;
  
    designations:any;
    users:any
    libelleDesignation:any
  
    idusers:any
    dateDebut:Date;
    datefin:Date;
  
    tache: Tache = {
      datedebut: new Date(),
      datefin: new Date()
    };
  
  
  
  
    constructor( public breakpointObserver: BreakpointObserver,private route:Router,
      private routes : ActivatedRoute, private activiteService: ActiviteService,
      private tacheService: TacheService,
      private utilisateurs: ListeActeurService) { }
  
      getDesignation(){
        this.tacheService.recupererDesignation().subscribe(data =>{
          this.designations = data
        });
      }
  
      getListeUsers() {
        this.utilisateurs.lesUtilisateurs().subscribe((data) => {
          this.users = data
         
        })
      }
  
  
    addTaches(){
      const idAct = this.routes.snapshot.params['id']
      // alert(this.idusers)
      this.tache.datedebut = this.dateDebut;
      this.tache.datefin = this.datefin;
      if(this.idusers == null){
        this.idusers = "null"
      }
      this.tacheService.ajouterTaches(this.tache, this.idusers, idAct, this.libelleDesignation).subscribe(data =>{
       //this.formateursExternes = data
      })
    }
  
  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
    ngOnInit() {
  
      this.getListeUsers();
  
  // ===========================================================================SESSION VALEURS================================================
  this.iduser =  sessionStorage.getItem("id_users");
  this.roles = sessionStorage.getItem("role_users"); 
  this.noms_users =  sessionStorage.getItem("nom_users");
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
  
        this.getDesignation();
    }
    afficheMenuMobile() {
      this.menuBureau = true;
      this.menuMobile = false;
    }
    deconnexion(){
      sessionStorage.clear();
      console.log('je suis le log')
      this.route.navigateByUrl('/authentification');
      }
  
}
