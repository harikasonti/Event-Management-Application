import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseURL = "http://localhost:8095/app/"

  constructor(private httpClient: HttpClient) { }

  getBookingList(): Observable<Booking[]> {

    return this.httpClient.get<Booking[]>(`${this.baseURL}` + 'booking');

  }

  createBooking(booking: Booking): Observable<Object> {

    return this.httpClient.post(`${this.baseURL}` + 'addbooking', booking);

  }

  getBookingById(bookingId: number): Observable<Object> {

    return this.httpClient.get<Booking[]>(`${this.baseURL}` + `getbookingbyid` + `/${bookingId}`);
  }

  updateBooking(bookingId: number, booking: Booking): Observable<Object> {

    return this.httpClient.put(`${this.baseURL}` + 'updatebooking' + `/${bookingId}`, booking);

  }

  deleteBooking(bookingId: number): Observable<Object> {

    return this.httpClient.delete(`${this.baseURL}` + 'deletebooking' + `/${bookingId}`);

  }

}