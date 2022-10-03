import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.page.html',
  styleUrls: ['./liste-user.page.scss'],
})
export class ListeUserPage implements OnInit {
  menuBureau: boolean = true;
  menuMobile: boolean = false;
  page = 1;
  cp = 1;
  data: any = [
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
  ];
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
