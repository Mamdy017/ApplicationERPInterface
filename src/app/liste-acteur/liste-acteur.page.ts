import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { Acteur } from '../modeles/acteur/acteur';
import {ActivatedRoute} from '@angular/router';
// import { Acteur } from '../modeles/acteur/acteur';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';
// import { ListeActeurService } from '../Services/liste-acteur/liste-acteur.service';
//filter de recherche;

//import { FormsModule } from '@angular/forms';

import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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



// /==============================================================================SESSION==========
iduser:any;
roles:any;
noms_users:any;
prenom_users:any;
email_users: string;
numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  constructor(private serviceActeur: ListeActeurService, private route: ActivatedRoute, private router: Router, public breakpointObserver: BreakpointObserver) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering




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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',

      },
      heightAuto: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Etes-vous sûre de vouloir supprimer cet acteur ????',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      // reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceActeur.supprimerActeur(acteur.idacteur).subscribe({
          next: (data) => {
            console.log(acteur.id);
            const index = this.acteurs.indexOf(acteur);
            this.acteurs.splice(index, 1);
            swalWithBootstrapButtons.fire(
              'Acteur supprimé avec succes!',
              // 'Vous êtes diriger vers la liste des utilisateurs.',
              'success',)

          }
        });
      }else{
        return;
      }
    })
      




    // const confirmer = confirm('êtes-vous sûr de le supprimer ?');
    // // eslint-disable-next-line eqeqeq
    // if (confirmer == false) { return; }
    // this.serviceActeur.supprimerActeur(acteur.idacteur).subscribe({
    //   next: (data) => {
    //     console.log(acteur.id);
    //     const index = this.acteurs.indexOf(acteur);
    //     this.acteurs.splice(index, 1);
    //   }
    // });
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
  deconnexion(){
    sessionStorage.clear();
    console.log('je suis le log')
    this.router.navigateByUrl('/authentification');
    }
}
