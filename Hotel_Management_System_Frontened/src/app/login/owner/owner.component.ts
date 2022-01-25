import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Employee } from 'src/app/model/employee.model';
import { OwnerService } from 'src/app/services/owner.service';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
})
export class OwnerComponent implements OnInit {
  formValue: FormGroup;

  showAdd!:boolean
  showbtn!:boolean;
  employees: Employee[];
  employee:Employee=new Employee;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, private api: ApiService,private ownerService:  OwnerService,private router:Router) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({

      emp_Name:['', [Validators.required]],
      emp_Address: ['',[Validators.required]],
     // nic:['',[Validators.required]],
      emp_Sal:['',[Validators.required]],
      age:['',[Validators.required]],
      occupation:['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],



         })
    //this.getAllData()
    this.getEmp()
  }
  get f() { return this.formValue.controls;}
  clickAddResto(){
    this.submitted=false;
    this.formValue.reset();
    this.showAdd=true;
    this.showbtn=false;
  }











  getEmp()
{
  this.ownerService.getEmployee()
      .subscribe(data=> {
        this.employees = data;
      });

  }



  addEmp()
  {
    this.submitted=true;
    if(this.formValue.invalid)return;

    /*this.employee.emp_Name = this.formValue.value.name;
    this.employee.email = this.formValue.value.email;
    this.employee.emp_Address = this.formValue.value.address;
    this.employee.nic = this.formValue.value.nic;
    this.employee.emp_Sal = this.formValue.value.salary;
    this.employee.age = this.formValue.value.age;
    this.employee.occupation = this.formValue.value.occupation;*/

    this.ownerService.addEmp(this.formValue.value).subscribe( data => {
      alert("HMS record Added");
      this.formValue.reset();
     this.getEmp();
    });






  }
clearForm()
{
  this.formValue.reset();
  this.submitted=false;
}

editEmp(data:Employee)
{
    this.showAdd=false;
    this.showbtn=true;

    localStorage.setItem("stm_id",data.stm_id.toString());
    this.formValue.controls['emp_Name'].setValue(data.emp_Name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['age'].setValue(data.age);
    //this.formValue.controls['nic'].setValue(data.nic);
    this.formValue.controls['emp_Sal'].setValue(data.emp_Sal);
    this.formValue.controls['occupation'].setValue(data.occupation);
    this.formValue.controls['emp_Address'].setValue(data.emp_Address);
   // this.formValue.controls['services'].setValue(data.services);


}

updateEmp()
{
  this.ownerService.updateEmp(this.formValue.value).subscribe(data=>{
    alert("HMS record updated");
   this.getEmp();
  });
}



deleteEmp(employee: Employee): void {
    let result = confirm('Do you want to delete this record?')
    if(result)
    {
      this.ownerService.deleteEmp(employee.stm_id)
        .subscribe( data => { alert("HMS record deleted")
        this.getEmp();
        });
      }
};


}

