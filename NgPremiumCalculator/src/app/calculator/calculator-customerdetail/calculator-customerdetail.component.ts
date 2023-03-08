import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CalculationService } from '../../services/calculation.service';
import { Calculation } from '../../model/calculation';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator-customerdetail',
  //template: '<h1>Customer Details</h1>'
  templateUrl: 'calculator-customerdetail.component.html',
  styleUrls: ['calculator-customerdetail.component.css']
})

export class CalculatorCustomerdetailComponent implements OnInit {
  isSubmitted = false;
  getPremiumData = "";
  calculation!: Calculation;
  result!: any;
  DeathPremium!: any;
  TPDPremiumMonthly: any;

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  constructor(private calculationService: CalculationService, public formBuilder: FormBuilder, private http: HttpClient) {
  }


  ngOnInit(): void {
  }

  calcPrem = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    age: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    dob: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
    Occupation: new FormControl('', [Validators.required]),
    sumins: new FormControl('', [Validators.required])
  })

  changeOccupation(e: any) {
    this.Occupation.setValue(e.target.value, {
      onlySelf: true
    })

  }

  onSubmit() {
    var i = false;
    var curAge = 0;
    if (this.calcPrem.value.dob) {
      var timeDiff = Math.abs(Date.now() - new Date(this.calcPrem.value.dob).getTime());
      curAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
    this.isSubmitted = true;
    if (this.calcPrem.valid && curAge <= 70 && this.Occupation.value != 0) {
      i = true;
      const calc = Object.assign({}, this.calculation, this.calcPrem.value );
      this.calculationService.Calculate(calc).subscribe((results) => {
        this.getPremiumData = results;
    });
    } else {
      if (curAge > 70) {
        this.DOB.setErrors({ notUnique: true });
      }
      if (this.Occupation.value == 0) {
        this.Occupation.setErrors({ notUnique: true })
        alert("Pease select the ocuupation.");
      }
      i = false;

    }
    return i;
  }

  get FirstName(): FormControl {
    return this.calcPrem.get("fname") as FormControl
  }

  get Age(): FormControl {
    return this.calcPrem.get("age") as FormControl
  }

  get DOB(): FormControl {
    return this.calcPrem.get("dob") as FormControl
  }

  get SumInsured(): FormControl {
    return this.calcPrem.get("sumins") as FormControl
  }

  get Occupation(): FormControl {
    return this.calcPrem.get("Occupation") as FormControl
  }

}
