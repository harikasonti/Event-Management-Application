import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-onlypayment',
  templateUrl: './onlypayment.component.html',
  styleUrls: ['./onlypayment.component.css']
})
export class OnlypaymentComponent implements OnInit {

  payments!: Payment[];
  p:number=1;

  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.getPayments();
   
  }
  private getPayments()
  {
    this.paymentService.getPaymentsList().subscribe(data=>
      {
        this.payments=data;
      });
  }
  sorttrasanctionId(){
    this.payments.sort((a: any, b: any) => {

      if (a.trasanctionId < b.transactionId) {
  
        return -1;
  
      }
  
      if (a.transactionId> b.transactionId) {
  
        return 1;
  
      }
  
      return 0;
  
    });
  
  }
  sortcost(){
    this.payments.sort((a: any, b: any) => {

      if (a.amountPaid < b.amountPaid) {
  
        return -1;
  
      }
  
      if (a.amountPaid> b.amountPaid) {
  
        return 1;
  
      }
  
      return 0;
  
    });
  
  }
  sorttrasanctiondate(){
    this.payments.sort((a: any, b: any) => {

      if (a.transactionDate < b.transactionDate) {
  
        return -1;
  
      }
  
      if (a.transactionDate> b.transactionDate) {
  
        return 1;
  
      }
  
      return 0;
  
    });
  
  }
}
