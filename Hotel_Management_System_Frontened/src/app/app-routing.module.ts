import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';

import { LoginComponent } from './login/login.component';


import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './login/owner/owner.component';
import { ManagerComponent } from './login/manager/manager.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
import { ReservationComponent } from './restaurant-dash/reservation/reservation.component';
import { SearchRoomComponent } from './restaurant-dash/search-room/search-room.component';

import { BillComponent } from './restaurant-dash/bill/bill.component';
import { PaymentComponent } from './restaurant-dash/payment/payment.component';
import { RateComponent } from './login/manager/rate/rate.component';
import { ReportComponent } from './login/owner/report/report.component';
import { PaymenthistoryComponent } from './restaurant-dash/paymenthistory/paymenthistory.component';
import { SearchResultComponent } from './restaurant-dash/search-room/search-result/search-result.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { GalleryComponent } from './home/gallery/gallery.component';


const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'restaurant', component:RestaurantDashComponent
  },
    {
    path:'home', component:HomeComponent
  },
   {
    path:'owner', component:OwnerComponent
  },
  {
    path:'manager', component:ManagerComponent
  },
  {
    path:'adminlogin', component:AdminloginComponent
  },
  {
    path:'admin', component:AdminComponent
  },
  {
    path:'reservation', component:ReservationComponent
  },
  {
    path:'searchroom', component:SearchRoomComponent
  },
  {
    path:'bill', component:BillComponent
  },
  {
    path:'payment', component:PaymentComponent
  },
  {
    path:'rate', component:RateComponent
  },
  {
    path:'report', component:ReportComponent
  },
  {
    path:'history', component:PaymenthistoryComponent
  },
  {
    path:'searchresult', component:SearchResultComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'gallery', component:GalleryComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
