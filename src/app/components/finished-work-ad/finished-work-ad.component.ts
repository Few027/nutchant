import { Component, OnInit } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-finished-work-ad',
  templateUrl: './finished-work-ad.component.html',
  styleUrls: ['./finished-work-ad.component.scss'],
  providers: [NgbPaginationConfig]

})
export class FinishedWorkAdComponent implements OnInit {
  page: 10;
  constructor(config: NgbPaginationConfig) {
    config.size = 'sm';
    config.boundaryLinks = true;
  }

  ngOnInit(): void {
  }

}
