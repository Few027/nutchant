import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-all-work-ad',
  templateUrl: './all-work-ad.component.html',
  styleUrls: ['./all-work-ad.component.scss']
})
export class AllWorkAdComponent implements OnInit {
  page: 10;
  constructor() { }

  ngOnInit(): void {
  }

}
