import { Component, OnInit } from '@angular/core';
import { PageListeTirageService } from '../Services/page-liste-tirage/page-liste-tirage.service';

@Component({
  selector: 'app-liste-tirage',
  templateUrl: './liste-tirage.page.html',
  styleUrls: ['./liste-tirage.page.scss'],
})
export class ListeTiragePage implements OnInit {

  constructor(private serviceTirage:PageListeTirageService) { }

  totalTirage:any
  listeTirages:any

  ngOnInit() {
    // RECUPERATION DU NOMBRE DE TIRAGE
    this.serviceTirage.totalTirage().subscribe(data=>{ this.totalTirage = data })

    // ICI ON RECUPERE LA LISTE DE TOUTE LES TIRAGES 
    this.serviceTirage.lesTirages().subscribe(data=>{ this.listeTirages = data})

  }

}
