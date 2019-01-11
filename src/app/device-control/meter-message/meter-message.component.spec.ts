import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterMessageComponent } from './meter-message.component';

describe('MeterMessageComponent', () => {
  let component: MeterMessageComponent;
  let fixture: ComponentFixture<MeterMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
