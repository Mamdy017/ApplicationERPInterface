import { Component, OnInit } from '@angular/core';
import { Acteur } from '../modeles/acteur/acteur';
import { ListeActeurService } from '../Services/liste-acteur/liste-acteur.service';

@Component({
  selector: 'app-liste-acteur',
  templateUrl: './liste-acteur.page.html',
  styleUrls: ['./liste-acteur.page.scss'],
})
export class ListeActeurPage implements OnInit {
  acteurs : Acteur[];

  constructor(private serviceActeur : ListeActeurService) { }

  ngOnInit() {
    this.serviceActeur.afficherLesActeurs().subscribe(data => {
      this.acteurs = data;
      console.table(this.acteurs);
    })
  }


  supprimer(acteur : any){
    let confirmer = confirm("êtes-vous sûr de le supprimer ?");
    if(confirmer == false) return;
    this.serviceActeur.supprimerActeur(acteur.idacteur).subscribe({
      next : (data) => {
        console.log(acteur.id)
        let index = this.acteurs.indexOf(acteur);
        this.acteurs.splice(index, 1);
      }
    })
  }

}
