import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-tache',
  templateUrl: './ajouter-tache.page.html',
  styleUrls: ['./ajouter-tache.page.scss'],
})
export class AjouterTachePage implements OnInit {
  menuBureau: boolean = true;
  menuMobile: boolean = false;
  constructor( public breakpointObserver: BreakpointObserver) { }
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
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

}
