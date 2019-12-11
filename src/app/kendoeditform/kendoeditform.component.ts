
//////////////////////////////////////

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../employee.interface';
@Component({
  selector: 'kendo-grid-edit-form',
  templateUrl: './kendoeditform.component.html',
  styles: [
    'input[type=text] { width: 100%; }'
  ],
})
export class KendoeditformComponent {

  public active = false;
    public editForm: FormGroup = new FormGroup({
       
        'id': new FormControl(),
        'employee_name':  new FormControl('', Validators.required),
        'employee_salary': new FormControl(),
        'employee_age': new FormControl(),
    });

    @Input() public isNew = false;

    @Input() public set model(product: Employee) {
        this.editForm.reset(product);

        this.active = product !== undefined;
    }

    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<Employee> = new EventEmitter();

    public onSave(e): void {
      alert("hello")
        e.preventDefault();
        this.save.emit(this.editForm.value);
        this.active = false;
    }

    public onCancel(e): void {
        e.preventDefault();
        this.closeForm();
    }

    private closeForm(): void {
        this.active = false;
        this.cancel.emit();
    }
}

