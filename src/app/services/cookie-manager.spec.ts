import { TestBed } from '@angular/core/testing';

import { CookieManager } from './cookie-manager';

describe('CookieManager', () => {
  let service: CookieManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
