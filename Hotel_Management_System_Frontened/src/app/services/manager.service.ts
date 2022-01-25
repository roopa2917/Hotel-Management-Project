import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../model/room.model';
import { Employee} from '../model/employee.model';

@Injectable()
export class ManagerService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44359/api';

  





  
getRooms()
{
  return this.http.get<Room[]>(this.baseUrl + '/manager/view');
}



//addEmp(employee:Employee)

//addEmp(name:string,address:string,nic:string,sal:string,age:number,occupation:string,email:string)
addRoom(room:Room)
{

 
 
  return this.http.post(this.baseUrl +'/manager/add',room);
}

updateRoom(room:Room) {
  return this.http.put(this.baseUrl + '/manager/update/' + localStorage.getItem("room_no"), room);
}

deleteRoom(room_no:number)
{
  return this.http.delete(this.baseUrl + '/manager/delete/'+room_no);//change delete to owner

}

}


