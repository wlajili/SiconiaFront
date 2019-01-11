import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterConnectionComponent } from './meter-connection.component';

describe('MeterConnectionComponent', () => {
  let component: MeterConnectionComponent;
  let fixture: ComponentFixture<MeterConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
