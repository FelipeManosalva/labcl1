import { TestBed, async, inject } from '@angular/core/testing';

import { SesionGuard } from './sesion.guard';

describe('SesionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SesionGuard]
    });
  });

  it('should ...', inject([SesionGuard], (guard: SesionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
