import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers!: Customer[];
  p:number=1;

  constructor(private _service : RegistrationService,
    private router : Router) { }

  ngOnInit(): void {
   
this.getcustomers();
}
private getcustomers(){
  this._service.getCustomersList().subscribe(data=>{
    this.customers = data;
  });
}
}
