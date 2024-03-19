import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAppointendComponent } from './booking-appointend.component';

describe('BookingAppointendComponent', () => {
  let component: BookingAppointendComponent;
  let fixture: ComponentFixture<BookingAppointendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingAppointendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingAppointendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
