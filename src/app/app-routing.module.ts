// import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEditButtonComponent } from './employee-edit-button/employee-edit-button.component';
// import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerdatabindingComponent } from './schedulerdatabinding/schedulerdatabinding.component';
import { EmployeepopupComponent } from './employeepopup/employeepopup.component';
import { EmployeeDetailsDownComponent } from './employee-details-down/employee-details-down.component';
import { MasterDetailsGridComponent } from './master-details-grid/master-details-grid.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/employee',
    pathMatch:'full'
  },
  {
    path:'employeeB',
    component:EmployeeEditButtonComponent,
    
  },
  {
    path :"employee",
    component : EmployeesComponent
  }, 
  {
    path : 'scheduler',
    component : SchedulerdatabindingComponent
  },
  {
    path : 'employeeP',
    component: EmployeepopupComponent
  },
  {
    path : 'employeeD',
    component : EmployeeDetailsDownComponent
  },
  {
    path : 'masterDetails',
    component : MasterDetailsGridComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
