import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { type } from 'os';
import { Salle } from '../modeles/salle/salle';
import { SalleService } from '../Services/salle/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.page.html',
  styleUrls: ['./salle.page.scss'],
})


export class SallePage implements OnInit {


salles: Salle = new Salle();
// {
//   idsalle: 0,
//   nom: '',
//   nbreplace:0,
//   etage:'',
//   disponibilite: true,
// }



mesDonnees:any

  constructor(private serviceSalle:SalleService) { }
  ngOnInit() {

  }

   ajouterSalle(){

     console.log("Les données: "+this.salles.nbreplace) 

    this.mesDonnees = this.serviceSalle.ajouterSalleSvc(this.salles).subscribe(data =>{

    console.log("Les gggdonnées: "+this.mesDonnees)

 })
       
      }
  // ajouterSalle(){

  // }
    }
