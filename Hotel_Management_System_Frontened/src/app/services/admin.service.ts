import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../model/owner.model';


@Injectable()
export class AdminService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44359/api';

  





  
getUser()
{
  return this.http.get<Owner[]>(this.baseUrl + '/admin/view');
}



addUser(user:Owner)
{

 
 
  return this.http.post(this.baseUrl +'/admin/add',user);
}

updateUser(user:Owner) {
  return this.http.put(this.baseUrl + '/admin/update/' + localStorage.getItem("email"), user);
}

deleteUser(email:string)
{
  return this.http.delete(this.baseUrl + '/admin/delete/'+email);//change delete to owner

}

}


