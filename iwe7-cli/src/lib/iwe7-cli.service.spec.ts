import { TestBed, inject } from '@angular/core/testing';

import { Iwe7CliService } from './iwe7-cli.service';

describe('Iwe7CliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Iwe7CliService]
    });
  });

  it('should be created', inject([Iwe7CliService], (service: Iwe7CliService) => {
    expect(service).toBeTruthy();
  }));
});
