import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorCustomerdetailComponent } from './calculator/calculator-customerdetail/calculator-customerdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorCustomerdetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
