import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledFormCardComponent } from './filled-form-card.component';

describe('FilledFormCardComponent', () => {
  let component: FilledFormCardComponent;
  let fixture: ComponentFixture<FilledFormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilledFormCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
