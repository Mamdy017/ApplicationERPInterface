import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AjouterPostulantService } from '../Services/ajouter-postulant/ajouter-postulant.service';
import { PageListeTirageService } from '../Services/page-liste-tirage/page-liste-tirage.service';

@Component({
  selector: 'app-liste-tirage',
  templateUrl: './liste-tirage.page.html',
  styleUrls: ['./liste-tirage.page.scss'],
})
export class ListeTiragePage implements OnInit {

  p=1;
  menuBureau: boolean = true;
  menuMobile: boolean = false;


  select_liste!: any;
  tirage_actuel!:any;
  tiragePourUneListe!:any;
  
  lesListes$!:any;
  uneListe!:any

  constructor(private serviceTirage:PageListeTirageService,public breakpointObserver: BreakpointObserver, private ajouterPostulantService: AjouterPostulantService) { }

  totalTirage:any
  listeTirages:any
  tirages$:any
  

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
    // RECUPERATION DU NOMBRE DE TIRAGE
    this.serviceTirage.totalTirage().subscribe(data=>{ this.totalTirage = data })

    // ICI ON RECUPERE LA LISTE DE TOUTE LES TIRAGES
    this.serviceTirage.lesTirages().subscribe(data=>{ this.listeTirages = data})

    this.ajouterPostulantService.recupererListePostulant().subscribe((data =>{
      this.lesListes$ = data;
    }))


  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }
  

  filtreUserParEntite(event) {

    if(this.select_liste != "Filtre par Liste"){


      console.log(event.target.value)

      this.tirage_actuel = event.target.value;

     this.serviceTirage.recupererLesTirageEnfonction(this.select_liste).subscribe((data)=>{

      this.tiragePourUneListe = data;

     })


    }



  }



}
