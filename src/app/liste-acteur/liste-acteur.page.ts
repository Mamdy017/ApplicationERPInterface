import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { Acteur } from '../modeles/acteur/acteur';
// import { Acteur } from '../modeles/acteur/acteur';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';
// import { ListeActeurService } from '../Services/liste-acteur/liste-acteur.service';

@Component({
  selector: 'app-liste-acteur',
  templateUrl: './liste-acteur.page.html',
  styleUrls: ['./liste-acteur.page.scss'],
})
export class ListeActeurPage implements OnInit {
  acteurs : Acteur[];
  menuBureau: boolean = true;
  menuMobile: boolean = false;

  constructor(private serviceActeur : ListeActeurService,public breakpointObserver: BreakpointObserver) { }

  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  ngOnInit() {
    this.serviceActeur.afficherLesActeurs().subscribe(data => {
      this.acteurs = data;
      console.table(this.acteurs);
    })
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
  }


  supprimer(acteur : any){
    let confirmer = confirm("êtes-vous sûr de le supprimer ?");
    if(confirmer == false) return;
    this.serviceActeur.supprimerActeur(acteur.idacteur).subscribe({
      next : (data) => {
        console.log(acteur.id)
        let index = this.acteurs.indexOf(acteur);
        this.acteurs.splice(index, 1);
      }
    })
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


}
