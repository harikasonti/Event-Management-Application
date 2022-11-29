import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})

export class CreateBookingComponent implements OnInit {

  booking: Booking = new Booking();

  constructor(private bookingservice: BookingService,
    private router: Router) { }

  ngOnInit(): void {
    this.bookingservice;
  }

  saveBooking() {

    this.bookingservice.createBooking(this.booking).subscribe(data => {
      console.log(data);


      alert("Booking is Added Successfully");
      this.goToBookingList();
    },

      error => console.log(error));

  }

  goToBookingList() {

    this.router.navigate(['/booking'])

  }

  onSubmit() {

    console.log(this.booking);


    this.saveBooking();

  }
}


