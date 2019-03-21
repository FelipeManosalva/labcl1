import { TestBed } from '@angular/core/testing';

import { DatosCobralexService } from './datos-cobralex.service';

describe('DatosCobralexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosCobralexService = TestBed.get(DatosCobralexService);
    expect(service).toBeTruthy();
  });
});
