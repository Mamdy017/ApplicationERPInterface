import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';
import { ListeUserService } from '../services/liste-user/liste-user.service';
import * as XLSX from 'xlsx';
import { Utilisateur } from '../modeles/utilisateur/utilisateur';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.page.html',
  styleUrls: ['./liste-utilisateur.page.scss'],
})
export class ListeUtilisateurPage implements OnInit {

  p=1;
  menuBureau: boolean = true;
  menuMobile: boolean = false;
  page:any;
  maListes:any
  donnees : any
  user: Utilisateur
  

  constructor(private serviceUtilisateur:ListeActeurService,private serveiceUtilisateur:ListeUserService,  public breakpointObserver: BreakpointObserver) { }
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
    this.serviceUtilisateur.lesUtilisateurs().subscribe(data=>{

      this.donnees = data
      // console.log("--------------- "+this.donnees.nom)

    })

  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }
  name = 'ListeActeurs.xlsx';
  exportToExcel(): void {
    const element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }


  // supprimer (Utilisateur:any){
  //   const confirmer = confirm('Êtes-vous sûr de supprimer cet utilisateur ?');
  //   if(confirmer==false){return;}
  //   this.serveiceUtilisateur.supprimerUtilisateur(Utilisateur.iduser).subscribe({
  //     next:(data)=>{
  //       console.log(Utilisateur.iduser);
  //       const index = this.user.indexOf(Utilisateur);
  //       this.user.splice(index,1)
  //     }
  //   })
  // }
}
