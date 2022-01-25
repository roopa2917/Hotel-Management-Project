import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../model/owner.model';
import { LoginComponent } from '../login/login.component';
import { Employee} from '../model/employee.model';

@Injectable()
export class OwnerService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44359/api';

  





  
getEmployee()
{
  return this.http.get<Employee[]>(this.baseUrl + '/Owner/view');
}



//addEmp(employee:Employee)

//addEmp(name:string,address:string,nic:string,sal:string,age:number,occupation:string,email:string)
addEmp(employee:Employee)
{

 // return this.http.post(this.baseUrl +'/owner/add',{name,address,nic,sal,age,occupation,email});
//document.write("hello",employee.emp_Address,employee.emp_Name+employee.emp_Sal)
 
  return this.http.post(this.baseUrl +'/owner/add',employee);
}

updateEmp(employee: Employee) {
  return this.http.put(this.baseUrl + '/owner/update/' + localStorage.getItem("stm_id"), employee);
}
deleteEmp(id:number)
{
  return this.http.delete(this.baseUrl + '/owner/delete/'+id);//change delete to owner

}

getStaffSal()
{
  return this.http.get<number>(this.baseUrl + '/Owner/staffSal');
}
getIncome()
{
  return this.http.get<number>(this.baseUrl + '/Owner/income');
}
}



