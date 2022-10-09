import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { Acteur } from '../modeles/acteur/acteur';
// import { Acteur } from '../modeles/acteur/acteur';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';
// import { ListeActeurService } from '../Services/liste-acteur/liste-acteur.service';
//filter de recherche;

//import { FormsModule } from '@angular/forms';

import * as XLSX from 'xlsx';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-liste-acteur',
  templateUrl: './liste-acteur.page.html',
  styleUrls: ['./liste-acteur.page.scss'],
})
export class ListeActeurPage implements OnInit {
  acteurs: Acteur[];
  menuBureau = true;
  menuMobile = false;
  p = 1;
  searchTerm: string;
  // acteurs: any;

  //recherche
  // filterText:string = '';
  //la recherche
  // searchText: any;
  // numeros= true;
  //theme
  // otherTheme: boolean = false;

  // changeTheme() {
  //   this.otherTheme = !this.otherTheme ;
  // }


  constructor(private serviceActeur: ListeActeurService, private route: ActivatedRoute, public breakpointObserver: BreakpointObserver) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering




  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('idacteur');

   this.route.paramMap.subscribe(params =>{
    const id = +params.get('idacteur');
   });


    this.serviceActeur.afficherLesActeurs().subscribe(data => {
      this.acteurs = data;
      console.table(this.acteurs);
    });
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
    // const myTimeout = setTimeout(this.AfficherAction, 5000);
    // this.toogleTag()
    this.fonction();
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  AfficherAction() {
    this.cacherAction = true;
  }
  supprimer(acteur: any) {
    const confirmer = confirm('êtes-vous sûr de le supprimer ?');
    // eslint-disable-next-line eqeqeq
    if (confirmer == false) { return; }
    this.serviceActeur.supprimerActeur(acteur.idacteur).subscribe({
      next: (data) => {
        console.log(acteur.id);
        const index = this.acteurs.indexOf(acteur);
        this.acteurs.splice(index, 1);
      }
    });
  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

  //le telechargement du fichier
  // eslint-disable-next-line @typescript-eslint/member-ordering
  name = 'ListeActeurs.xlsx';

  // eslint-disable-next-line @typescript-eslint/member-ordering
  cacherAction = true;
  exportToExcel(): void {
    // this.cacherAction = false
    const element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);


    this.fonction();
    this.toogleTag();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.cacherAction;
  }
  /*Actualiser directement après export*/
  fonction(){
    setTimeout(()=>{
      this.cacherAction = true;
    }, 100);
  }

  /*Méthode pour cacherAction en un clique*/
  toogleTag() {
    this.cacherAction = false;
    // this.showMe=true;
    // this.fonction()
    this.fonction2();
  }

  fonction2(){
    setTimeout(()=>{
      this.cacherAction = true;
    }, 10000);
  }





}
