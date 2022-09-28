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


 formulaireAjout!:FormGroup;

ajouter:any;
name!:number
etage:string
numeroPlace:number

mesDonnees:any

  constructor(private serviceSalle:SalleService) { }

  ngOnInit() {

  }
  ajouterSalle(){

    this.mesDonnees = this.formulaireAjout.value
        console.log("je suis Etage: "+this.mesDonnees.etage);
      }
}
