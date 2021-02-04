import { ReqCustomer } from 'src/app/services/interfaces/api-form-interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFormService } from 'src/app/services/apis/api-form.service';
import { ReqLogin, ResLogin } from 'src/app/services/interfaces/api-form-interface';
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginCreate = {
    UserName: '',
    password: '',
  };

  loginDataRes: ResLogin;

  constructor(private api: ApiFormService, private router: Router) { }

  ngOnInit(): void {

  }

  createLogin() {
    const body: ReqLogin = {
      UserName: this.LoginCreate.UserName,
      password: this.LoginCreate.password
    };
    this.api.LoginCreate(body).subscribe(
      (res) => {
        this.loginDataRes = res;
        if (!res) {
          console.log('1');
          this.router.navigateByUrl('register');
        } else {
          console.log('2');
          this.router.navigateByUrl('dashboard');
        }
      },
      (err) => {
        console.log('this is a err ', err);
      }
    );
  }
}
