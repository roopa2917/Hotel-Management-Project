import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from 'src/app/model/payment.model';
import { ReceptionistService } from 'src/app/services/receptionist.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm! : FormGroup
  getPayment:boolean;
  get:boolean;
  pay:boolean;
  dt:Date;

  constructor(private formBuilder: FormBuilder,private receptionistService:ReceptionistService,private router:Router) { }

  ngOnInit(): void {
      this.paymentForm = this.formBuilder.group({
      pay_time : [''],
      bill_id : [''],
      credit_details : [''],
      total : [''],
     
    })
    this.get=true;
    this.pay=false;
  

  }

getPaymentDetails()
{ 
  this.dt=new Date();
  this.paymentForm.controls['pay_time'].setValue(this.dt.getFullYear()+"/"+this.dt.getMonth()+"/"+this.dt.getDate()+" "+this.dt.getHours()+":"+this.dt.getMinutes()+":"+this.dt.getSeconds());
  this.paymentForm.controls['bill_id'].setValue(Number(localStorage.getItem('bill_id')));
  this.paymentForm.controls['total'].setValue(Number(localStorage.getItem('total')))
  this.get=false;
  this.pay=true;

}
Payment()
{
  this.receptionistService.payment(this.paymentForm.value).subscribe(data=> {
    alert("Payment Done!!!");
    this.router.navigate(['history']);
  });
}
  
}
