import { TestBed } from '@angular/core/testing';

import { MusikerService } from './musiker.service';

describe('MusikerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusikerService = TestBed.get(MusikerService);
    expect(service).toBeTruthy();
  });
});
