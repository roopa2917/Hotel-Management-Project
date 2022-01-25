import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Owner } from '../model/owner.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  owners: Owner;

  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router,private loginService:  LoginService ) { }



  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],

    })
  }
  get f() { return this.loginForm.controls;}

  onSubmit( ){
    this.submitted =true;
    if(this.loginForm.invalid) return;

    this.redirectUser();
  }

  errorMsg;
  
  redirectUser(){
   this.loginService.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value)
   .subscribe(data=> { this.owners = data;} , error=> { this.errorMsg = error;} );
   // document.write(this.owners.email);
   if(this.owners.designation=="Owner")
   {
    this.router.navigate(['owner']);
  }
  else if(this.owners.designation=="Manager")
  {
    this.router.navigate(['manager']);
  }
  else if(this.owners.designation=="Receptionist")
  {
    this.router.navigate(['restaurant']);
  }
  else
      this.router.navigate(['login']);
    }
}
