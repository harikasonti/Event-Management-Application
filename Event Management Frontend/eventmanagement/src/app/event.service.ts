import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../app/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseURL = "http://localhost:8095/app/"
  constructor(private httpClient: HttpClient,) { }
  getEventsList(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseURL}`+'events');
  }
  createEvent(event: Event): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'addevent', event);
  }

  getEventById(eventId:number): Observable<Object>{
    return this.httpClient.get<Event[]>(`${this.baseURL}`+'byId'+`/${eventId}`);

  }
  updateEvent(eventId: number, event: Event): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+'update'+`/${eventId}`, event);
  }

  deleteEvent(eventId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+'delete'+`/${eventId}`);
  }
}
