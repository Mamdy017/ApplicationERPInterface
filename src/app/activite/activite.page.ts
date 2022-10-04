import { Component, OnInit } from '@angular/core';
import { Activite } from '../modeles/activite/activite';
import { TypeActivite } from '../modeles/type-activite/type-activite';
import { ActiviteService } from '../Services/activite/activite.service';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.page.html',
  styleUrls: ['./activite.page.scss'],
})
export class ActivitePage implements OnInit {

  constructor(private activiteService : ActiviteService,
    private utilisateurs: ListeActeurService) { }


  salles$:any;
  annees$:any;
  typeActivites$:any;
  entites$:any;
  users$:any;
  acteurs$:any;
  respons$:any

  titre:any
  salles:any;
  annees:any;
  typeActivites:any;
  entites:any;
  users:any;
  acteurs:any;
  descpt:any;
  dateDebut:any;
  dateFin:any;
  respons:any
  nombrepersonnedemande:any;


  activiteObjet: Activite = {
    nom: "",
    description: "",
    dateDebut: new Date(),
    dateFin: new Date(),
  nombrepersonnedemande:0

  }

 

  getListeEntite(){
    this.activiteService.recupererListeEntite().subscribe((data) =>{
      this.entites$ = data;
    })
  }

  getListeSalle(){
    this.activiteService.recupererListeSalle().subscribe((data) =>{
      this.salles$ = data;
    })
  }

  getListeTypeActivite(){
    this.activiteService.recupererListeTypeActivite().subscribe((data) =>{
      this.typeActivites$ = data
    })
  }

  getListeAnnee(){
    this.activiteService.recupererListeAnne().subscribe((data) =>{
      this.annees$ = data;
    })
  }

  getListeUsers(){
    this.utilisateurs.lesUtilisateurs().subscribe((data) =>{
      this.users$ = data
      this.respons$ = data
    })
  }

  getActeurs(){
    this.utilisateurs.afficherLesActeurs().subscribe((data) =>{ 
      this.acteurs$ = data;
    })
  }

  postActivite(){
    this.activiteObjet.nom = this.titre;
    this.activiteObjet.dateDebut = this.dateDebut;
    this.activiteObjet.dateFin = this.dateFin;
    this.activiteObjet.description = this.descpt;
    this.activiteObjet.nombrepersonnedemande = this.nombrepersonnedemande;

    console.log("les acteurs internes: " + this.users);
    console.log("les acteurs internes: " + this.acteurs);
    console.log("Les acteurs externes" + this.salles)
    console.log("Les acteurs externes" + this.entites)
    console.log("Les acteurs externes" + this.acteurs)
    console.log("Les acteurs externes" + this.descpt)
    console.log("titre: " + this.titre);
    console.log("a" + this.dateDebut);
    console.log("da: "+ this.dateFin);
    console.log("type: " + this.typeActivites)
    console.log("resp: " + this.respons)

    this.activiteService.postActivite(this.acteurs, this.users, this.entites, this.typeActivites, this.salles, this.activiteObjet).subscribe((data) =>{
      console.log("Donnée envoyé avec succes");
    });
  }
  

  ngOnInit() {

    this.getListeSalle();
    this.getListeEntite();
    this.getListeTypeActivite();
    this.getListeAnnee();
    this.getListeUsers();
    this.getActeurs();

  }

 

}
