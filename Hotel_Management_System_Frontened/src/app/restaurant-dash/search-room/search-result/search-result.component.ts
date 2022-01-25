import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation.model';
import { Room } from 'src/app/model/room.model';
import { ReceptionistService } from 'src/app/services/receptionist.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  check_in:string;
  check_out:string;
  no_of_adults:number;
  no_of_child:number;
  rooms:Room[];
  reservation:Reservation=new Reservation();

  constructor(private router:Router,private receptionistService:  ReceptionistService) { }

  ngOnInit(): void {
    this.getAvailRoom();
  }
  getAvailRoom()
  {

   this.check_in=localStorage.getItem("check_in");
    this.check_out=localStorage.getItem("check_out");
   
    this.receptionistService.findRoom(this.check_in,this.check_out)
      .subscribe(data=> {
        this.rooms = data;
      });

      
  }
  bookRoom(room_id:number)
  {
    
    
    this.reservation.no_of_child= Number(localStorage.getItem("no_of_child"));
    this.reservation.no_of_adults=Number(localStorage.getItem("no_of_adults"));
    this.reservation.check_in_date=this.check_in;
    this.reservation.check_out_date=this.check_out;
    this.reservation.status="Booked";
    var time_difference = new Date(this.check_out).getTime() - new Date(this.check_in).getTime();  
    var days_difference = time_difference / (1000 * 60 * 60 * 24);
    this.reservation.number_of_nights=days_difference;
    this.reservation.gu_id=Number(localStorage.getItem("gu_id"));
    this.reservation.room_no=room_id;
    this.receptionistService.bookRoom(this.reservation)
    .subscribe(data=> {
      alert("Room Booked Successfully!!");
      this.router.navigate(['reservation']);
    });
  }


}

