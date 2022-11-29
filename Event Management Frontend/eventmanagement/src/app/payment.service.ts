import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Payment } from './payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

private baseURL="http://localhost:8095/app/";
  constructor( private httpClient: HttpClient) { }
  getPaymentsList():Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(`${this.baseURL}`+'allpayments');
  }
  createPayment(payment: Payment): Observable<Object>{

    return this.httpClient.post(`${this.baseURL}`+'addPayment', payment);

  }
  deletePayment(trasanctionId: number): Observable<Object>{

    return this.httpClient.delete(`${this.baseURL}`+'deletepayment'+`/${trasanctionId}`);

  }
}
