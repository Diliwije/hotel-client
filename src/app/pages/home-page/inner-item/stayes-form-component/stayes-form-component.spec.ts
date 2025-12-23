import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayesFormComponent } from './stayes-form-component';

describe('StayesFormComponent', () => {
  let component: StayesFormComponent;
  let fixture: ComponentFixture<StayesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayesFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
