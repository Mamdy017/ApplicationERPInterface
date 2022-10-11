import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entite } from '../modeles/entite';
import { Fichier } from '../modeles/entite';
import { Observable } from 'rxjs';
import { EntiteService } from '../Services/entite/entite.service';
import { Router } from '@angular/router';

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
    photoentite: ''
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

  constructor(private serviceEntite: EntiteService,
    private formB: FormBuilder, private route: Router
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
    })
  }

  fileChang(event: any) {
    this.file = event.target.files[0]
    console.log(event)


  }



  creerEntite() {
    this.entiteobjet = this.formmodule.value
    let data = new FormData();

    // data.append("file",this.file)

    console.log(data)
    this.serviceEntite.ajouterEntite(this.entiteobjet.nom, this.entiteobjet.description, this.entiteobjet.slogant, this.file).subscribe(data => {
      this.formmodule.reset()
      this.message = "entite ajouter avec succes";
      this.contenu = data.contenu;

      console.log(data.contenu)


    })

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


    this.serviceEntite.ajouterEntite(this.nom, this.description, this.slogant, this.fichier.file).subscribe(data => {

      console.log(data)

      this.formmodule.reset()
    })

    this.resetForm();
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
