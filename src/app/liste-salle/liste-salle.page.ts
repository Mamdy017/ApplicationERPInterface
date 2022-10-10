import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Salle } from '../modeles/salle/salle';
import { SalleService } from '../services/salle';

@Component({
  selector: 'app-liste-salle',
  templateUrl: './liste-salle.page.html',
  styleUrls: ['./liste-salle.page.scss'],
})
export class ListeSallePage implements OnInit {

  p=1;
  maListes: any;
  menuBureau= true;
  menuMobile= false;
  disponible:any
  constructor(private serviceSalle: SalleService, public breakpointObserver: BreakpointObserver) { }

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

    this.serviceSalle.afficherToutesLesSalles().subscribe(data =>{
      this.maListes = data;

      console.log('ma listes = '+this.maListes);
    });


  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

  //Afficher par disponibilité
  afficherDisponibilite(event) {
    this.serviceSalle.afficherSalleParDisponibilite(event).subscribe(data =>
      this.disponible = data)
  }

}
