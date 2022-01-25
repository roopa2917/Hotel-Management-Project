import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/model/room.model';
import { ReceptionistService } from 'src/app/services/receptionist.service';
import { domainToUnicode } from 'url';

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css']
})
export class SearchRoomComponent implements OnInit {

  searchForm!:FormGroup
  check_in:Date;
  check_out:Date;
  no_of_adults:number;
  no_of_child:number;
  rooms:Room[];
  example:Date=new Date("2021/12/21");
  

  constructor(private formBuilder: FormBuilder,private router:Router,private receptionistService:  ReceptionistService) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
     check_in: [''],
     check_out: [''],
      no_of_adults:[''],
      no_of_child:['']
     
    })
    
  }

  findRoom()
  {
  this.check_in=this.searchForm.controls['check_in'].value;
   this.check_out=this.searchForm.controls['check_out'].value;
    this.no_of_adults=this.searchForm.controls['no_of_adults'].value;
  this.no_of_child=this.searchForm.controls['no_of_child'].value;

 
   localStorage.setItem("check_in",this.check_in.toString())
  localStorage.setItem("check_out",this.check_out.toString())
   localStorage.setItem("no_of_adults",this.no_of_adults.toString())
   localStorage.setItem("no_of_child",this.no_of_child.toString())
   
    

    this.router.navigate(['searchresult']);

  }

}


























