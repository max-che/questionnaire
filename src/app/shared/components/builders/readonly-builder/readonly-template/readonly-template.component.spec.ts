import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyTemplateComponent } from './readonly-template.component';

describe('ReadonlyTemplateComponent', () => {
  let component: ReadonlyTemplateComponent;
  let fixture: ComponentFixture<ReadonlyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlyTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
