import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpertsComponent } from './view-experts.component';

describe('ViewExpertsComponent', () => {
  let component: ViewExpertsComponent;
  let fixture: ComponentFixture<ViewExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewExpertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
