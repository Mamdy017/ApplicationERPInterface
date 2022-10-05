import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
import { PageListeTirageService } from '../Services/page-liste-tirage/page-liste-tirage.service';

@Component({
  selector: 'app-postulant-tire',
  templateUrl: './postulant-tire.page.html',
  styleUrls: ['./postulant-tire.page.scss'],
})
export class PostulantTirePage implements OnInit {
  menuBureau= true;
  menuMobile= false;
  p=1;

  // eslint-disable-next-line max-len
  constructor(private servicePostulant: PageListeTirageService, private route: ActivatedRoute, public breakpointObserver: BreakpointObserver) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  lesPersonnesTirees: any;
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
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const id_tirage = +this.route.snapshot.params.idtirage;

    this.servicePostulant.postulantTirer(id_tirage).subscribe(data=>{
      this.lesPersonnesTirees = data;

      console.log('Les personnes tirées lors du tirage 1'+this.lesPersonnesTirees.nom_postulant);

    });

  }
  
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

  //le telechargement du fichier
  // eslint-disable-next-line @typescript-eslint/member-ordering
  name = 'ListePostulantTire.xlsx';
  exportToExcel(): void {
    const element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }


}
