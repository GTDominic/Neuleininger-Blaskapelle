import { TestBed } from '@angular/core/testing';

import { AuftritteService } from './auftritte.service';

describe('AuftritteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuftritteService = TestBed.get(AuftritteService);
    expect(service).toBeTruthy();
  });
});
