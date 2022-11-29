import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../event'
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event : Event= new Event();

  constructor(private eventservice:EventService,private router:Router) { }

  ngOnInit(): void {

    this.eventservice
  }

  saveEvent(){
    this.eventservice.createEvent(this.event).subscribe( data =>{
      console.log(data);
      alert("Event is Added Successfully")
      this.goToEmployeeList();
    },
    error => console.log(error));
  }
  goToEmployeeList() {
    this.router.navigate(['/events'])
  }
onSubmit(){

  console.log(this.event)
  this.saveEvent();
}

}
