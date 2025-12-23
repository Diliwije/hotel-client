import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayesContextComponent } from './stayes-context-component';

describe('StayesContextComponent', () => {
  let component: StayesContextComponent;
  let fixture: ComponentFixture<StayesContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayesContextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayesContextComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
