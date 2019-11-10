import { TestBed } from '@angular/core/testing';

import { KetnoiService } from './ketnoi.service';

describe('KetnoiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KetnoiService = TestBed.get(KetnoiService);
    expect(service).toBeTruthy();
  });
});
