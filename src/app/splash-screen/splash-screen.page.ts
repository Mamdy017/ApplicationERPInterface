import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  
  windowWidth: string;
  showSplash: boolean = true;


  constructor(private nav: Router) { }

  ngOnInit() {
  

      setTimeout (()=> {
         this.windowWidth = '-' + window.innerWidth + 'px';

         setTimeout(() => {
          this.showSplash = !this.showSplash;
         }, 500); 

         this.nav.navigate(['/authentification']) 
      }, 3000);
  }

}
