
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// tslint:disable-next-line:max-line-length
import { ReqCustomer, ReqCustomerInformation, ReqEmployees, ReqEmployeesOffice, ReqLogin, ReqReport, ReqSuggestionFrom, ResCustomer, ResCustomerInformation, ResEmployees, ResEmployeesOffice, ResLogin, ResReport, ResSuggestionFrom } from '../interfaces/api-form-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiFormService {

  apiURL = 'http://192.168.1.51:3001';

  constructor(private httpClient: HttpClient) { }

  public customerCreate(body: ReqCustomer): Observable<ResCustomer> {
    return this.httpClient.post<ResCustomer>(`${this.apiURL}/api/customer/create`, body);
  }
  public customerInformation(body: ReqCustomerInformation): Observable<ResCustomerInformation> {
    return this.httpClient.post<ResCustomerInformation>(`${this.apiURL}/api/customer/gets`, body);
  }
  public employeesOffice(body: ReqEmployeesOffice): Observable<ResEmployeesOffice> {
    return this.httpClient.post<ResEmployeesOffice>(`${this.apiURL}/api/employees/create`, body);
  }
  public employeesInformation(body: ReqEmployees): Observable<ResEmployees> {
    return this.httpClient.post<ResEmployees>(`${this.apiURL}/api/employees/gets`, body);
  }
  public suggestionFromCreate(body: ReqSuggestionFrom): Observable<ResSuggestionFrom> {
    return this.httpClient.post<ResSuggestionFrom>(`${this.apiURL}/api/Form/create`, body);
  }
  public reportCreate(body: ReqReport): Observable<ResReport> {
    return this.httpClient.post<ResReport>(`${this.apiURL}/api/Form/createreport`, body);
  }
  public LoginCreate(body: ReqLogin): Observable<ResLogin> {
    return this.httpClient.post<ResLogin>(`${this.apiURL}/api/user/testLogin`, body);

    // public reportCreate(body: ReqReport): Observable<ResReportShow> {
    //   return this.httpClient.post<ResReportShow>(`${this.apiURL}api/Form/createreport`, body);
    // }
  }
}
