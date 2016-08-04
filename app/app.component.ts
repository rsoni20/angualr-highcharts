import { Component } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';
import { DashboardComponent } from './dashboard.component'; 

@Component({
    selector: 'my-app',
    directives: [CHART_DIRECTIVES, DashboardComponent],
    templateUrl : `app/app.html`
    
})

export class AppComponent {
   
}