import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityContext } from './security-context';

describe('SecurityContext', () => {
  let component: SecurityContext;
  let fixture: ComponentFixture<SecurityContext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityContext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityContext);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
