import { Component, OnInit } from '@angular/core';
import { Acteur } from '../modeles/acteur/acteur';
import { ListeActeurService } from '../Services/liste-acteur/liste-acteur.service';

@Component({
  selector: 'app-liste-acteur',
  templateUrl: './liste-acteur.page.html',
  styleUrls: ['./liste-acteur.page.scss'],
})
export class ListeActeurPage implements OnInit {
  acteurs : any;

  constructor(private serviceActeur : ListeActeurService) { }

  ngOnInit() {
    this.serviceActeur.afficherLesActeurs().subscribe(data => {
      this.acteurs = data;
      console.table(this.acteurs);
    })
  }

}
