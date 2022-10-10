import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
// import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.page.html',
  styleUrls: ['./liste-user.page.scss'],
})
export class ListeUserPage implements OnInit {


// /==============================================================================SESSION==========
iduser:any;
roles:any;
noms_users:any;
prenom_users:any;
email_users: string;
numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  menuBureau = true;
  menuMobile = false;
  page = 1;
  cp = 1;
  p=1;
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
  constructor( public breakpointObserver: BreakpointObserver, private route:Router) { }
  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  ngOnInit() {

// ===========================================================================SESSION VALEURS================================================
this.iduser =  sessionStorage.getItem("id_users");
this.roles = sessionStorage.getItem("role_users"); 
this.noms_users =  sessionStorage.getItem("nom_users");
this.prenom_users = sessionStorage.getItem("prenom_users",);
this.email_users = sessionStorage.getItem("email_users");
this.numero_users = sessionStorage.getItem("numero_users");


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

  deconnexion(){
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
    }

}
