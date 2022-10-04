import { Component, OnInit } from '@angular/core';
import { Salle } from '../modeles/salle/salle';
import { SalleService } from '../services/salle';

@Component({
  selector: 'app-liste-salle',
  templateUrl: './liste-salle.page.html',
  styleUrls: ['./liste-salle.page.scss'],
})
export class ListeSallePage implements OnInit {

  page: number = 1
  disponible: any
  salle: Salle

  maListes:any
  constructor(private serviceSalle:SalleService) { }

  ngOnInit() {

    this.serviceSalle.afficherToutesLesSalles().subscribe(data =>{
      this.maListes = data

      console.log("ma listes = "+this.maListes)
    })


  }

  //Afficher par disponibilité
  afficherDisponibilite(event) {
    this.serviceSalle.afficherSalleParDisponibilite(event).subscribe(data =>
      this.disponible = data)
  }

}
