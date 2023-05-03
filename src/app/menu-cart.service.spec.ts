import { TestBed } from '@angular/core/testing';

import { MenuCartService } from './menu-cart.service';

describe('MenuCartService', () => {
  let service: MenuCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
