import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { OnlypaymentComponent } from './onlypayment/onlypayment.component';
import { OnlybookingComponent } from './onlybooking/onlybooking.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
   
  {path:'admin',component:AdminComponent},
  {path: 'events', component: EventListComponent},
  {path: '', redirectTo: 'events', pathMatch: 'full'},
  {path: 'create-event', component: CreateEventComponent},
  {path: 'update-event/:id', component: UpdateEventComponent},
  {path:'',component:LoginComponent},

  {path: 'customers', component: CustomerListComponent},
  {path: 'payment', component: PaymentListComponent},
  {path: '', redirectTo: 'payment', pathMatch: 'full'},
  {path: 'create-payment', component: CreatePaymentComponent},
  {path:'booking',component:BookingListComponent},
  {path: '', redirectTo: 'booking',pathMatch:'full'},
  {path:'create-booking',component:CreateBookingComponent},
  {path:'update-booking/:bookingId',component:UpdateBookingComponent},
  {path:'onlybooking',component:OnlybookingComponent},
  {path:'onlypayment',component:OnlypaymentComponent},
  {path:'about',component:AboutComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
