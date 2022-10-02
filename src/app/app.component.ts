<<<<<<< HEAD

/*import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';*/

import { Component, OnInit } from '@angular/core';
=======
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
>>>>>>> 9a7dd4a223d711897825d4d78332544ce5daf781

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuBureau: boolean = true;
  menuMobile: boolean = false;

  constructor( public breakpointObserver: BreakpointObserver) { }

  actualise(): void{
    setInterval(
      ()=>{
      },100, clearInterval(1500));
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

<<<<<<< HEAD

 /* afficheMenuMobile(){
=======
  afficheMenuMobile(){
>>>>>>> 9a7dd4a223d711897825d4d78332544ce5daf781
    this.menuBureau = true;
    this.menuMobile = false;
  }

  cacherMenuMobile(){
    this.menuBureau = false;
    this.menuMobile = true;
  }



}