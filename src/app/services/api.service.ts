import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Superhero } from '../entities/models/superhero.model';
import superHeroes from '../entities/superhero';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  
  // TODO : make sure of JSON Format
  getSuperheroes(): Observable<Superhero[]>  {
    return of(superHeroes);
  }
}
