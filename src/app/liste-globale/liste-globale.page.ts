import { Component, OnInit } from '@angular/core';
import { ListePostulant } from '../modeles/liste-postulant/liste-postulant';
import { ListePostulantService } from '../Services/liste-postulant.service';

@Component({
  selector: 'app-liste-globale',
  templateUrl: './liste-globale.page.html',
  styleUrls: ['./liste-globale.page.scss'],
})
export class ListeGlobalePage implements OnInit {

  constructor(private serviceListe : ListePostulantService) { }

listeTotal:any
mesListe :any

  ngOnInit() {

    // ON RECUPERE LE NOMBRE TOTAL DE LISTE
    this.serviceListe.listeTotales().subscribe(data=>{ this.listeTotal = data })
    
    // ON RECUPERE LES LISTES
    this.serviceListe.mesListes().subscribe(data=>{ this.mesListe = data
      // console.log("Activite "+this.mesListe.Activite)
    })
    


  }

}
