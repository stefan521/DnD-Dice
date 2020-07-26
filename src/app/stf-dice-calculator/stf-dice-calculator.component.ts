import { Component } from '@angular/core';
const random = require('random');

@Component({
  selector: 'app-stf-dice-calculator',
  templateUrl: './stf-dice-calculator.component.html',
  styleUrls: ['./stf-dice-calculator.component.scss']
})
export class StfDiceCalculatorComponent {
  results: string = '';

  constructor() { }

  onClearResults() {
    this.results = '';
  }

  roll(dWhat): Number {
    const randomNum = random.uniformInt(1, dWhat)();

    return Math.floor(randomNum);
  }

  onDiceRolled(dWhat) {
    this.results = "You rolled D" + dWhat + " you got: " + this.roll(dWhat);
  }

}
