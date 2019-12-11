import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GridModule, PDFModule, ExcelModule} from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeEditButtonComponent } from './employee-edit-button/employee-edit-button.component';

import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerdatabindingComponent } from './schedulerdatabinding/schedulerdatabinding.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EmployeepopupComponent } from './employeepopup/employeepopup.component';
import { KendoeditformComponent } from './kendoeditform/kendoeditform.component';
import { EmployeeDetailsDownComponent } from './employee-details-down/employee-details-down.component';
import { MasterDetailsGridComponent } from './master-details-grid/master-details-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    PageNotFoundComponent,
    EmployeeEditButtonComponent,
    SchedulerComponent,
    SchedulerdatabindingComponent,
   
    EmployeepopupComponent,
   
    KendoeditformComponent,
   
    EmployeeDetailsDownComponent,
   
    MasterDetailsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule,
    DialogModule,
    ButtonsModule,
    BrowserAnimationsModule,
    SchedulerModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    PDFModule,
    ExcelModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
