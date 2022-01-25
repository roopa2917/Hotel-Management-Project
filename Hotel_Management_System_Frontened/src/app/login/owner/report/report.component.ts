import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

 staffSal:number;
 income:number;
 profit:number;
 profit_per:string;
 loss:number;
 loss_per:string;
 reportgen:boolean=false;
 profittrue:boolean=false;
 losstrue:boolean=false;

  constructor(private ownerService:OwnerService) { }

  ngOnInit(): void {
    this.ownerService.getStaffSal().subscribe(data=>{
      this.staffSal=data;
    })

    this.ownerService.getIncome().subscribe(data=>{
      this.income=data;
    })


  }

  generateReport()
  {
    this.reportgen=true;
    if(this.income>this.staffSal)
    {
      this.profittrue=true;
      this.profit=this.income-this.staffSal;
      this.profit_per=((this.profit/this.income)*100).toFixed(2);
    }
    else if(this.staffSal>this.income)
    {
      this.losstrue=true;
      this.loss=this.staffSal-this.income;
      this.loss_per=((this.loss/this.income)*100).toFixed(2);

    }


  }


}
