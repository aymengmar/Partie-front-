import { TestBed } from '@angular/core/testing';

import { GestionReclamationService } from './gestion-reclamation.service';

describe('GestionReclamationService', () => {
  let service: GestionReclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionReclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
