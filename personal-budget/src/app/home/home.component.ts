import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js'
import * as D3 from 'd3';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dataSource = {
    datasets: [{
        data: [],
        backgroundColor : [
            ]
    }],

    labels: [

    ]
};
public loggedInUser:any;

constructor(private _dataService : DataService,private router:Router) { }

ngOnInit(): void {

this.loggedInUser = this._dataService.loggedInUserName;
this._dataService.getData(this.loggedInUser)
.subscribe((res: any) => {
  for (let i = 0; i < res.length; i++) {
   this.dataSource.datasets[0].data[i] = res[i].budget;
   this.dataSource.labels[i] = res[i].title;
   this.dataSource.datasets[0].backgroundColor[i] = res[i].color;
   this.createChart();
  }
});
}

createChart(){
  var ctx : any = document.getElementById("myChart")
  var myPieChart = new Chart(ctx,{
      type: 'pie',
      data : this.dataSource
  })
}

addBudgetExpense(){
  this.router.navigate(['/budget-add']);
}

callNgOnInit(){
  this.ngOnInit();
}

}
