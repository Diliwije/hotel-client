import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCard } from './hotel-card';

describe('HotelCard', () => {
  let component: HotelCard;
  let fixture: ComponentFixture<HotelCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
