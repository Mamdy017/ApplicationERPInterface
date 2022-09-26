//import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  menuBureau: boolean = true;
  menuMobile: boolean = false;

  constructor(/* public breakpointObserver: BreakpointObserver*/) { }

  actualise(): void{
    setInterval(
      ()=>{
      },100, clearInterval(1500));
  }

  ngOnInit() {

   /* this.breakpointObserver
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
    });*/

  }

  afficheMenuMobile(){
    this.menuBureau = true;
    this.menuMobile = false;
  }

  cacherMenuMobile(){
    this.menuBureau = false;
    this.menuMobile = true;
  }



}
