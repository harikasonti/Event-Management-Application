import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin = new Admin();
  msg = "";

  constructor( private _service : AdminService,private _router : Router) { }

  ngOnInit(): void {
  }

  loginAdmin()
  {
      this._service.loginAdminFromRemote(this.admin).subscribe(
      data =>{
        if(data==true){
        console.log("Response Received");
        this._router.navigate(['events']);
        }
        else{
          this.msg ="Invalid Credentials, Please Enter Valid Admin Name And Password";
        }
      } ,
      error => {
        console.log("Exception Occured");
        this.msg ="Invalid Credentials, Please Enter Valid Email Id And Password";
    }
    )
  }
  

}
