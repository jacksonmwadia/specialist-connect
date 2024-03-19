import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertAddAppointmentComponent } from './expert-add-appointment.component';

describe('ExpertAddAppointmentComponent', () => {
  let component: ExpertAddAppointmentComponent;
  let fixture: ComponentFixture<ExpertAddAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertAddAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpertAddAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
