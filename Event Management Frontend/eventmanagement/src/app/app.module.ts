import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SortDirective } from './directive/sort.directive';
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './home/home.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { OnlypaymentComponent } from './onlypayment/onlypayment.component';
import { OnlybookingComponent } from './onlybooking/onlybooking.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CreateEventComponent,
    UpdateEventComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    CustomerListComponent,
    SortDirective,
    FilterPipe,
    HomeComponent,
    PaymentListComponent,
    CreatePaymentComponent,
    CreateBookingComponent,
    BookingListComponent,
    UpdateBookingComponent,
    OnlypaymentComponent,
    OnlybookingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
