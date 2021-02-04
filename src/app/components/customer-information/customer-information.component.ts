import { Component, OnInit } from '@angular/core';
import { NgbPaginationConfig, NgbDateStruct as NgbDateStruck } from '@ng-bootstrap/ng-bootstrap';
import { ApiFormService } from 'src/app/services/apis/api-form.service';
import { ReqCustomerInformation, ResCustomerInformation, ResEmployees } from 'src/app/services/interfaces/api-form-interface';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss']

})
export class CustomerInformationComponent implements OnInit {

  customerDataResShow: ResCustomerInformation = null;
  constructor(config: NgbPaginationConfig, private api: ApiFormService) {
    config.size = 'sm';
    config.boundaryLinks = true;
  }
  customerInformation: ResCustomerInformation = null;
  customerCreate = {
    name: '',
    lastName: '',
    tel: '',
    district: '',
    province: '',
    insurance: '',
  };


  model: NgbDateStruck;
  ngPage = {
    perPage: 10
  };
  total = 100;
  page = 1;
  ngOnInit(): void {
    this.showCustomer();
  }
  // openModal(id?: number) {
  //   $('#customerModal').Modal('show');
  // }
  setPageTotal(totalArg: number) {
    this.ngPage.perPage = totalArg * 10;
  }
  showCustomer() {
    const body: ReqCustomerInformation = {
      perPage: this.ngPage.perPage,
      page: this.page
    };
    this.api.customerInformation(body).subscribe(
      (res) => {
        this.customerDataResShow = res;
        console.log('=======================================================', res);
        this.setPageTotal(this.total);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}


