import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient ) { }

  public loginCustomerFromRemote(customer : Customer):Observable<any>{
    return this._http.post<any>("http://localhost:8095/app/logincustomer",customer)

  }
  public registerCustomerFromRemote(customer : Customer):Observable<any>{
    return this._http.post<any>("http://localhost:8095/app/registercustomer",customer)

  }
  getCustomersList(): Observable<Customer[]>{
    return this._http.get<Customer[]>("http://localhost:8095/app/customers");
  }
  handleError(error:Response){
    
  }
}
