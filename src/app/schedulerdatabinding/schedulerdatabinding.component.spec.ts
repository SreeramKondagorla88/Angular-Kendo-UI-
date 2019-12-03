import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerdatabindingComponent } from './schedulerdatabinding.component';

describe('SchedulerdatabindingComponent', () => {
  let component: SchedulerdatabindingComponent;
  let fixture: ComponentFixture<SchedulerdatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerdatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerdatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
