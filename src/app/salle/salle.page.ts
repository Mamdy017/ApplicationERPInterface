// import { Component, OnInit } from '@angular/core';
// import { clearInterval } from 'timers';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Salle } from '../modeles/salle/salle';
import { SalleService } from '../services/salle';
// import { SalleService } from '../services/salle'

@Component({
  selector: 'app-salle',
  templateUrl: './salle.page.html',
  styleUrls: ['./salle.page.scss'],
})
export class SallePage implements OnInit {
  menuBureau: boolean = true;
  menuMobile: boolean = false;
  messageRetour: any;

  // salles:Salle

salles:Salle
  = {
    idsalle: 0,
    nom: '',
    nbreplace: 0,
    etage: '',
    disponibilite: true,
  }

  resetForm(){
    nom:''
    nbreplace: 0
    etage:''

  }

  nom: string = "";
  nbreplace: number = 0;
  etage: string = "";



  mesDonnees: any

  constructor(private serviceSalle: SalleService,public breakpointObserver: BreakpointObserver, private route: Router) { }
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

 
//  La fonction nous permettant d'ajouter les salles
  ajouterSalle() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',

      },
      heightAuto: false
    })

    if(this.etage == "" || this.nom == "" || this.nbreplace == null ){
      swalWithBootstrapButtons.fire(
        this.messageRetour = " Veuillez bien remplir tous les champs !",
      )   
        this.resetForm();
    }
    else
    {
      swalWithBootstrapButtons.fire({
        title: 'Cette salle va etre ajooutée !!!!',
        text: "Vous pouvez annuler ou confirmer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confimer!',
        cancelButtonText: 'Annuler!',
        // reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.salles.nom = this.nom;
          this.salles.etage = this.etage;
          this.salles.nbreplace = this.nbreplace;
          console.log("Les données: " + this.salles)
          this.mesDonnees = this.serviceSalle.ajouterUneSalle(this.salles).subscribe(data => {
            if (data.status == true) {
              this.route.navigateByUrl("/liste-salle")
              swalWithBootstrapButtons.fire(
                'Salle ajoutée avec succes!',
                'Vous êtes diriger vers la liste des salles.',
                'success',)
            }
            else {
              swalWithBootstrapButtons.fire(
                this.messageRetour = data.contenu,

              )
            }
            this.resetForm();
            // console.log(this.messageRetour);
          })

        }else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Ajout de salle annuler'
          )

        }
      })
    }


  }

}