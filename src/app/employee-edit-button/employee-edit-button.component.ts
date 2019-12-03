import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { State } from '@progress/kendo-data-query';
import { ApirequestService } from '../apirequest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit-button',
  templateUrl: './employee-edit-button.component.html',
  styleUrls: ['./employee-edit-button.component.scss']
})
export class EmployeeEditButtonComponent implements OnInit {
  employeeData :Employee;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
};
private editedRowIndex: number; 
public formGroup: FormGroup;
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
  public cancelHandler({sender, rowIndex}) {
    this.closeEditor(sender, rowIndex);
  } 
  public editHandler({sender, rowIndex, dataItem}) {
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, this.createFormGroup(dataItem));
}
public createFormGroup(dataItem: any): FormGroup {
  return this.formBuilder.group({
      'id': dataItem.id,
      'employee_name': [dataItem.employee_name, Validators.required],
      'employee_salary': dataItem.employee_salary,
      'employee_age': dataItem.employee_age
  });
}
public saveHandler({sender, rowIndex, formGroup, isNew}) {
  const employee = formGroup.value;
  console.log(JSON.stringify(employee))
  this.employee.updateEmployee(employee).subscribe((data:Employee)=>{
    var dtaa = JSON.stringify(data)
  
    console.log(dtaa);
    this.ngOnInit();
  })

  sender.closeRow(rowIndex);
}
private isReadOnly(field: string): boolean {
  const readOnlyColumns = ['employee_salary', 'employee_age','id'];
  return readOnlyColumns.indexOf(field) > -1;
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
private closeEditor(grid, rowIndex = this.editedRowIndex) {
  grid.closeRow(rowIndex);
  this.editedRowIndex = undefined;
  this.formGroup = undefined;
}
}

