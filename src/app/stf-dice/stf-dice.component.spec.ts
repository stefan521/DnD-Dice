import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StfDiceComponent } from './stf-dice.component';

describe('StfDiceComponent', () => {
  let component: StfDiceComponent;
  let fixture: ComponentFixture<StfDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StfDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StfDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
