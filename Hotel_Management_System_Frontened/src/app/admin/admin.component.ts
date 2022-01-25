import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

import { OwnerService } from 'src/app/services/owner.service';

import { Router } from '@angular/router';
import { Owner } from '../model/owner.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-owner',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  formValue!: FormGroup;

  showAdd!:boolean
  showbtn!:boolean;
  users: Owner[];
  user:Owner=new Owner;

  constructor(private formBuilder: FormBuilder, private adminService:  AdminService,private router:Router) {}

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({

      email: [''],
      password: [''],
      designation:[''],

         })

    this.getUser()

  }

  clickAddResto(){
    this.formValue.reset();
    this.showAdd=true;
    this.showbtn=false;
  }

  getUser()
{
  this.adminService.getUser()
      .subscribe(data=> {
        this.users = data;
      });

  }



  addUser()
  {



    this.adminService.addUser(this.formValue.value).subscribe( data => {
      alert("HMS record Added");
      this.formValue.reset();
     this.getUser();
    });






  }
clearForm()
{
  this.formValue.reset();
}

editUser(data:Owner)
{
    this.showAdd=false;
    this.showbtn=true;

    localStorage.setItem("email",data.email);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['password'].setValue(data.password);
    this.formValue.controls['designation'].setValue(data.designation);


}

updateUser()
{
  this.adminService.updateUser(this.formValue.value).subscribe(data=>{
    alert("HMS record updated");
   this.getUser();
  });
}



deleteUser(user:Owner): void {
    let result = confirm('Do you want to delete this record?')
    if(result)
    {
      this.adminService.deleteUser(user.email)
        .subscribe( data => { alert("HMS record deleted")
        this.getUser();
        });
      }
};



}

