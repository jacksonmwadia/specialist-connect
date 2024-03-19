import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatExpertComponent } from './chat-expert.component';

describe('ChatExpertComponent', () => {
  let component: ChatExpertComponent;
  let fixture: ComponentFixture<ChatExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatExpertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
