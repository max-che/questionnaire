import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyBuilderComponent } from './readonly-builder.component';

describe('ReadonlyBuilderComponent', () => {
  let component: ReadonlyBuilderComponent;
  let fixture: ComponentFixture<ReadonlyBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlyBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
