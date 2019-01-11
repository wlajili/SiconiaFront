import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterDeconnectionComponent } from './meter-deconnection.component';

describe('MeterDeconnectionComponent', () => {
  let component: MeterDeconnectionComponent;
  let fixture: ComponentFixture<MeterDeconnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterDeconnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterDeconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
