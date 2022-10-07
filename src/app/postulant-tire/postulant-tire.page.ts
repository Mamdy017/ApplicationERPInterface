import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageListeTirageService } from '../Services/page-liste-tirage/page-liste-tirage.service';
import { PostulantTireService } from '../Services/postulant-tire/postulant-tire.service';

@Component({
  selector: 'app-postulant-tire',
  templateUrl: './postulant-tire.page.html',
  styleUrls: ['./postulant-tire.page.scss'],
})
export class PostulantTirePage implements OnInit {
  menuBureau: boolean = true;
  menuMobile: boolean = false;
page:number=1
  constructor(private servicePostulant:PageListeTirageService, private route:ActivatedRoute, public breakpointObserver: BreakpointObserver, private service: PostulantTireService) { }

  nombre_homme: number = 0;
  nombre_femme: number = 0;
  lesPersonnesTirees:any
  genre: any
  idTirage: any


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
      // const id = +this.route.snapshot.params["idTirage"];
    
      // this.service.homme(this.genre, this.idTirage).subscribe(data=>{
        
      //   this.nombre=data
  
      //   console.log("Les personnes hommes"+this.nombre)
  
      // })

    const id_tirage = +this.route.snapshot.params["idtirage"];

    this.servicePostulant.postulantTirer(id_tirage).subscribe(data=>{
      this.lesPersonnesTirees = data
      // this.Nombre=this.lesPersonnesTirees.lenght
      for (const pt of this.lesPersonnesTirees) {
        if(pt.genre == "Masculin"){
          this.nombre_homme += 1;
        }
        else{
          this.nombre_femme += 1;
        }
      }

    })

   

  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


}
