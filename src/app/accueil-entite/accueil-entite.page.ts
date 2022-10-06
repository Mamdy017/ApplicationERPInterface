import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activite } from '../modeles/activite/activite';
import { Entite } from '../modeles/entite';
import { GestionentiteService } from '../Services/gestionentite/gestionentite.service';

@Component({
  selector: 'app-accueil-entite',
  templateUrl: './accueil-entite.page.html',
  styleUrls: ['./accueil-entite.page.scss'],
})
export class AccueilEntitePage implements OnInit {
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
     private route : ActivatedRoute) { }


  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  
  ngOnInit() {
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
            console.table(this.nom_entite)
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
      })

      this.serviceEntite.activiteEnCours(id).subscribe(data => {
        this.activite_encours = data;
      })
      this.serviceEntite.activiteAvenir(id).subscribe(data => {
        this.activite_avenir = data;
      })

  }  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

}
