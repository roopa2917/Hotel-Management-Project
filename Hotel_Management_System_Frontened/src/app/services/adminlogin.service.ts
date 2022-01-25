import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class AdminLoginService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44359/api';

  




login(email:string ,pwd:string)
{

    return this.http.get(this.baseUrl+'/admin/login/'+email+'/'+pwd, {responseType: 'text'});
    
  }
}