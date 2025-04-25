import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentAcknowledgeComponent } from './consent-acknowledge.component';

describe('ConsentAcknowledgeComponent', () => {
  let component: ConsentAcknowledgeComponent;
  let fixture: ComponentFixture<ConsentAcknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsentAcknowledgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsentAcknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
