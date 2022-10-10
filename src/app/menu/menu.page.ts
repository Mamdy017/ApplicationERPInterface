import { Component, OnInit } from '@angular/core';
// import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuBureau: boolean = true;
  menuMobile: boolean = false;

  constructor() { }

  actualise(): void{
    setInterval(
      ()=>{
      },100, clearInterval(1500));
  }

  ngOnInit() {

  //   this.breakpointObserver
  //   .observe(['(max-width: 767px)'])
  //   .subscribe((state: BreakpointState) => {
  //     if (state.matches) {
  //       this.menuBureau = false;
  //       this.menuMobile = true;
  //       this.actualise();
  //     } else {
  //       this.menuBureau = true;
  //       this.menuMobile = false;
  //       this.actualise();
  //     }
  //   });

  // }

  // afficheMenuMobile(){
  //   this.menuBureau = true;
  //   this.menuMobile = false;
  // }

  // cacherMenuMobile(){
  //   this.menuBureau = false;
  //   this.menuMobile = true;
  // }



}
}
