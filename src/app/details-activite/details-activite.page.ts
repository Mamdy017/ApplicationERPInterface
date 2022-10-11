import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { detailsActivite } from '../modeles/details-activite/details-activite';
import { ActiviteService } from '../Services/activite/activite.service';

@Component({
  selector: 'app-details-activite',
  templateUrl: './details-activite.page.html',
  styleUrls: ['./details-activite.page.scss'],
})
export class DetailsActivitePage implements OnInit {
  od:detailsActivite[]
  menuBureau: boolean = true;
  menuMobile: boolean = false;
  constructor(public breakpointObserver: BreakpointObserver, private serv:ActiviteService) { }

  // actualise(): void {
  //   setInterval(
  //     () => {
  //     }, 100, clearInterval(1500));
  // }
  ngOnInit() {
    // this.breakpointObserver
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
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }
  tout(){
    this.serv.afficherActiviter().subscribe(data=>{


      this.od=data;

    })
  }


}
