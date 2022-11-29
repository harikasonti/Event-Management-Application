import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  id!: number;
  event!: Event;
  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(){
    this.event=new Event();
    this.id = this.route.snapshot.params['id'];

    this.eventService.getEventById(this.id).subscribe((data:any)=>{
      console.log(data);
       this.event=data;
    },error=>console.log(error));
  }

  updateEvent(){
    this.eventService.updateEvent(this.id, this.event).subscribe( (data:any) =>{
      console.log(data);
      this.event=new Event();
      this.goToEventList();
    },(error: any) => console.log(error));
  }
  onSubmit(){
    this.updateEvent();
  }
  goToEventList(){
    this.router.navigate(['/events']);
  }
}
