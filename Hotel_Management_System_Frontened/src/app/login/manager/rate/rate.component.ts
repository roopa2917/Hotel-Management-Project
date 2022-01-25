import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Rate } from 'src/app/model/rate.model';
import { RateService } from 'src/app/services/rates.services';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  rateForm!: FormGroup;
  showAdd!:boolean;
  showbtn!:boolean;
  rates:Rate[];
  rate:Rate;


  constructor(private formBuilder: FormBuilder, private router:Router,private rateService:  RateService) { }

  ngOnInit(): void {
    this.rateForm = this.formBuilder.group({

      type: [''],
      no_of_day:[''],
      no_of_guests:[''],
      first_night_price:[''],
      extension_price:[''],
      taxes:['']

    })
    this.getAllRates()
  }

  clickAddResto(){
    this.rateForm.reset();
    this.showAdd=true;
    this.showbtn=false;
    
    
  }

  getAllRates()
  {
    this.rateService.getRates()
      .subscribe(data=> {
        this.rates = data;
      });

  }

  
  addRate()
  {

    
   
    this.rateService.addRate(this.rateForm.value).subscribe( data => {
      alert("HMS record Added");
      this.rateForm.reset();
     this.getAllRates();
     
    });
 }

 clearForm()
{
  this.rateForm.reset();
}

editRate(data:Rate)
{
    this.showAdd=false;
    this.showbtn=true;

    localStorage.setItem("type",data.type);
    this.rateForm.controls['type'].setValue(data.type);
    this.rateForm.controls['no_of_day'].setValue(data.no_of_day);
    this.rateForm.controls['no_of_guests'].setValue(data.no_of_guests);
    this.rateForm.controls['first_night_price'].setValue(data.first_night_price);
    this.rateForm.controls['extension_price'].setValue(data.extension_price);
    this.rateForm.controls['taxes'].setValue(data.taxes);




}

updateRate()
{
  this.rateService.updateRate(this.rateForm.value).subscribe(data=>{
    alert("HMS record updated");
   this.getAllRates();
  });
}

deleteRate(rate:Rate): void {
  let result = confirm('Do you want to delete this record?')
  if(result)
  {
    this.rateService.deleteRate(rate.type)
      .subscribe( data => { alert("HMS record deleted")
      this.getAllRates();
      });
    }
};




}
