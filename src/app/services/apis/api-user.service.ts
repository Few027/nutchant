import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  apiURL = 'http://localhost:3000';
  // : Observable<ForTest>
  constructor(private httpClient: HttpClient) { }

}
// ${ kfls }

 // getContacts(): Observable<Men[]>{
  //   return this.httpClient.get<Men[]>(`http://192.168.1.55/api/user/gets`);
  // }
