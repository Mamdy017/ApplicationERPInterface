import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tirage-valide',
  templateUrl: './tirage-valide.component.html',
  styleUrls: ['./tirage-valide.component.scss'],
})
export class TirageValideComponent implements OnInit {

  constructor(private alertController: AlertController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Select your favorite color',
      buttons: ['OK'],
      inputs: [
        {
          label: 'Red',
          type: 'radio',
          value: 'red',
        },
        {
          label: 'Blue',
          type: 'radio',
          value: 'blue',
        },
        {
          label: 'Green',
          type: 'radio',
          value: 'green',
        },
      ],
    });

    await alert.present();
  }
}