import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-customer-rating',
  templateUrl: './customer-rating.component.html',
  styleUrls: ['./customer-rating.component.scss']
})
export class CustomerRatingComponent implements OnInit {
  customer: any = [];
  customer2: any = [];
  constructor() { }

  ngOnInit(): void {
    this.customer = new Chart('areaChart', {
      type: 'horizontalBar',
      data: {
        datasets: [
          {
            label: 'dddd',
            data: [10, 20, 30, 40]
          }
        ],
        labels: ['ffff', 'rfe', 'rght', 'dgfu']
      }
    });

    this.customer2 = new Chart('areaChart1', {
      type: 'horizontalBar',
      data:  {
      datasets: [
        {
          label: 'dddd',
          data: [14, 22, 32, 50]
        }
      ],
      labels: ['2222', '5555', '6666', 'd7777']
    }
    });
}
}

