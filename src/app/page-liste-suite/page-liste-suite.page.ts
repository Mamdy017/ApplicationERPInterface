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
nomliste:any
idTirage: any
libelleliste:any
libele_liste : string;
  constructor(public breakpointObserver: BreakpointObserver, private service: TirageService, 
              private route:ActivatedRoute, 
              private servicePostulantTire:PostulantTireService, private serviceListe: ListePostulantService, private servicenom:ListePostulantService) { }
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
    
      //STATISTIQUES PAR GENRE
        this.serviceListe.mesListes().subscribe(data => {
          this.mesListe = data;
          console.table(this.mesListe)
          for (const liste of this.mesListe) {
            if(liste.idliste == id_liste){
              this.libele_liste = liste.libelleliste;
            }
          }
          
        })  

   })   

  
      
  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

  
}
