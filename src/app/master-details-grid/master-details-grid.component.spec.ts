import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailsGridComponent } from './master-details-grid.component';

describe('MasterDetailsGridComponent', () => {
  let component: MasterDetailsGridComponent;
  let fixture: ComponentFixture<MasterDetailsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDetailsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDetailsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
