import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entite',
  templateUrl: './entite.page.html',
  styleUrls: ['./entite.page.scss'],
})
export class EntitePage implements OnInit {
  nom: string;
  description: string;
  slogan: string;
  image: string;
  constructor() { }

  ngOnInit() {
  }
  
  creer(){
    
  }
}
