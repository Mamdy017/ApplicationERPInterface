import { Component, OnInit } from '@angular/core';
import { status } from '../modeles/status/status';
import { ActeurService } from '../Services/acteur.service';
import { servicestatus } from '../Services/status';

@Component({
  selector: 'app-statut',
  templateUrl: './statut.page.html',
  styleUrls: ['./statut.page.scss'],
})
export class StatutPage implements OnInit {
 nom:String
 sta: status
  constructor( private serv:servicestatus) { }

  ngOnInit() {
  }
  onsave(){
    this.sta =new status(this.nom)
    this.serv.savestatus(this.sta).subscribe((data) =>{
     console.log(data)
    })
  }
 
}
