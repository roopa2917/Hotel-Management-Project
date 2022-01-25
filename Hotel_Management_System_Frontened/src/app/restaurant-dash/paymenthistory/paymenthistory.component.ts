import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { paymenthistory } from 'src/app/model/paymentHistory.model';
import { ReceptionistService } from 'src/app/services/receptionist.service';

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.component.html',
  styleUrls: ['./paymenthistory.component.css']
})
export class PaymenthistoryComponent implements OnInit {

  history:paymenthistory[];

  constructor(private router:Router,private receptionistService:  ReceptionistService) { }

  ngOnInit(): void {
    this.getAllPaymentHistory();
  }
  getAllPaymentHistory()
  {
   
    this.receptionistService.getPaymentHistory()
      .subscribe(data=> {
        this.history = data;
      });
;
  } 

}
