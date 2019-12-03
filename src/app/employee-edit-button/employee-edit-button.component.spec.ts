import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditButtonComponent } from './employee-edit-button.component';

describe('EmployeeEditButtonComponent', () => {
  let component: EmployeeEditButtonComponent;
  let fixture: ComponentFixture<EmployeeEditButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEditButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
