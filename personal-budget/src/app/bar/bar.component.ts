import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'pb-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  chartOptions = {
    responsive: true
  }

  labels = [];

  chartData = [
    {
      label: 'Current Budget',
      data: []
    },
    {
      label: 'Maximum Budget',
      data: []
    }
  ];

  colors = [
    {
      backgroundColor: 'rgb(0, 128, 9)'
    },
    {
      backgroundColor: 'rgba(0, 118, 255, 0.8)'
    }
  ]

  onChartClick(event) { }

  public loggedInUser:any;


  constructor(private http: HttpClient,public _dataService: DataService) { }

  ngOnInit(): void {

    this.loggedInUser = this._dataService.loggedInUserName;
    this._dataService.getData(this.loggedInUser)
    .subscribe((res: any) => {
      for (let i = 0; i < res.length; i++) {
        this.chartData[0].data[i] = res[i].budget;
        this.chartData[1].data[i] = res[i].maxbudget;
        this.labels[i] = res[i].title;
      }
    });
    }
}

