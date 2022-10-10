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
  salleFiltre: string;
  salleParDispo : Salle[] = [];
  p=1;
  maListes: Salle[];
  menuBureau= true;
  menuMobile= false;
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
      this.salleParDispo = data;
      console.table(this.maListes);
    });


  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

  filtreSalle(event: Event){
    const valeur = (event.target as HTMLSelectElement).value
    if(valeur == "Disponible"){
      this.salleParDispo = this.maListes.filter((liste : Salle) => liste.disponibilite==true);
      console.table(this.salleParDispo)
    }
    if(valeur == "Indisponible"){
      this.salleParDispo = this.maListes.filter((liste : Salle) => liste.disponibilite !== true);
      console.table(this.salleParDispo)
    }
   if(valeur == "Tout"){
      this.salleParDispo = this.maListes;
      console.table(this.salleParDispo)
    // }

    }
  }
}
