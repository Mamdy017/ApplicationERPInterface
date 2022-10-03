import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageListeTirageService } from '../Services/page-liste-tirage/page-liste-tirage.service';

@Component({
  selector: 'app-postulant-tire',
  templateUrl: './postulant-tire.page.html',
  styleUrls: ['./postulant-tire.page.scss'],
})
export class PostulantTirePage implements OnInit {

  constructor(private servicePostulant:PageListeTirageService, private route:ActivatedRoute) { }

  lesPersonnesTirees:any
  // id_tirage : any
  ngOnInit() {


    const id_tirage = +this.route.snapshot.params["idtirage"];

    this.servicePostulant.postulantTirer(id_tirage).subscribe(data=>{
      this.lesPersonnesTirees = data

      console.log("Les personnes tirées lors du tirage 1"+this.lesPersonnesTirees.nom_postulant)

    })

  }

}
