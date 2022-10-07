import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor() { }

nom:any
prenom:any
role:any

  ngOnInit() {


    this.nom =  sessionStorage.getItem("nom_users")
    this.role =  sessionStorage.getItem("role_users")
    this.prenom =  sessionStorage.getItem("prenom_users")


   console.log("Je suis le role ========================== "+this.role);


   }

}
