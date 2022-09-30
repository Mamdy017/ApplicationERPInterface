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

  messageRetour: any;

  salles: Salle = {
    idsalle: 0,
    nom: '',
    nbreplace: 0,
    etage: '',
    disponibilite: true,
  }

  resetForm(){
    nom:''
    nbreplace: 0
    etage:''

  }





  nom: string = "";
  nbreplace: number = 0;
  etage: string = "";



  mesDonnees: any

  constructor(private serviceSalle: SalleService) { }

  ngOnInit() {

  }

  ajouterSalle() {
    this.salles.nom = this.nom;
    this.salles.etage = this.etage;
    this.salles.nbreplace = this.nbreplace;

if(this.nom == null || this.etage == null || this.nbreplace){

this.messageRetour = "Veuillez renseigner tous les champs !";
}
else{
   console.log("Les données: " + this.salles)
    this.mesDonnees = this.serviceSalle.ajouterUneSalle(this.salles).subscribe(data => { 
      this.messageRetour = data.contenu;

      console.log(this.messageRetour);
 this.resetForm();
    })
}
   

  }



 

}
