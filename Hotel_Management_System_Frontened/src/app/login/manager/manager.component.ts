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
import { Room } from 'src/app/model/room.model';
import { ManagerService } from 'src/app/services/manager.service';

import { ApiService } from '../../shared/api.service';


@Component({
  selector: 'app-owner',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  formValue!: FormGroup;

  allOwnerData: any;
  showAdd!:boolean
  showbtn!:boolean;
  rooms: Room[];
  room:Room=new Room;
  submitted: any;

  constructor(private formBuilder: FormBuilder, private router:Router,private managerService:  ManagerService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      type: ['', [Validators.required]],
      room_image: [''],

    })
    this.getAllRooms()
  }
  get f() { return this.formValue.controls; }
  clickAddResto(){
    this.formValue.reset();
    this.showAdd=true;
    this.showbtn=false;
    this.submitted=false;
    
  }
  setRate()
  {
    this.router.navigate(['rate']);
  }






  getAllRooms()
{
  this.managerService.getRooms()
      .subscribe(data=> {
        this.rooms = data;
      });

  }



  addRoom()
  {

    
    this.submitted=true;
    if(this.formValue.invalid) return;
    this.managerService.addRoom(this.formValue.value).subscribe( data => {
      alert("HMS record Added");
      this.formValue.reset();
     this.getAllRooms();
     
    });




  }
clearForm()
{
  this.formValue.reset();
  this.submitted=false;
}



editRoom(data:Room)
{
    this.showAdd=false;
    this.showbtn=true;

    localStorage.setItem("room_no",data.room_no.toString());
    this.formValue.controls['type'].setValue(data.type);
    this.formValue.controls['room_image'].setValue(data.room_image);


}

updateRoom()
{
  this.managerService.updateRoom(this.formValue.value).subscribe(data=>{
    alert("HMS record updated");
   this.getAllRooms();
  });
}



deleteRoom(room:Room): void {
    let result = confirm('Do you want to delete this record?')
    if(result)
    {
      this.managerService.deleteRoom(room.room_no)
        .subscribe( data => { alert("HMS record deleted")
        this.getAllRooms();
        });
      }
};


}

