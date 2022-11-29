import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

  payment : Payment= new Payment();



  constructor(private paymentservice:PaymentService,

              private router:Router) { }



  ngOnInit(): void {



    this.paymentservice

  }



  savePayment(){

    this.paymentservice.createPayment(this.payment).subscribe( data =>{

      console.log(data);

      alert("payment is Added Successfully")

      this.goToPaymentList();

    },

    error => console.log(error));

  }

  goToPaymentList() {

    this.router.navigate(['/payment'])

  }

onSubmit(){



  console.log(this.payment)

  this.savePayment();

}

}
