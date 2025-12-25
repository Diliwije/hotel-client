import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelMapView } from './hotel-map-view';

describe('HotelMapView', () => {
  let component: HotelMapView;
  let fixture: ComponentFixture<HotelMapView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelMapView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelMapView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
