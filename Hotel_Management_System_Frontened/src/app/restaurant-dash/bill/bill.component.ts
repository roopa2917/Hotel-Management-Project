import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Bill } from 'src/app/model/bill.model';
import { ReceptionistService } from 'src/app/services/receptionist.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  billForm!:FormGroup;
  bill:Bill;
  generate:boolean;
  proceed:boolean;
  total:number;

  constructor(private formBuilder: FormBuilder,private router:Router,private receptionistService:ReceptionistService) { }

  ngOnInit(): void {
    
   
    this.billForm = this.formBuilder.group({

      bill_id: [''],
      gu_id:[''],
      no_of_guest:[''],
      price:[''],
      taxes:[''],
      date:['']

    })
   
  
   this.generate=true;
   this.proceed=false; 
  

  }


GenerateBill()
{
  this.receptionistService.calculateBill(Number(localStorage.getItem("bill_res_id")))
  .subscribe(data=> {
    this.bill = data;
  });
  this.fillBillForm(this.bill);
}
  fillBillForm(bill:Bill)
  {
    this.billForm.controls['bill_id'].setValue(bill.bill_id);
    this.billForm.controls['gu_id'].setValue(bill.gu_id);
    this.billForm.controls['no_of_guest'].setValue(bill.no_of_guest);
    this.billForm.controls['price'].setValue(bill.price); 
    this.billForm.controls['taxes'].setValue(bill.taxes);
    this.billForm.controls['date'].setValue(bill.date);
    this.generate=false;
    this.proceed=true;
   
  }
  Proceed()
  {
    localStorage.setItem("bill_id",this.bill.bill_id.toString());
    this.total=this.bill.price+this.bill.taxes;
    localStorage.setItem("total",this.total.toString());
    
    this.router.navigate(['payment']);

  }

}
