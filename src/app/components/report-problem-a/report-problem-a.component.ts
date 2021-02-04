import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct as NgbDateStruck } from '@ng-bootstrap/ng-bootstrap';
import { ReqReport, ResReport } from 'src/app/services/interfaces/api-form-interface';
import { ApiFormService } from 'src/app/services/apis/api-form.service';
declare var $: any;

@Component({
  selector: 'app-report-problem-a',
  templateUrl: './report-problem-a.component.html',
  styleUrls: ['./report-problem-a.component.scss']
})
export class ReportProblemAComponent implements OnInit {
  [x: string]: any;


  reportCreate = {
    topic: '',
    project: '',
    particulars: '',
    image: '',
    idCustomer: ''
  };

  model: NgbDateStruck;
  ngPage = {
    perPage: 10,
    page: 1,
    // api: any
  };

  reportDataRes: ResReport;
  constructor(private Api: ApiFormService, private http: HttpClient) {
    // config.size = 'sm';
    // config.boundaryLinks = true;
  }

  openModel() {
    $('#exampleModal').modal('show');
  }

  ngOnInit(): void {
    this.showReport();
  }

  showReport() {
    throw new Error('Method not implemented.');
  }
  PullData() {
    this.reportCreate.image = $('#img1').val();
  }
  createReport() {
    const body: ReqReport = {
      topic: this.reportCreate.topic,
      project: this.reportCreate.project,
      particulars: this.reportCreate.particulars,
      image: this.reportCreate.image,
      idCustomer: this.reportCreate.idCustomer
    };

    this.Api.reportCreate(body).subscribe(
      (res) => {
        this.reportCreate = res;
        this.setPageTotal(this.total);
        console.log('=================================', res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  total(total: any) {
    throw new Error('Method not implemented.');
  }
  setPageTotal(total: any) {
    throw new Error('Method not implemented.');
  }
}


