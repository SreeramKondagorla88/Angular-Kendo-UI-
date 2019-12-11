import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsDownComponent } from './employee-details-down.component';

describe('EmployeeDetailsDownComponent', () => {
  let component: EmployeeDetailsDownComponent;
  let fixture: ComponentFixture<EmployeeDetailsDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
