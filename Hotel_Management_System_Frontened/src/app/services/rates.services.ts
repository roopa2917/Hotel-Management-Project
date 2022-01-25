import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rate } from '../model/rate.model';

@Injectable()
export class RateService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44359/api';

  





  
getRates()
{
  return this.http.get<Rate[]>(this.baseUrl + '/manager/rate/view');
}



//addEmp(employee:Employee)

//addEmp(name:string,address:string,nic:string,sal:string,age:number,occupation:string,email:string)
addRate(rate:Rate)
{

 
 
  return this.http.post(this.baseUrl +'/manager/rate/add',rate);
}

updateRate(rate:Rate) {
  return this.http.put(this.baseUrl + '/manager/rate/update/' + localStorage.getItem("type"), rate);
}

deleteRate(type:string)
{
  return this.http.delete(this.baseUrl + '/manager/rate/delete/'+type);//change delete to owner

}

}


