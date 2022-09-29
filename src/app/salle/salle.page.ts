import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Salle } from '../modeles/salle/salle';
import { SalleService } from '../Services/salle/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.page.html',
  styleUrls: ['./salle.page.scss'],
})


export class SallePage implements OnInit {

salles: Salle = {
  idsalle: 0,
  nom: '',
  nbreplace:0,
  etage:'',
  disponibilite: true,
}


mesDonnees:any

  constructor(private serviceSalle:SalleService) { }

  ngOnInit() {

  }
  ajouterSalle(){
    console.log("je suis Etage: "+this.salles.etage);
    console.log("je suis nbreplace: "+this.salles.nbreplace);
    console.log("je suis Dispo: "+this.salles.disponibilite);
 
   this.mesDonnees = this.serviceSalle.ajouterUneSalle(this.salles).subscribe(data =>{
    console.log("Les données: "+data)
   })
       
      }
    }
