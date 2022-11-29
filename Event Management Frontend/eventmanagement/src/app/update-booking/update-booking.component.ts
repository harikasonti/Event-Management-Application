import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  bookingId!: number;

  booking!: Booking;

  constructor(private bookingService: BookingService,

    private route: ActivatedRoute,

    private router: Router) { }



  ngOnInit(){

  
  
    this.booking=new Booking();

    this.bookingId = this.route.snapshot.params['bookingId'];



    this.bookingService.getBookingById(this.bookingId).subscribe((data:any)=>{

      console.log(data);

       this.booking=data;

    },error=>console.log(error));

  }



  updateBooking(){

    this.bookingService.updateBooking(this.bookingId, this.booking)

    .subscribe( data =>{

      console.log(data);

      this.booking=new Booking();

      this.goToBookingList();

    },(error: any) => console.log(error));

  }

  onSubmit(){
    this.updateBooking();
    

  }

  goToBookingList(){

    this.router.navigate(['/booking']);

  }



}


