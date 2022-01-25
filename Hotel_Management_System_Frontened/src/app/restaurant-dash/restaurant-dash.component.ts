import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Guest } from '../model/guest.model';


import { ReceptionistService } from '../services/receptionist.service';

import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css'],
})
export class RestaurantDashComponent implements OnInit {
  formValue!: FormGroup;
  allRestaurantData: any;
  showAdd!:boolean
  showbtn!:boolean;
  guests: Guest[];
  guest:Guest=new Guest;
  submitted: boolean;


  constructor(private formBuilder: FormBuilder, private api: ApiService,private router:Router,private receptionistService:  ReceptionistService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.email]],
      gender:['',[Validators.required]],
      phone_no: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      address: ['',[Validators.required]],
      company:['',[Validators.required]],
     
    })
    this.getAllGuests()
  }
  get f() { return this.formValue.controls;}
  clickAddResto(){
    this.submitted=false;
    this.formValue.reset();
    this.showAdd=true;
    this.showbtn=false;
  }
  //Now subscribing our data, which is map via services
  /*
  addResto() {
    this.retaurantModelObj.name = this.formValue.value.name;
    this.retaurantModelObj.email = this.formValue.value.email;
    this.retaurantModelObj.mobile = this.formValue.value.mobile;
    this.retaurantModelObj.address = this.formValue.value.address;
     this.retaurantModelObj.company = this.formValue.value.company;
      this.retaurantModelObj.gender = this.formValue.value.gender;
   // this.retaurantModelObj.services = this.formValue.value.services;

    this.api.postRestaurant(this.retaurantModelObj).subscribe((res): void => {
        console.log(res);
        alert('Restaurant records added successfully');
        let ref = document.getElementById('clear');
        ref?.click();
        this.formValue.reset();
        this.getAllData();
      },
      (err) => {
        alert('Something went wrong');
      }
    )
  }
  getAllData(){
    this.api.getRestaurant().subscribe(res=>{
      this.allRestaurantData = res;
    })
  }

  deleteResto(data:any){
    this.api.deleteRestaurant(data.id).subscribe(res=>{
      alert("Restaurant record deleted")
      this.getAllData();
    })
  }
  onEditResto(data:any){
    this.showAdd=false;
    this.showbtn=true;

    this.retaurantModelObj.id = data.id
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['company'].setValue(data.company);
   this.formValue.controls['gender'].setValue(data.gender);
  }
  updateResto(){

    this.retaurantModelObj.name = this.formValue.value.name;
    this.retaurantModelObj.email = this.formValue.value.email;
    this.retaurantModelObj.mobile = this.formValue.value.mobile;
    this.retaurantModelObj.address = this.formValue.value.address;
    this.retaurantModelObj.company = this.formValue.value.company;
    this.retaurantModelObj.gender = this.formValue.value.gender;
   // this.retaurantModelObj.services = this.formValue.value.services;

    this.api.updateRestaurant(this.retaurantModelObj,this.retaurantModelObj.id).subscribe(res=>{
      alert("Restaurant record updated");
      let ref = document.getElementById('clear');
        ref?.click();
        this.formValue.reset();
        this.getAllData();
    })
  }
*/








  getAllGuests()
{
  this.receptionistService.getGuests()
      .subscribe(data=> {
        this.guests = data;
      });

  }



  addGuest()
  {
    
   
    this.submitted =true;
    if(this.formValue.invalid) return;

    this.receptionistService.addGuest(this.formValue.value).subscribe( data => { 
      alert("HMS record Added");
      this.formValue.reset();
     this.getAllGuests();
    });


  

  }
clearForm()
{
  this.formValue.reset();
}



editGuest(data:Guest)
{
    this.showAdd=false;
    this.showbtn=true;

    localStorage.setItem("gu_id",data.gu_id.toString());
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['gender'].setValue(data.gender);
    this.formValue.controls['phone_no'].setValue(data.phone_no);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['company'].setValue(data.company);


}

updateGuest()
{
  this.receptionistService.updateGuest(this.formValue.value).subscribe(data=>{ 
    alert("HMS record updated");
   this.getAllGuests();
  });
}



deleteGuest(guest:Guest): void {
    let result = confirm('Do you want to delete this record?')
    if(result)
    {
      this.receptionistService.deleteGuest(guest.gu_id)
        .subscribe( data => { alert("HMS record deleted")
        this.getAllGuests();
        });
      }
};


searchRoom(id:number)
{
  localStorage.setItem("gu_id",id.toString());
  this.router.navigate(['searchroom']);
  

}













}

