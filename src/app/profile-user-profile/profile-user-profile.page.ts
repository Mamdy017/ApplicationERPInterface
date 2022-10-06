import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-profile-user-profile',
  templateUrl: './profile-user-profile.page.html',
  styleUrls: ['./profile-user-profile.page.scss'],
})
export class ProfileUserProfilePage implements OnInit {

  menuBureau= true;
  menuMobile= false;

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
