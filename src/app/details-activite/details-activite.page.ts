import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../Services/activite/activite.service';

@Component({
  selector: 'app-details-activite',
  templateUrl: './details-activite.page.html',
  styleUrls: ['./details-activite.page.scss'],
})
export class DetailsActivitePage implements OnInit {

  menuBureau: boolean = true;
  menuMobile: boolean = false;
  message: boolean = true;
  activites$: any;
  imgSrc:string = "assets/images";

  constructor(public breakpointObserver: BreakpointObserver,
    private activiteService: ActiviteService) { }

  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }

  recupererToutesLesActivites(){
    this.activiteService.recupererListeActivite().subscribe((data) =>{
      this.activites$ = data
     // this.imgSrc = data.photoactivite;
      console.log(data);
    })
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

      this.recupererToutesLesActivites();
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

  //recuperation des activité

 


}
