import { TestBed } from '@angular/core/testing';

import { NgxAutoIdService } from './ngx-auto-id.service';

describe('NgxAutoIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAutoIdService = TestBed.get(NgxAutoIdService);
    expect(service).toBeTruthy();
  });
});
