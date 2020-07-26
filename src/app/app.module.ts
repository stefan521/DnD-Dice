import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StfDiceCalculatorComponent } from './stf-dice-calculator/stf-dice-calculator.component';
import { StfKeypadComponent } from './stf-keypad/stf-keypad.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    StfDiceCalculatorComponent,
    StfKeypadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
