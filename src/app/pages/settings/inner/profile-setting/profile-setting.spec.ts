import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSetting } from './profile-setting';

describe('ProfileSetting', () => {
  let component: ProfileSetting;
  let fixture: ComponentFixture<ProfileSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSetting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
