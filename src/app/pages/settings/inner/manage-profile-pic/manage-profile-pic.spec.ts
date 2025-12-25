import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProfilePic } from './manage-profile-pic';

describe('ManageProfilePic', () => {
  let component: ManageProfilePic;
  let fixture: ComponentFixture<ManageProfilePic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageProfilePic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageProfilePic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
