import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activite } from '../modeles/activite/activite';
import { GestionentiteService } from '../Services/gestionentite/gestionentite.service';

@Component({
  selector: 'app-details-activite',
  templateUrl: './details-activite.page.html',
  styleUrls: ['./details-activite.page.scss'],
})
export class DetailsActivitePage implements OnInit {
  activiteAvenir : Activite[];
  existeAvenir : boolean = true;
  existeEncours : boolean = true;
  activiteEncours : Activite[];
  activiteTerminer : Activite[];
  menuBureau: boolean = true;
  menuMobile: boolean = false;
  constructor(public breakpointObserver: BreakpointObserver, private serviceActivite : GestionentiteService) { }

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

      this.serviceActivite.globalActiviteEnCours().subscribe(data => {
        this.activiteEncours = data;
        if(this.activiteEncours.length == 0){
          this.existeEncours = false;
        }
        console.table("ururrrrrrrrrrrrrrrrrrr    " + this.existeEncours + "   rrrrrrrrrrrrrrrrrr")
      })
      this.serviceActivite.globalActiviteAvenir().subscribe(data => {
        this.activiteAvenir = data;
        if(this.activiteAvenir.length == 0){
          this.existeAvenir = false;
        }
        console.table("ururrrrrrrrrrrrrrrrrrr    " + this.existeAvenir + "   rrrrrrrrrrrrrrrrrr")

      })
      this.serviceActivite.globalActiviteAvenir().subscribe(data => {
        this.activiteEncours = data;
      })

  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


}
