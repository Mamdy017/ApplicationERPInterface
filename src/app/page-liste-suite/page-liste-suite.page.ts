import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostulantTireService } from '../Services/postulant-tire/postulant-tire.service';
import { TirageService } from '../Services/tirage/tirage.service';

@Component({
  selector: 'app-page-liste-suite',
  templateUrl: './page-liste-suite.page.html',
  styleUrls: ['./page-liste-suite.page.scss'],
})
export class PageListeSuitePage implements OnInit {
  menuBureau: boolean = true;
  menuMobile: boolean = false;
ListeTirage:any;
//nombre de postulant tire par genre
PostulantTireParGenre:any;

  constructor(public breakpointObserver: BreakpointObserver, private service: TirageService, 
              private route:ActivatedRoute, 
              private servicePostulantTire:PostulantTireService) { }
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

      //Recuperer les tirages sur une liste
      const id_liste = +this.route.snapshot.params["idliste"];
      this.service.TrouverTirageParListe(id_liste).subscribe(data=>{
        this.ListeTirage=data
       
    
        

   })       
      //Recuperer les nombre de postulant tiré par genre sur un tirage

      this.servicePostulantTire.TrouverNombrePostulantTireParGenre(this.PostulantTireParGenre.idtirage, this.PostulantTireParGenre.genre).subscribe(data=>{
       
        this.ListeTirage=this.PostulantTireParGenre.data
        console.log("C'est quoi le probleme" +this.PostulantTireParGenre)

    })
  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }
}
