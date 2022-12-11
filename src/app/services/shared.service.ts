import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Countries } from '../entities/country';
import { CountryResponse } from '../entities/models/country.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getCountries(): Observable<CountryResponse>  {
    return of(Countries);
  }

}
