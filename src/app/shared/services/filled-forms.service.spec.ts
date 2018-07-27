import { TestBed, inject } from '@angular/core/testing';

import { FilledFormsService } from './filled-forms.service';

describe('FilledFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilledFormsService]
    });
  });

  it('should be created', inject([FilledFormsService], (service: FilledFormsService) => {
    expect(service).toBeTruthy();
  }));
});
