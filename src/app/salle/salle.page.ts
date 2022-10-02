import { JsonPipe } from '@angular/common';
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




mesDonnees:any

  constructor(private serviceSalle:SalleService) { }
salles: Salle = new Salle();
  ngOnInit() {

  }
  ajouterSalle(){

   console.log("-------------: "+(this.salles));
   this.mesDonnees = this.serviceSalle.ajouterUneSalle(this.salles).subscribe(data =>{
    console.log("Les données: "+data)
   })
       
      }
    }
