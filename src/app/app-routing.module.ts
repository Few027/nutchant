import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { SittingAComponent } from './components/sitting-a/sitting-a.component';
import { CustomerRatingComponent } from './components/customer-rating/customer-rating.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';
import { ReportProblemAComponent } from './components/report-problem-a/report-problem-a.component';
import { DashboardAComponent } from './components/dashboard-a/dashboard-a.component';
import { SuggestionAd1Component } from './components/suggestion-ad1/suggestion-ad1.component';
import { AllWorkAdComponent } from './components/all-work-ad/all-work-ad.component';
import { FinishedWorkAdComponent } from './components/finished-work-ad/finished-work-ad.component';
import { OfficeInformationComponent } from './components/office-information/office-information.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent,
    children: [
      {
        path: 'cc',
        component: CreateCustomerComponent,
      },
      {
        path: 'sita',
        component: SittingAComponent,
      },
      {
        path: 'cr',
        component: CustomerRatingComponent,
      },
      {
        path: 'cal',
        component: CalendarComponent,
      },
      {
        path: 'ca',
        component: CustomerInformationComponent,
      },
      {
        path: 'rp',
        component: ReportProblemAComponent,
      },
      {
        path: 'DasA',
        component: DashboardAComponent,
      },
      {
        path: 'suga1',
        component: SuggestionAd1Component,
      },
      {
        path: 'AA',
        component: AllWorkAdComponent,
      },
      {
        path: 'FA',
        component: FinishedWorkAdComponent,
      },
      {
        path: 'office',
        component: OfficeInformationComponent,
      },
      {
        path: 'register',
        component: RegisterAdminComponent,
      }
    ]
  },
  // {
  //   path: 'chart/:id',
  //   component: HeaderComponent,
  // },
{ path: 'login', component: LoginComponent, },
{ path: '**', redirectTo: '/loginEmp', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
