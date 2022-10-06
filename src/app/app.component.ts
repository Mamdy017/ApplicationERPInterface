
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  // menuBureau: boolean = true;
  // menuMobile: boolean = false;

  constructor( /*public breakpointObserver: BreakpointObserver*/) { }

  actualise(): void{
    setInterval(
      ()=>{
      },100, clearInterval(1500));
  }

  ngOnInit() {
  }
  darkmode=false;
  modetoggle(){
    this.darkmode=!this.darkmode;
    document.documentElement.setAttribute('data-theme',this.darkmode ? "dark" : "light");
  }
/*
  afficheMenuMobile(){
    this.menuBureau = true;
    this.menuMobile = false;
  }

  cacherMenuMobile(){
    this.menuBureau = false;
    this.menuMobile = true;
  }*/



}
