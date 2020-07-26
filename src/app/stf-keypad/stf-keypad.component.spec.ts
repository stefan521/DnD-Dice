import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StfKeypadComponent } from './stf-keypad.component';

describe('StfKeypadComponent', () => {
  let component: StfKeypadComponent;
  let fixture: ComponentFixture<StfKeypadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StfKeypadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StfKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
