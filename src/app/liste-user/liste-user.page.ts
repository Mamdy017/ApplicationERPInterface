import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.page.html',
  styleUrls: ['./liste-user.page.scss'],
})
export class ListeUserPage implements OnInit {

  page = 1;
  cp = 1;
  data: any = [
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
