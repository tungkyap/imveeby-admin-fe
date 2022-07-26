import { TestBed } from '@angular/core/testing';

import { AdminImveebyService } from './admin-imveeby.service';

describe('AdminImveebyService', () => {
  let service: AdminImveebyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminImveebyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
