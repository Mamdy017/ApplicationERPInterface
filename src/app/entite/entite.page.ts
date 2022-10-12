import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entite } from '../modeles/entite';
import { Fichier } from '../modeles/entite';
import { Observable } from 'rxjs';
import { EntiteService } from '../Services/entite/entite.service';
import { Router } from '@angular/router';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';
import { Utilisateur } from '../modeles/utilisateur/utilisateur';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entite',
  templateUrl: './entite.page.html',
  styleUrls: ['./entite.page.scss'],
})
export class EntitePage implements OnInit {
  // ajouterEntite() {
  // throw new Error('Method not implemented.');
  // }


  // /==============================================================================SESSION==========
  iduser: any;
  roles: any;
  noms_users: any;
  prenom_users: any;
  email_users: string;
  numero_users: string;
  // /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  entiteobjet: Entite = {
    idEntite: 0,
    nom: '',
    description: '',
    slogant: '',
    photoentite: '',
    iduser: new Utilisateur
  }

  photo$!: Observable<any>;
  formmodule!: FormGroup;

  file: any;

  fichier!: Fichier;

  nom: string;
  description: string;
  slogant: string;

  message: string;
  contenu: string;


  menuBureau: boolean = true;
  menuMobile: boolean = false;
  donnees: any;

  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }


  constructor(private serviceEntite: EntiteService,
    private formB: FormBuilder, private route: Router,
    private serviceUtilisateur : ListeActeurService
    // private serviceq:EntiteService,
    // private servicez:
  ) { }

  ngOnInit(): void {

    // ===========================================================================SESSION VALEURS================================================
    this.iduser = sessionStorage.getItem("id_users");
    this.roles = sessionStorage.getItem("role_users");
    this.noms_users = sessionStorage.getItem("nom_users");
    this.prenom_users = sessionStorage.getItem("prenom_users",);
    this.email_users = sessionStorage.getItem("email_users");
    this.numero_users = sessionStorage.getItem("numero_users");

    this.formmodule = this.formB.group({
      nom: ["", Validators.required],
      file: ["", Validators.required],
      description: ["", Validators.required],
      slogant: ["", Validators.required],
      iduser:["",Validators.required]
    })

    // ======================================================RECUPERATION DES UTILISATEURS

    this.serviceUtilisateur.lesUtilisateurs().subscribe(data => {
      this.donnees = data

    })
  }

  fileChang(event: any) {
    this.file = event.target.files[0]
    console.log(event)


  }



  creerEntite() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-danger',
        confirmButton: 'btn btn-primary',
        

      },
      heightAuto: false
    })

    if(this.nom == "" || this.slogant == "" || this.description == '' || this.iduser == '' || this.file == null ){
      swalWithBootstrapButtons.fire(
        this.message = " Veuillez bien remplir tous les champs !",
      )   
        // this.resetForm();
    }else{
      swalWithBootstrapButtons.fire({
        title: 'Cette entité va etre ajooutée !!!!',
        text: "Vous pouvez annuler ou confirmer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confimer!',
        cancelButtonText: 'Annuler!',

      }).then((result) => {
        if (result.isConfirmed) {
          this.serviceEntite.ajouterEntite(this.entiteobjet.nom, this.entiteobjet.description, this.entiteobjet.slogant,this.entiteobjet.iduser, this.file).subscribe(data => {
            if (data.status == true) {
              this.route.navigateByUrl("/gestionentite")
              swalWithBootstrapButtons.fire(
                'Entité ajoutée avec succes!',
                'Vous êtes diriger vers la liste des entités.',
                'success',)
            }else {
              swalWithBootstrapButtons.fire(
                this.message = data.contenu,

              )
            }
          })
        }else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
             "Ajout de l'entité annulée"       
          )

        }
      })
        
    }

    this.entiteobjet = this.formmodule.value
    let data = new FormData();

    // data.append("file",this.file)

    // console.log(data)
    // this.serviceEntite.ajouterEntite(this.entiteobjet.nom, this.entiteobjet.description, this.entiteobjet.slogant,this.entiteobjet.iduser, this.file).subscribe(data => {
    //   this.formmodule.reset()
    //   this.message = "entite ajouter avec succes";
    //   this.contenu = data.contenu;

    //   console.log(data.contenu)


    // })

  }

  //on vide le formulaire
  resetForm() {

    this.nom = ''

    this.description = ''

    this.slogant = ''
  }

  entitecreer() {
    this.fichier = this.formmodule.value

    this.entiteobjet.description = this.description;

    this.entiteobjet.nom = this.nom;

    this.entiteobjet.slogant = this.slogant 

    console.log(this.fichier.photoentite)


    this.serviceEntite.ajouterEntite(this.nom, this.description, this.slogant,this.entiteobjet.iduser, this.fichier.file).subscribe(data => {

      console.log(data)

      if(data.status == true){
        this.route.navigateByUrl("/gestionentite")
      }

      this.formmodule.reset()
    })

    this.resetForm();
    this.actualise();
   
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
