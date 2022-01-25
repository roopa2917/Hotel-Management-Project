import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation.model';
import { ReceptionistService } from 'src/app/services/receptionist.service';

@Component({
  selector: 'app-resrvation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  res: Reservation[];
  

  constructor(private receptionistService:  ReceptionistService,private router:Router) {}

  ngOnInit(): void {
    
    this.getRes()
  }
  
  getRes()
{
this.receptionistService.getAllRes()
      .subscribe(data=> {
        this.res = data;
      });

  }

  cancel(res_id:number): void {
    let result = confirm('Do you want to cancel this reservation?')
    if(result)
    {
      this.receptionistService.cancelReservation(res_id)
        .subscribe( data => { alert("Reservation Cancelled");
        this.getRes();
        });
      }
};

bill(res_id:number)
{
  localStorage.setItem("bill_res_id",res_id.toString());
  this.router.navigate(['bill']);
}






}

