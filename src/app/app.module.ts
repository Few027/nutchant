import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiUserService } from './services/apis/api-user.service';
import { ApiFormService } from './services/apis/api-form.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ChartsModule } from 'ng2-charts';
import { GoogleChartsModule } from 'angular-google-charts';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CreateCustomerComponent,
    SittingAComponent,
    CustomerRatingComponent,
    CalendarComponent,
    CustomerInformationComponent,
    ReportProblemAComponent,
    DashboardAComponent,
    SuggestionAd1Component,
    AllWorkAdComponent,
    FinishedWorkAdComponent,
    OfficeInformationComponent,
    RegisterAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    GoogleChartsModule,
    // RouterModule.forRoot(appRoutes)

  ],
  providers: [ApiUserService, ApiFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
