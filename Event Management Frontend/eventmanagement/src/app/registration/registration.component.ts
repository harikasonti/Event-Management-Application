import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route,Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  customer = new Customer();
  msg = "";

  constructor(private _service : RegistrationService, private _router : Router) { }


  ngOnInit(): void {
  }
  registerCustomer(){
    this._service.registerCustomerFromRemote(this.customer).subscribe(
      data =>{
        console.log(data);
        console.log("Response Received");
        alert("Registration Successfull")
        this._router.navigate(['/login'])
      } ,
      
    )
  }

}
