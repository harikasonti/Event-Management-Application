import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-onlybooking',
  templateUrl: './onlybooking.component.html',
  styleUrls: ['./onlybooking.component.css']
})
export class OnlybookingComponent implements OnInit {

  booking!: Booking[];
  searchText:any;
  p:number=1;
  
  constructor(private bookingService : BookingService,

    private router : Router) { }

  ngOnInit(): void {
  this.getBooking();

}

private getBooking(){

  this.bookingService.getBookingList().subscribe(data=>{

    this.booking = data;

  });

}
//sort BookingId
sortbookingId() {
  this.booking.sort((a: any, b: any) => {
    if (a.bookingId < b.bookingId) {
      return -1;
    }
    if (a.bookingId> b.bookingId) {
      return 1;
    }
    return 0;
  });
}
//sort date
sortdate() {
  this.booking.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });
}

//sort Status
sortstatus() {
  this.booking.sort((a: any, b: any) => {
    if (a.status < b.status) {
      return -1;
    }
    if (a.status > b.status) {
      return 1;
    }
    return 0;
  });
}


//sort Bill
sortbill() {
  this.booking.sort((a: any, b: any) => {
    if (a.bill < b.bill) {
      return -1;
    }
    if (a.bill > b.bill) {
      return 1;
    }
    return 0;
  });
}

//sortNo. of Attendies
sortnoOfAttendies() {
  this.booking.sort((a: any, b: any) => {
    if (a.noOfAttendies< b.noOfAttendies) {
      return -1;
    }
    if (a.noOfAttendies > b.noOfAttendies) {
      return 1;
    }
    return 0;
  });
}


}
