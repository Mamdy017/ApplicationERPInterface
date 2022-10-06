import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostulantTireService } from '../Services/postulant-tire/postulant-tire.service';
import { TirageService } from '../Services/tirage/tirage.service';
import { ListePostulantService } from "../Services/liste-postulant.service";

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
page:number=1;
liste: any
mesListe:any
  constructor(public breakpointObserver: BreakpointObserver, private service: TirageService, 
              private route:ActivatedRoute, 
              private servicePostulantTire:PostulantTireService, private serviceListe: ListePostulantService) { }
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
      console.log(id_liste)
      this.service.TrouverTirageParListe(id_liste).subscribe(data=>{
        this.ListeTirage=data
    
        this.service.TrouverNombrePostulantTireParGenre(this.PostulantTireParGenre.idtirage, this.PostulantTireParGenre.genre).subscribe(data=>{
          this.PostulantTireParGenre=data
          this.ListeTirage=this.PostulantTireParGenre.lenght;
          console.log("C'est quoi le probleme" + this.PostulantTireParGenre)
    })
        this.serviceListe.mesListes().subscribe(data => {
          this.mesListe = data
          // console.log("Activite "+this.mesListe.Activite)
        })
        // this.PostulantTireParGenre=this.ListeTirage
        // console.log("C'est quoi le probleme" +this.PostulantTireParGenre)
    //  this.service.TrouverNombrePostulantTireParGenre(this.PostulantTireParGenre.tirage_idtirage, this.PostulantTireParGenre.genre).subscribe(data=>{
       
    //     this.ListeTirage=this.PostulantTireParGenre.data
    //     console.log("C'est quoi le probleme" +this.PostulantTireParGenre)

    // })   

   })   

      // Recuperer les nombre de postulant tiré par genre sur un tirage
      // const id_tirage = +this.route.snapshot.params["idtirage"];
      // console.log(id_tirage)
      
  
      
  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

  
}
