import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entite } from '../modeles/entite';
import { GestionentiteService } from '../Services/gestionentite/gestionentite.service';

@Component({
  selector: 'app-gestionentite',
  templateUrl: './gestionentite.page.html',
  styleUrls: ['./gestionentite.page.scss'],
})
export class GestionentitePage implements OnInit {
  entites : Entite[];
  menuBureau: boolean = true;
  menuMobile: boolean = false;
  constructor(public breakpointObserver: BreakpointObserver, private serviceEntite : GestionentiteService, private router : Router) { }

  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
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

      this.serviceEntite.afficherEntite().subscribe(data => {
        this.entites = data;
        console.table(this.entites[1]);
      });

      
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

  versEntite(entite : Entite){
    this.router.navigate(['/accueil-entite', entite.idEntite]);
  }

}
