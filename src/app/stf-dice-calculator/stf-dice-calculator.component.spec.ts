import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StfDiceCalculatorComponent } from './stf-dice-calculator.component';

describe('StfDiceCalculatorComponent', () => {
  let component: StfDiceCalculatorComponent;
  let fixture: ComponentFixture<StfDiceCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StfDiceCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StfDiceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
