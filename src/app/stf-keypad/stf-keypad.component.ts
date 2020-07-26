import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stf-keypad',
  templateUrl: './stf-keypad.component.html',
  styleUrls: ['./stf-keypad.component.scss']
})
export class StfKeypadComponent {

  @Output('diceRolled') btnPress = new EventEmitter<Number>();

  onKeyPress(dWhat: Number) {
    this.btnPress.emit(dWhat)
  }

  constructor() { }

}
