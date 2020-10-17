import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stf-dice',
  templateUrl: './stf-dice.component.html',
  styleUrls: ['./stf-dice.component.scss']
})
export class StfDiceComponent implements OnInit {

  @Input() sidesCount: number = 6;
  rolling: boolean = false;
  spinDurationMs = 3000;

  constructor() { }

  ngOnInit(): void {
  }

  roll() {
    this.rolling = true;

    
    setTimeout(() => {
      this.rolling = false;
    }, this.spinDurationMs);
  }

}
