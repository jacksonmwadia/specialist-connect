import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointBookingComponent } from './appoint-booking.component';

describe('AppointBookingComponent', () => {
  let component: AppointBookingComponent;
  let fixture: ComponentFixture<AppointBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
