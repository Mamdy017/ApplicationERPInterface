import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { PostulantTire } from '../modeles/postulant-tire/postulant-tire';
import { PageListeTirageService } from '../Services/page-liste-tirage/page-liste-tirage.service';
import { PostulantTireService } from '../Services/postulant-tire/postulant-tire.service';

@Component({
  selector: 'app-postulant-tire',
  templateUrl: './postulant-tire.page.html',
  styleUrls: ['./postulant-tire.page.scss'],
})
export class PostulantTirePage implements OnInit {

  // /==============================================================================SESSION==========
  iduser: any;
  roles: any;
  noms_users: any;
  prenom_users: any;
  email_users: string;
  numero_users: string;
  PostulantTire:PostulantTire[];

  // /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  menuBureau = true;
  menuMobile = false;
  p = 1;
  searchText: any;
  // eslint-disable-next-line max-len
  constructor(private servicePostulant: PageListeTirageService, private route: ActivatedRoute,
    public breakpointObserver: BreakpointObserver, private routes: Router, private service: PostulantTireService) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  lesPersonnesTirees: any;

  page: number = 1
  nombre_homme: number = 0;
  nombre_femme: number = 0;
  genre: any
  idTirage: any
  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  // id_tirage : any
  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');

   this.route.paramMap.subscribe(params =>{
    const id = +params.get('id');
   });
    // ===========================================================================SESSION VALEURS================================================
    this.iduser = sessionStorage.getItem("id_users");
    this.roles = sessionStorage.getItem("role_users");
    this.noms_users = sessionStorage.getItem("nom_users");
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

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const id_tirages = +this.route.snapshot.params.idtirage;

    this.servicePostulant.postulantTirer(id_tirages).subscribe(data => {
      this.lesPersonnesTirees = data;

      console.log('Les personnes tirées lors du tirage 1' + this.lesPersonnesTirees);


    })

    const id_tirage = +this.route.snapshot.params["idtirage"];

    this.servicePostulant.postulantTirer(id_tirage).subscribe(data => {
      this.lesPersonnesTirees = data
      // this.Nombre=this.lesPersonnesTirees.lenght
      for (const pt of this.lesPersonnesTirees) {
        if (pt.genre == "Masculin") {
          this.nombre_homme += 1;
        }
        else {
          this.nombre_femme += 1; 
        }
      }


    });




  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }


  name = 'ListePostulantTire.xlsx';
  exportToExcel(): void {
    const element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

  deconnexion() {
    sessionStorage.clear();
    console.log('je suis le log')
    this.routes.navigateByUrl('/authentification');
  }
}
