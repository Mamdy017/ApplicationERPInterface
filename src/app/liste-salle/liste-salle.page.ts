import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalleService } from '../services/salle';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-liste-salle',
  templateUrl: './liste-salle.page.html',
  styleUrls: ['./liste-salle.page.scss'],
})
export class ListeSallePage implements OnInit {

  // /==============================================================================SESSION==========
  iduser: any;
  roles: any;
  noms_users: any;
  prenom_users: any;
  email_users: string;
  numero_users: string;
  // /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



  p = 1;
  maListes: any;
  menuBureau = true;
  menuMobile = false;
  searchText: any;
  disponible: import("C:/Users/mccamara/Desktop/Nouveau dossier/ApplicationERPInterface/src/app/modeles/salle/salle").Salle;
  constructor(private serviceSalle: SalleService, public breakpointObserver: BreakpointObserver, private route: Router) { }

  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  ngOnInit() {


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

    this.serviceSalle.afficherToutesLesSalles().subscribe(data => {
      this.maListes = data;

      console.log('ma listes = ' + this.maListes);
    });


  }
  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }
  deconnexion() {
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
  }
  name = 'ListeDesSalles.xlsx';
  exportToExcel(): void {
    const element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

  //Afficher par disponibilité
  afficherDisponibilite(event) {
    this.serviceSalle.afficherSalleParDisponibilite(event).subscribe(data =>
      this.disponible = data)
  }

}
