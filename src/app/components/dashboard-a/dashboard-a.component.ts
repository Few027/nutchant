import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-a',
  templateUrl: './dashboard-a.component.html',
  styleUrls: ['./dashboard-a.component.scss']
})
export class DashboardAComponent implements OnInit {
  page: 10;
  constructor() { }

  ngOnInit(): void {
  }

}
