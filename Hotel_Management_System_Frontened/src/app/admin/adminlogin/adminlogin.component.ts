import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';



import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/adminlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  status:string="";


  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router,private adminloginService:  AdminLoginService ) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']

    })
  }

  onSubmit(){


   this.adminloginService.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value).subscribe(data=> {
    if(data=="Successful")
    {
      this.router.navigate(['admin']);
      alert("Welcome Admin");
    }

    else
    {
      this.router.navigate(['adminlogin']);
    }

  });

}
}
