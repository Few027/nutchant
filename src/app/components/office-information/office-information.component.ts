import { Component, OnInit } from '@angular/core';
import { NgbDateStruct as NgbDateStruck, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiFormService } from 'src/app/services/apis/api-form.service';
import { ReqCustomerInformation, ReqEmployees, ResEmployees, ResEmployeesOffice } from 'src/app/services/interfaces/api-form-interface';
declare var $: any;

@Component({
  selector: 'app-office-information',
  templateUrl: './office-information.component.html',
  styleUrls: ['./office-information.component.scss']
})
export class OfficeInformationComponent implements OnInit {
  [x: string]: any;
  constructor(config: NgbPaginationConfig, private api: ApiFormService) {
    config.size = 'sm';
    config.boundaryLinks = true;
  }
  employeesDataResShow: ResEmployees = null;
  employeesCreate = {
    name: '',
    lastName: '',
    department: '',
    tel: '',
    Email: '',
  };

  model: NgbDateStruck;
  ngPage = {
    perPage: 10,
    page: 1

  };
  total = 100;
  // page = 1;
  // openModel() {
  //   $('#exampleModal').modal('show');
  // }
  ngOnInit(): void {
    this.showEmployee();
  }

  setPageTotal(totalArg: number) {
    this.ngPage.perPage = totalArg * 10;
  }

  showEmployee() {
    const body: ReqEmployees = {
      perPage: this.ngPage.perPage,
      page: this.ngPage.page
    };
    this.api.employeesInformation(body).subscribe(
      (res) => {
        this.employeesDataResShow = res;
        console.log('=======================================================', res);
        this.setPageTotal(this.total);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
