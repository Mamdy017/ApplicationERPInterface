import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.page.html',
  styleUrls: ['./statistique.page.scss'],
})
export class StatistiquePage implements OnInit {
  googleChartLibrary;
  constructor() { }
  useVanillaJSLibrary() {
    this.googleChartLibrary = (<any>window).google;
    // Load the Visualization API and the corechart package.
    this.googleChartLibrary.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    this.googleChartLibrary.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {
    this.useVanillaJSLibrary();
  }
  drawChart () {
    // Create the data table.
    var data = new this.googleChartLibrary.visualization.DataTable();
    data.addColumn('string', 'Activity Name');
    data.addColumn('number', 'Hours');
    data.addRows([
      ['Sleeping', 8],
      ['Working', 8],
      ['TV', 2],
      ['Sports', 2],
      ['Eating', 2],
      ['Social', 2]
    ]);

    // Instantiate and draw our chart, passing in some options.
    var chart = new this.googleChartLibrary.visualization
      .PieChart(document.getElementById('pie-chart-div'));

    chart.draw(data, {
      'title': 'Activities',
      'width': 400,
      'height': 300
    });
  }

}
