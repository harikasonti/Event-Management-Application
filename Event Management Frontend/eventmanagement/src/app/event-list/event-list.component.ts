import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../event';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events!: Event[];
  searchText: any;
  p:number=1;

  constructor(private eventService: EventService,
    private router: Router) { }

  ngOnInit(): void {

    this.getevents();
  }
  private getevents() {
    this.eventService.getEventsList().subscribe(data => {
      this.events = data;
    });
  }
  updateevent(id: number) {
    this.router.navigate(['update-event', id]);
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id).subscribe((data: any) => {
      console.log(data);
      this.getevents();
    })
  }
  
}
