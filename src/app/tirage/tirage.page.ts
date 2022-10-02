import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { Tirage } from '../modeles/tirage/tirage';
import { TirageService } from '../Services/tirage/tirage.service';
import { AjouterPostulantService } from '../Services/ajouter-postulant/ajouter-postulant.service';
import { ActiviteService } from '../Services/activite/activite.service';


@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.page.html',
  styleUrls: ['./tirage.page.scss'],
})
export class TiragePage implements OnInit {

  constructor(private serviceTirage: TirageService,
    private ajoutPostulantService: AjouterPostulantService,
    private activiteService: ActiviteService) { }


  tirageObjet: Tirage = {
    libelleTirage: '',
    nombrePostulantTire: 0
  }

  liste$!: any;
  listeActivites$!: any
  bool_erreur: boolean = false;


    libelleTirage: ''
    nombrePostulantTire: 0
    libelleActivite:""
    libelleListe:""

    formmodule!:FormGroup;
    erreurTirage: any;

    getListePostulant(){
      this.ajoutPostulantService.recupererListePostulant().subscribe((data) =>{
        this.liste$ = data;
      })
    }

    getListeActivite(){
      this.activiteService.recupererListeActivite().subscribe((data) =>{
        this.listeActivites$ = data;
      })
    }

    resetTirageForm(){
      this.libelleTirage,
      this.libelleListe = "",
      this.libelleActivite = "",
      this.nombrePostulantTire = 0
    }

    postTirage(){
      
      this.bool_erreur = true;
      
      this.tirageObjet.libelleTirage = this.libelleTirage;
      this.tirageObjet.nombrePostulantTire = this.nombrePostulantTire;

      if(this.libelleTirage == "" || this.libelleActivite == "" || this.nombrePostulantTire == 0){
        this.erreurTirage = "Veuillez tous champs";
      }else{
        
        this.serviceTirage.postTirage(this.libelleListe, this.libelleActivite, this.tirageObjet).subscribe((data) =>{
          this.erreurTirage = data.contenu
          console.log("Donnée envoyé avec succes");
        });

        this.resetTirageForm()
        
      }
    }

  ngOnInit() {
    this.getListePostulant();
    this.getListeActivite();
  }



}
