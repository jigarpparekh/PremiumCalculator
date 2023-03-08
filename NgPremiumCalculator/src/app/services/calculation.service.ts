import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Calculation } from '../model/calculation';

@Injectable()
export class CalculationService {

  API_URL = 'https://localhost:44331/api/PremiumCalculation/';
  header = {'Content-Type': 'application/json'};

  constructor(private http: HttpClient) { }


  Calculate(calculation: Calculation): Observable<string> {

    return this.http.post<string>(
              this.API_URL,
              calculation,
              { headers: new HttpHeaders(this.header) }
          );
  }


}
