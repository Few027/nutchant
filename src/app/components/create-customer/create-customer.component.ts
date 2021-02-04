import { Component, OnInit } from '@angular/core';
import { ApiFormService } from 'src/app/services/apis/api-form.service';
import { ReqCustomer, ResCustomer } from 'src/app/services/interfaces/api-form-interface';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customerCreate = {
    name: '',
    lastName: '',
    tel: '',
    district: '',
    province: '',
    insurance: '',
  };


  customerDataRes: ResCustomer;
  constructor(private api: ApiFormService) { }

  ngOnInit(): void {
  }

  createCustomer() {
    const body: ReqCustomer = {
      firstName: this.customerCreate.name,
      lastName: this.customerCreate.lastName,
      tel: this.customerCreate.tel,
      district: this.customerCreate.district,
      province: this.customerCreate.province,
      insurance: this.customerCreate.insurance
    };
    this.api.customerCreate(body).subscribe(
      (res) => {
        this.customerDataRes = res;
      },
      (err) => {

      }
    );
  }
}
