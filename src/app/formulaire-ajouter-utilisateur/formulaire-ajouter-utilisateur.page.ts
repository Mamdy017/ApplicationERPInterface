import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Entite } from '../modeles/entite';
import { Role } from '../modeles/role/role';
import { Utilisateur } from '../modeles/utilisateur/utilisateur';
// import { Console } from 'console';
import { EntiteService } from '../Services/entite/entite.service';
import { RoleService } from '../Services/role/role.service';
import { UtilisateurService } from '../Services/utilisateursServices';

@Component({
  selector: 'app-formulaire-ajouter-utilisateur',
  templateUrl: './formulaire-ajouter-utilisateur.page.html',
  styleUrls: ['./formulaire-ajouter-utilisateur.page.scss'],
})
export class FormulaireAjouterUtilisateurPage implements OnInit {

  menuBureau: boolean = true;
  menuMobile: boolean = false;

  // /==============================================================================SESSION==========
  iduser: any;
  roles: any;
  noms_users: any;
  prenom_users: any;
  email_users: string;
  numero_users: string;
  // /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  statut: any;
  statutChoix: any;
  telephone: any;
  prenom: any;
  email: any;
  user_nom: any;
  prenom_utilisateur: any;
  numero_utilisateur: any;
  passe1_utilisateur: any;
  passe2_utilisateur: any;
  email_utilisateur: any;

  ID_ENTITE: any
  ID_ROLE: any
  message: any
  info: any


  mesRoles: any
  mesEntites: any;

  utilisateur: Utilisateur = {
    iduser: 0,
    nom: undefined,
    prenom: undefined,
    numero: undefined,
    email: undefined,
    password: undefined,
    role: new Role,
    entite: new Entite
  }

  vider() {
    nom: "";
    prenom: "";
    numero: "";
    email: "";
    password: "";
  }



  constructor(public breakpointObserver: BreakpointObserver, private userServices: UtilisateurService, private serviceEntite: EntiteService, private serviceRole: RoleService, private route: Router) { }
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

    // Recuperation des rôles










    this.serviceRole.afficherRole().subscribe(data => { this.mesRoles = data })

    //  Recuperation des entités

    this.serviceEntite.afficherEntite().subscribe(data => { this.mesEntites = data })

  }

  ajouterUtilisateurs() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',

      },
      heightAuto: false
    })

    if (this.user_nom != null && this.prenom_utilisateur != null &&
      this.email_utilisateur != null && this.numero_utilisateur &&
      this.passe1_utilisateur != null && this.passe1_utilisateur != null
    ) {
      if (this.passe1_utilisateur == this.passe2_utilisateur) {
        swalWithBootstrapButtons.fire({
          title: 'Cet utilisateur va etre ajoouté !!!!',
          text: "Vous pouvez annuler ou confirmer!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Confimer!',
          cancelButtonText: 'Annuler!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            this.utilisateur.nom = this.user_nom;
            this.utilisateur.prenom = this.prenom_utilisateur;
            this.utilisateur.email = this.email_utilisateur;
            this.utilisateur.password = this.passe1_utilisateur;
            this.utilisateur.numero = this.numero_utilisateur
            this.utilisateur.role.idrole = this.ID_ROLE
            this.utilisateur.entite.idEntite = this.ID_ENTITE

            this.userServices.ajouterUser(this.utilisateur).subscribe(data => {
              this.message = data
              this.info = this.message.contenu

              console.log(this.info);
              this.route.navigateByUrl("/liste-utilisateur")
              swalWithBootstrapButtons.fire(
                'Utilisateur ajouté avec succes!',
                'Vous êtes diriger vers la liste des utilisateurs.',
                'success',)

            })

          }
          else {
            swalWithBootstrapButtons.fire(
              this.info = this.message.contenu

            )
          }
        })
      }
      else {
        swalWithBootstrapButtons.fire(
          this.info = "Mot de passe incorrect !"
        )
      }

    }
    else {
      swalWithBootstrapButtons.fire(
        this.info = "Veuillez remplir tous les champs !"
      )

    }
    // this.vider();
  }
  retourListe() {
    this.route.navigateByUrl('/liste-utilisateur');
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
}
