import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
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
  constructor(private serviceTirage:PageListeTirageService,public breakpointObserver: BreakpointObserver) { }

  totalTirage:any
  listeTirages:any

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

  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

}
