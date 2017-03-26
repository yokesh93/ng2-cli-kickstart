import { TestBed, inject } from '@angular/core/testing';

import { IsinService } from './isin.service';

describe('IsinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsinService]
    });
  });

  it('should ...', inject([IsinService], (service: IsinService) => {
    expect(service).toBeTruthy();
  }));
});
