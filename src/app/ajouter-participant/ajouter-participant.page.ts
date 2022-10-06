import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AjouterPostulantService } from '../Services/ajouter-postulant/ajouter-postulant.service';

@Component({
  selector: 'app-ajouter-participant',
  templateUrl: './ajouter-participant.page.html',
  styleUrls: ['./ajouter-participant.page.scss'],
})
export class AjouterParticipantPage implements OnInit {

  menuBureau: boolean = true;
  menuMobile: boolean = false;
  

  listes$!:any
  listes!:any

  constructor( public breakpointObserver: BreakpointObserver,
    private ajouterPostulant: AjouterPostulantService) { }


    // posterParticipant(){
    //   this.
    // }

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

      this.recupererListePostulant();
  }




  recupererListePostulant(){
    this.ajouterPostulant.recupererListePostulant().subscribe((data =>{
      this.listes$ = data;
    }))
  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


}
