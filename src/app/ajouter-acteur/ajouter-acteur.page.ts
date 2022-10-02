import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Acteur } from '../modeles/acteur/acteur';
import { status } from '../modeles/status/status';
import { ActeurService } from '../Services/acteur/acteur.service';
import { servicestatus } from '../Services/status';

@Component({
  selector: 'app-ajouter-acteur',
  templateUrl: './ajouter-acteur.page.html',
  styleUrls: ['./ajouter-acteur.page.scss'],
})
export class AjouterActeurPage implements OnInit {

  act:Acteur
  prenom:String
  nom:String
  email:String
  numero:String
  status:Number
  sta:Observable<status[]>
  n:number
   
  constructor( private serv:ActeurService , private service:servicestatus) { }

  ngOnInit() {
    this.sta=this.service.allstatus()
  }
  onsave(nomm:String){
    if(this.nom==="" ||this.prenom==="" ||this.email===""){
      alert("veillez saisir tout les champs")
    }
    else{
  this.n=this.service.trouverparnom(nomm)
    this.act =new Acteur(this.nom,this.prenom,this.email,this.numero)
   this.serv.saveacteur(this.act,nomm).subscribe((data) =>{
    console.log(data)
   })}
  }


}
