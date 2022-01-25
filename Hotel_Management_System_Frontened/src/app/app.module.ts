import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {
  RestaurantDashComponent,
} from './restaurant-dash/restaurant-dash.component';

import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './login/owner/owner.component';
import { ManagerComponent } from './login/manager/manager.component';

import { OwnerService } from './services/owner.service';
import { LoginService } from './services/login.service';
import { ManagerService } from './services/manager.service';
import { ReceptionistService } from './services/receptionist.service';

import { AdminLoginService } from './services/adminlogin.service';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminService } from './services/admin.service';
import { ReservationComponent } from './restaurant-dash/reservation/reservation.component';
import { SearchRoomComponent } from './restaurant-dash/search-room/search-room.component';

import { DatePipe } from '@angular/common';
import { BillComponent } from './restaurant-dash/bill/bill.component';
import { PaymentComponent } from './restaurant-dash/payment/payment.component';
import { RateService } from './services/rates.services';
import { RateComponent } from './login/manager/rate/rate.component';
import { PaymenthistoryComponent } from './restaurant-dash/paymenthistory/paymenthistory.component';
import { ReportComponent } from './login/owner/report/report.component';
import { SearchResultComponent } from './restaurant-dash/search-room/search-result/search-result.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { GalleryComponent } from './home/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantDashComponent,
    LoginComponent,
    HomeComponent,
    OwnerComponent,
    ManagerComponent,
    AdminComponent,
    AdminloginComponent,
    ReservationComponent,
    SearchRoomComponent,
    BillComponent,
    PaymentComponent,
    RateComponent,
    ReportComponent,
    PaymenthistoryComponent,
    SearchResultComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [OwnerService,LoginService,ManagerService,ReceptionistService,AdminLoginService,AdminService,RateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
