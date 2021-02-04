import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  toHome() {
    this.router.navigateByUrl('dashboard/home');
  }
  toForm() {
    this.router.navigateByUrl('dashboard/form');
  }
  toFormFunction(){
    this.router.navigateByUrl('dashboard/function');
  }
  toLogout() {
    this.router.navigateByUrl('dashboard/login');
  }
  toUser(){
    this.router.navigateByUrl('dashboard/user');
  }
  toChar(){
    this.router.navigateByUrl('dashboard/chart');
  }
  tojob(){
    this.router.navigateByUrl('dashboard/joba');
  }
  tosug(){
    this.router.navigateByUrl('dashboard/suga');
  }
  toCas(){
    this.router.navigateByUrl('dashboard/cr');
  }
  tocreat(){
    this.router.navigateByUrl('dashboard/cc');
  }
  toreport(){
    this.router.navigateByUrl('dashboard/rp');
  }
  toCusIo(){
    this.router.navigateByUrl('dashboard/castomerinformation');
  }
  tositting(){
    this.router.navigateByUrl('dashboard/sita');
  }
  toLoginAdmin(){
    this.router.navigateByUrl('dashboard/login');
  }
  toDasA(){
    this.router.navigateByUrl('dashboard/DasA');
  }
}
