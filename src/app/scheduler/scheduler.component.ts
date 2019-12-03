import { Component, OnInit } from '@angular/core';
import { SchedulerEvent, CreateFormGroupArgs } from '@progress/kendo-angular-scheduler';

import { EditService } from '../edit.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  public formGroup: FormGroup;
  public selectedDate: Date = new Date('2013-06-10T00:00:00');

  constructor(
      private formBuilder: FormBuilder,
      public editService: EditService
  ) {}

  public ngOnInit(): void {
      this.editService.read();
  }

  // Note the use of a lambda function in order to bind `this`
  public createFormGroup = (args: CreateFormGroupArgs): FormGroup => {
      const dataItem = args.dataItem;

      this.formGroup = this.formBuilder.group({
          'TaskID': args.isNew ? 0 : dataItem.TaskID,
          'Start': [dataItem.Start, Validators.required],
          'End': [dataItem.End, Validators.required],
          'StartTimezone': [dataItem.StartTimezone],
          'EndTimezone': [dataItem.EndTimezone],
          'IsAllDay': dataItem.IsAllDay,
          'Title': dataItem.Title,
          'Description': dataItem.Description,
          'RecurrenceRule': dataItem.RecurrenceRule,
          'RecurrenceID': dataItem.RecurrenceID
      });

      return this.formGroup;
  }
}