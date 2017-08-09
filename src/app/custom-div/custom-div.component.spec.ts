import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDivComponent } from './custom-div.component';

describe('CustomDivComponent', () => {
  let component: CustomDivComponent;
  let fixture: ComponentFixture<CustomDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
