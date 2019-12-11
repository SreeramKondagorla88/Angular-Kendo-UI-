
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.interface';
import { State } from '@progress/kendo-data-query';
import { ApirequestService } from '../apirequest.service';
import { FormBuilder  } from '@angular/forms';
@Component({
  selector: 'app-employeepopup',
  templateUrl: './employeepopup.component.html',
  styleUrls: ['./employeepopup.component.scss']
})
export class EmployeepopupComponent implements OnInit {
 employeeData :Employee;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
};
private editedRowIndex: number; 

  editDataItem: Employee;
  public isNew: boolean;
  constructor(private employee:ApirequestService,private formBuilder: FormBuilder) { }
  loading :boolean = true;
  ngOnInit() {
    
    this.loading = true
    this.employee.getEmployees().subscribe((data:Employee)=>{
      console.log(JSON.stringify(data));
      
      this.employeeData = data;
      this.loading = false;
    })
    
  }
   
  public editHandler({dataItem}) {
    this.editDataItem = dataItem;
        this.isNew = false;
}
public addHandler() {
  this.editDataItem = new Employee();
  
  this.isNew = true;
}
public saveHandler(data) {
  
  const employee = data;
  alert(JSON.stringify(data));
  alert(this.isNew);
  if(this.isNew === true)
  {
    this.employee.createEmployee(employee).subscribe(data=>{
      alert(JSON.stringify(data))
    })
  }
  else{
    this.employee.updateEmployee(employee).subscribe((data:Employee)=>{
      var dtaa = JSON.stringify(data)
    
      console.log(dtaa);
      this.ngOnInit();
    })
  }
  
  // this.editDataItem = undefined;

  // sender.closeRow(rowIndex);
}

public removeHandler({ sender, dataItem }) {
  // alert(JSON.stringify(dataItem))
  this.employee.removeEmployee(dataItem).subscribe((data)=>{
    alert(JSON.stringify(data));
  })
 // alert(sender.cancelCell())
}
public onStateChange(state: State) {
  this.gridState = state;

  // this.editService.read();
}


}

