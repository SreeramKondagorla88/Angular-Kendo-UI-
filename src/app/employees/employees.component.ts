import { Employee } from './../employee';
import { ApirequestService } from './../apirequest.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '@progress/kendo-data-query';

// import { DialogTemplateComponent } from '../dialog-template/dialog-template.component';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeeData :Employee;
  public opened = false;
  public errorMessage : string = null;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
};
  constructor(private employee:ApirequestService,
    private formBuilder: FormBuilder,
    ) { }
  loading :boolean = true;
  ngOnInit() {
    this.loading = true
    this.employee.getEmployees().subscribe((data:Employee)=>{
      console.log(JSON.stringify(data));
      
      this.employeeData = data;
      this.loading = false;
    },error =>{
      alert(error)
    }
    )

  }
  public cellClickHandler({ sender, rowIndex,column, columnIndex, dataItem, isEdited }) {
    if (!isEdited && !this.isReadOnly(column.field)) {
        sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
    }
}

public cellCloseHandler(args: any) {
    const { formGroup, dataItem } = args;

    if (!formGroup.valid) {
         // prevent closing the edited cell if there are invalid values.
        args.preventDefault();
    } else if (formGroup.dirty) {
      // alert(JSON.stringify());
        // this.employee.assignValues(dataItem, formGroup.value);
        this.employee.updateEmployee(formGroup.value).subscribe((data:Employee)=>{
          var dtaa = JSON.stringify(data)
        
          console.log(dtaa);
          this.ngOnInit();
        },error =>{
          this.errorMessage = error;
        })
        
    }
}
public createFormGroup(dataItem: any): FormGroup {
  return this.formBuilder.group({
      'id': dataItem.id,
      'employee_name': [dataItem.employee_name, Validators.required],
      'employee_salary': dataItem.employee_salary,
      'employee_age': dataItem.employee_age
  });
}
private isReadOnly(field: string): boolean {
  const readOnlyColumns = ['employee_salary', 'employee_age','id'];
  return readOnlyColumns.indexOf(field) > -1;
}
public removeHandler({ sender, dataItem },dialogSelect) {
  // alert(JSON.stringify(dataItem))
   
    this.employee.removeEmployee(dataItem).subscribe((data)=>{
      alert(JSON.stringify(data));
    
  })
  

  sender.cancelCell()
}
public onStateChange(state: State) {
  this.gridState = state;

  // this.editService.read();
}


public close(status) {
  console.log(`Dialog result: ${status}`);
  this.opened = false;
}

// public openDialog() {
  
//   return new Promise((resolve,reject)=>{
//     const dialogConfig = new MatDialogConfig();

//     // dialogConfig.disableClose = true;
//     dialogConfig.autoFocus = true;
//     dialogConfig.data = {
//         title: "Hello",
//         message:"Lets Try"
//     };
//     dialogConfig.minWidth = 400;

//     const dialogRef = this.dialog.open(DialogTemplateComponent, dialogConfig);

//     dialogRef.afterClosed().subscribe(result => {
//       if(result){
//         resolve(result)
//       }
        
//     });
  
//   })
// }
}
