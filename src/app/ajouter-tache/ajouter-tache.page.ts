import { Component, OnInit } from '@angular/core';
import { Acteur } from '../modeles/acteur/acteur';
import { Activite } from '../modeles/activite/activite';
import { Designation } from '../modeles/designation/designation';
import { Salle } from '../modeles/salle/salle';
import { Statut } from '../modeles/statut/statut';
import { Tache } from '../modeles/Tache/tache';
import { Utilisateur } from '../modeles/utilisateur/utilisateur';
import { ActiviteService } from '../Services/activite/activite.service';
import { AjouterTacheService } from '../Services/ajouter-tache/ajouter-tache.service';
import { StatutService } from '../Services/Statut/statut.service';

@Component({
  selector: 'app-ajouter-tache',
  templateUrl: './ajouter-tache.page.html',
  styleUrls: ['./ajouter-tache.page.scss'],
})
export class AjouterTachePage implements OnInit {

  constructor(private ajouterTache: AjouterTacheService, private recupererActivite: ActiviteService, private recupererStatut: StatutService) { }
  recuperation: any;
  recuperationActivite: any;
  recuperationStatut: any;
  recuperationId: any;
  recuperationIdActivite:any;
  recuperationIdStatut: any;
  datedebut:any
  datefin: any

  designation: Designation = {
    idDesignation: null,
    libelle: "",
    etat: true
  }

  libelle: String
  libelleActivite: any
  libelleStatut: any
  libelleDesignation: any
  activite: Activite = {
    idactivite: null,
    nom: "",
    description: "",
    dateDebut: undefined,
    dateFin: undefined,
    acteur: undefined,
    typeActivite: undefined,
    utilisateur: undefined,
    salle: undefined
  }
  nom: String;

  statut: Statut = {
    idstatut: null,
    nom: ""
  }

tache: Tache={
  datedebut:undefined,
  datefin:undefined,
}

  ngOnInit() {
    this.ajouterTache.afficherToutDesignation().subscribe(data => {
      this.recuperation = data;
    })

    this.recupererActivite.afficherActivite().subscribe(data => {
      this.recuperationActivite = data;

    })

    this.recupererStatut.afficherStatut().subscribe(data => {
      this.recuperationStatut = data;
    })
  }


  ajouterUneTache(){
    this.recuperationId = this.recuperation.idDesignation;
    console.log("coucou l'id selectionner est" +this.recuperation.idDesignation);

    this.tache.datedebut = this.datedebut
    this.tache.datefin = this.datefin

    console.log("designation: " + this.libelleDesignation)
    console.log("libelleSta: " + this.libelleStatut)
    console.log("libelleActivite: " + this.libelleActivite)

   this.ajouterTache.ajouterTacheF(this.libelleDesignation, this.libelleStatut, this.libelleActivite, this.tache).subscribe(data=>{

   })

  }
}
