import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalculatorCustomerdetailComponent } from './calculator/calculator-customerdetail/calculator-customerdetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculationService } from './services/calculation.service';



@NgModule({
    declarations: [
        AppComponent,
        CalculatorCustomerdetailComponent
    ],
    providers: [CalculationService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class AppModule { }
