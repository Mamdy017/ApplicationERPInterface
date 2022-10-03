import { Component, OnInit } from '@angular/core';
import { ListeActeurService } from '../services/liste-acteur/liste-acteur.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.page.html',
  styleUrls: ['./liste-utilisateur.page.scss'],
})
export class ListeUtilisateurPage implements OnInit {


  page:any;
  maListes:any
  donnees : any

  constructor(private serviceUtilisateur:ListeActeurService) { }

  ngOnInit() {

    this.serviceUtilisateur.lesUtilisateurs().subscribe(data=>{

      this.donnees = data
      console.log("--------------- "+this.donnees.nom)

    })

  }

}
