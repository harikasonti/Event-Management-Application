import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  status:any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this._router.navigate(['/registration']);
  }

  admin(){
    this._router.navigate(['/admin']);
  }

}
