
import { Component } from '@angular/core';
import { SchedulerEvent, CreateFormGroupArgs } from '@progress/kendo-angular-scheduler';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

import '@progress/kendo-date-math/tz/regions/Europe';
import '@progress/kendo-date-math/tz/regions/NorthAmerica';

@Component({
    selector: 'my-app',
    templateUrl: './schedulerdatabinding.component.html'
})
export class SchedulerdatabindingComponent {
    public selectedDate: Date = new Date('2018-10-22T00:00:00');
    public formGroup: FormGroup;
    public events: SchedulerEvent[] = [{
        id: 1,
        title: 'Breakfast',
        start: new Date('2018-10-22T09:00:00'),
        end: new Date('2018-10-22T09:30:00'),
        // recurrenceRule: 'FREQ=DAILY;COUNT=5;'
    }];

    constructor(private formBuilder: FormBuilder) {
        this.createFormGroup = this.createFormGroup.bind(this);
    }

    public createFormGroup(args: CreateFormGroupArgs): FormGroup {
        const dataItem = args.dataItem;

        this.formGroup = this.formBuilder.group({
            'id': args.isNew ? this.getNextId() : dataItem.id,
            'start': [dataItem.start, Validators.required],
            'end': [dataItem.end, Validators.required],
            'startTimezone': [dataItem.startTimezone],
            'endTimezone': [dataItem.endTimezone],
            'isAllDay': dataItem.isAllDay,
            'title': dataItem.title,
            'description': dataItem.description,
            'recurrenceRule': dataItem.recurrenceRule,
            'recurrenceId': dataItem.recurrenceId
        }, {
            validator: this.startEndValidator
        });

        return this.formGroup;
    }

    public getNextId(): number {
        const len = this.events.length;

        return (len === 0) ? 1 : this.events[this.events.length - 1].id + 1;
    }

    public startEndValidator: ValidatorFn = (fg: FormGroup) => {
        const start = fg.get('start').value;
        const end = fg.get('end').value;

        if (start !== null && end !== null && start.getTime() < end.getTime()) {
            return null;
        } else {
            return { range: 'End date must be greater than Start date' };
        }
    }
    public group: any = {
        resources: ['Rooms'],
        orientation: 'horizontal'
    };

    public resources: any[] = [{
        name: 'Rooms',
        data: [
            { text: 'Meeting Room 101', value: 1, color: '#6eb3fa' },
            { text: 'Meeting Room 201', value: 2, color: '#f58a8a' }
        ],
        field: 'roomId',
        valueField: 'value',
        textField: 'text',
        colorField: 'color'
    }];
}
