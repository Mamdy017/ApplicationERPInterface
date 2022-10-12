import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Tirage } from '../modeles/tirage/tirage';
import { AjouterPostulantService } from '../Services/ajouter-postulant/ajouter-postulant.service';
import { PageListeTirageService } from '../Services/page-liste-tirage/page-liste-tirage.service';

@Component({
  selector: 'app-liste-tirage',
  templateUrl: './liste-tirage.page.html',
  styleUrls: ['./liste-tirage.page.scss'],
})
export class ListeTiragePage implements OnInit {

// /==============================================================================SESSION==========
iduser:any;
roles:any;
noms_users:any;
prenom_users:any;
email_users: string;
numero_users: string;
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  p = 1;
  menuBureau: boolean = true;
  menuMobile: boolean = false;

  select_liste!: any;
  tirage_actuel!: any;
  tiragePourUneListe!: any;

  lesListes$!: any;
  uneListe!: any

  constructor(private serviceTirage: PageListeTirageService, public breakpointObserver: BreakpointObserver, 
    private ajouterPostulantService: AjouterPostulantService, private route:Router) { }

  totalTirage: any
  listeTirages: any
  tirages$: any

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

this.actualise();


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
    // RECUPERATION DU NOMBRE DE TIRAGE
    this.serviceTirage.totalTirage().subscribe(data => { this.totalTirage = data })



    // ICI ON RECUPERE les validés
    //this.serviceTirage.recupererLesTirageValider().subscribe(data => { this.listeTirages = data })

    //lesTirages

    this.serviceTirage.lesTirages().subscribe(data => { this.listeTirages = data })



    // this.ajouterPostulantService.recupererListePostulant().subscribe((data =>{
    //   this.lesListes$ = data;
    // }))


  }

  afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

  validerTirage(tirage:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',

      },
      heightAuto: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Cet tirage va etre validé !!!!',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceTirage.validerTirage(tirage.idtirage, tirage).subscribe(data =>{
          console.log(data)
          if(data.status == false){
            swalWithBootstrapButtons.fire(
              'Cet tirage est déjà validé',)
          }else{
            swalWithBootstrapButtons.fire(
              'Cet tirage est validé avec succes!')
              this.actualise();
        }
        })
        console.log(tirage);
      }
    })

    
  }


  filtreUserParEntite(event) {

    if (event.target.value == "Tirage non valider") {


      console.log(event.target.value)

      this.tirage_actuel = event.target.value;

      this.serviceTirage.recupererLesTirageNonValider().subscribe(data => { this.listeTirages = data })


    } else if(event.target.value == "Tirage valider"){
      this.serviceTirage.recupererLesTirageValider().subscribe(data => { this.listeTirages = data })
    }else{
      this.serviceTirage.lesTirages().subscribe(data => { this.listeTirages = data });

    }



  }


  deconnexion(){
    sessionStorage.clear();
    console.log('je suis le log')
    this.route.navigateByUrl('/authentification');
    }

    
}
