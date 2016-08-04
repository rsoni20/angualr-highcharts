import { Component } from '@angular/core';
import { Jsonp, JSONP_PROVIDERS } from '@angular/http';
import { CHART_DIRECTIVES, Highcharts } from 'angular2-highcharts';
import Highcharts3d                     from 'highcharts/highcharts-3d';   

Highcharts3d(Highcharts);
     


@Component({
  selector: 'my-dashboard',
  directives: [CHART_DIRECTIVES],
  template: `<chart [options]="options"></chart>`
})

export class DashboardComponent {
constructor() {
        this.options = {
          chart: {
            type: 'column',
            margin: 75,
            options3d: {
      				enabled: true,
              alpha: 15,
              beta: 15,
              depth: 50
            }
          },
          plotOptions: {
            column: {
              depth: 25
            }
          },
          series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
          }]
        };
    }
  options: Object;
}