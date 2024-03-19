import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingUserComponent } from './view-booking-user.component';

describe('ViewBookingUserComponent', () => {
  let component: ViewBookingUserComponent;
  let fixture: ComponentFixture<ViewBookingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBookingUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBookingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
