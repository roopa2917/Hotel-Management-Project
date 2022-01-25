import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guest } from '../model/guest.model';
import { Reservation } from '../model/reservation.model';
import { Room } from '../model/room.model';
import { Rate } from '../model/rate.model';
import { Bill } from '../model/bill.model';
import { Payment } from '../model/payment.model';
import { paymenthistory } from '../model/paymentHistory.model';


@Injectable()
export class ReceptionistService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44359/api';

  





  
getGuests()
{
  return this.http.get<Guest[]>(this.baseUrl + '/receptionist/view');
}



//addEmp(employee:Employee)

//addEmp(name:string,address:string,nic:string,sal:string,age:number,occupation:string,email:string)
addGuest(guest:Guest)
{

 
 
  return this.http.post(this.baseUrl +'/receptionist/add',guest);
}

updateGuest(guest:Guest) {
  return this.http.put(this.baseUrl + '/receptionist/update/' + localStorage.getItem("gu_id"),guest);
}

deleteGuest(gu_id:number)
{
  return this.http.delete(this.baseUrl + '/receptionist/delete/'+gu_id);//change delete to owner

}

getAllRes()
{
  return this.http.get<Reservation[]>(this.baseUrl + '/receptionist/reservation/view');
}


findRoom(check_in:string,check_out:string)
{

  return this.http.get<Room[]>(this.baseUrl + '/receptionist/search/'+check_in+'/'+check_out);
}

bookRoom(reservation:Reservation)
{
  return this.http.post(this.baseUrl +'/Receptionist/reservation/add',reservation);

}
cancelReservation(res_id:number)
{
  return this.http.delete(this.baseUrl + '/Receptionist/reservation/delete/'+res_id);
}

calculateBill(id:number)
{
  return this.http.get<Bill>(this.baseUrl + '/receptionist/calBill/'+id);
}
payment(payment:Payment)
{
  return this.http.post(this.baseUrl +'/Receptionist/payment',payment);
}

getPaymentHistory()
{

  return this.http.get<paymenthistory[]>(this.baseUrl + '/receptionist/paymentHistory/');
}
}


