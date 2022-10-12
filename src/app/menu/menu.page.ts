import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
// import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuBureau: boolean = true;
  menuMobile: boolean = false;

  constructor(private route: Router) { }
  iduser: any;
  roles: any;
  noms_users: any;
  prenom_users: any;
  email_users: string;
  numero_users: string;


  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }

  ngOnInit() {

    // ===========================================================================SESSION VALEURS================================================

  }

  // ===========================================================================SESSION VALEURS================================================


}
