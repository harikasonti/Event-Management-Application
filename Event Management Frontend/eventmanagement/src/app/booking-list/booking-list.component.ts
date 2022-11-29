import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { Booking } from '../booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

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

updateBooking(bookingId:number){

  this.router.navigate(['update-booking',bookingId]);

}



deleteBooking(bookingId: number){

  this.bookingService.deleteBooking(bookingId).subscribe( data => {

    console.log(data);

    this.getBooking();

  })

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
