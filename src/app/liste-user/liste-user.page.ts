import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
// import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.page.html',
  styleUrls: ['./liste-user.page.scss'],
})
export class ListeUserPage implements OnInit {
  menuBureau = true;
  menuMobile = false;
  page = 1;
  cp = 1;
  data: any = [
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
  ];
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

  //le telechargement du fichier
  // eslint-disable-next-line @typescript-eslint/member-ordering
  name = 'ListeUtilisateurs.xlsx';
  exportToExcel(): void {
    const element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }



}
