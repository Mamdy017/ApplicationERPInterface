import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageListeTirageService } from '../Services/page-liste-tirage/page-liste-tirage.service';

@Component({
  selector: 'app-postulant-tire',
  templateUrl: './postulant-tire.page.html',
  styleUrls: ['./postulant-tire.page.scss'],
})
export class PostulantTirePage implements OnInit {
  menuBureau: boolean = true;
  menuMobile: boolean = false;

  constructor(private servicePostulant:PageListeTirageService, private route:ActivatedRoute, public breakpointObserver: BreakpointObserver) { }

  lesPersonnesTirees:any
  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  // id_tirage : any
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
    const id_tirage = +this.route.snapshot.params["idtirage"];

    this.servicePostulant.postulantTirer(id_tirage).subscribe(data=>{
      this.lesPersonnesTirees = data

      console.log("Les personnes tirées lors du tirage 1"+this.lesPersonnesTirees.nom_postulant)

    })

  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


}
