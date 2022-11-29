import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer = new Customer();
  msg = "";

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginCustomer()
  {
      this._service.loginCustomerFromRemote(this.customer).subscribe(
      _data =>{
        console.log("Response Received");
        this._router.navigate(['/payment'])
      } ,
      _error => {
        console.log("Exception Occured");
        this.msg ="Invalid Credentials, Please Enter Valid Email Id And Password";
    }
    )
  }
  gotoregistration(){
    this._router.navigate(['/registration'])
  }

}
