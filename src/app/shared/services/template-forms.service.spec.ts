import { TestBed, inject } from '@angular/core/testing';

import { TemplateFormsService } from './template-forms.service';

describe('TemplateFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateFormsService]
    });
  });

  it('should be created', inject([TemplateFormsService], (service: TemplateFormsService) => {
    expect(service).toBeTruthy();
  }));
});
