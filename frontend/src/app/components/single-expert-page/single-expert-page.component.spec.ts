import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleExpertPageComponent } from './single-expert-page.component';

describe('SingleExpertPageComponent', () => {
  let component: SingleExpertPageComponent;
  let fixture: ComponentFixture<SingleExpertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleExpertPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleExpertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
