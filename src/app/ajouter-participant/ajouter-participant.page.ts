import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ListePostulant } from '../modeles/liste-postulant/liste-postulant';
import { Postulant } from '../modeles/postulant/postulant';
import { AjouterParticipantService } from '../Services/ajouter-participant/ajouter-participant.service';
import { ListePostulantService } from '../Services/liste-postulant/liste-postulant.service';

@Component({
  selector: 'app-ajouter-participant',
  templateUrl: './ajouter-participant.page.html',
  styleUrls: ['./ajouter-participant.page.scss'],
})
export class AjouterParticipantPage implements OnInit {

  postulantparticipant: Postulant  ={
    nom_postulant: '',
  prenom_postulant:'',
  numero_postulant:'',
  email:"",
  genre: ""
  }

  

  nom_postulant: string = '';
  prenom_postulant: string = '';
  numero_postulant: string = '';
  select_liste: string = '';
  email: string = "";
  genre:string = "";


  listepostulants!: ListePostulant;

  reponse: any;

  erreur: any;
  bool_erreur: boolean = false;
  Erreur:any
  

  constructor(private ajouterparticipantservice: AjouterParticipantService  ) { }

  actualise(): void {
    setInterval(
      () => {
      }, 100, clearInterval(1500));
  }
  ngOnInit() {
    //this.getListePostulant();

      this.ajouterparticipantservice.recupererListePostulant().subscribe((data) => {
        this.reponse = data;
        
    })


  }

 

  ajouterParticipant() {
  

    this.postulantparticipant.nom_postulant = this.nom_postulant;
    this.postulantparticipant.prenom_postulant = this.prenom_postulant;
    this.postulantparticipant.numero_postulant = this.numero_postulant;
    this.postulantparticipant.email = this.email;
    this.postulantparticipant.genre = this.genre;

    this.bool_erreur = true;

    if (this.nom_postulant === "" || this.prenom_postulant === "" || this.email == "" || this.genre == "") {

      this.erreur = "Veuillez remplir tous les champs";

    } else {
      this.ajouterparticipantservice.ajouterParpicipant(this.select_liste, this.postulantparticipant).subscribe((data) => {
        console.log("Je suis " + data)
        this.Erreur = data.contenu
        console.log(this.Erreur)
      })
    }
  }



}
  
