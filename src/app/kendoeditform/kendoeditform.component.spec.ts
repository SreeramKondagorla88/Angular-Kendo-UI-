import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoeditformComponent } from './kendoeditform.component';

describe('KendoeditformComponent', () => {
  let component: KendoeditformComponent;
  let fixture: ComponentFixture<KendoeditformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoeditformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoeditformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
