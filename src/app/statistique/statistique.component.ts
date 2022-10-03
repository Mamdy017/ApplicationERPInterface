import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js'
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss'],
})
export class StatistiqueComponent implements OnInit {
  @ViewChild('barCanvas') public barCanvas: ElementRef;
  barChart: Chart<"bar", number[], any>;
  constructor() { }
  ionViewDidEnter() {
    this.barChatMethod();
  }
  ngOnInit() {}
  barChatMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels:[1, 2, 3,4,5,6,7,8,9,10,11,12],
        datasets: [{
          barPercentage: 0.8,
          barThickness: 'flex',
          label: "Kalanso",
          stack: "Base",
          backgroundColor: "#F3A774",
          data: [10, 20, 30, 32,7,9,5,2,8,10,11,4],
        }, {
          barPercentage: 0.8,
          barThickness: 'flex',
          label: "Fab",
          stack: "Base2",
          backgroundColor: "#A9A3A3",
          data: [9, 5, 40, 12,7,9,5,2,8,10,11,4],
        },
        {
          barPercentage: 0.8,
          barThickness: 'flex',
          label: "Solidaire",
          stack: "Base3",
          backgroundColor: "#A2C07C",
          data: [9, 5, 40, 12,7,9,5,2,8,10,11,4],
        }
        
      ]
      },
      options: {
        scales: {
          myScale: {
            type: 'logarithmic',
            position: 'right', // `axis` is determined by the position as `'y'`
          }
        }
      }
    })
  }
}
