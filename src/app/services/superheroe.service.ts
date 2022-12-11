import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Superhero } from '../entities/models/superhero.model';
import { Filter } from '../entities/models/filter.model';
import superHeroes from '../entities/superhero';
import {filters} from '../entities/filter';

@Injectable({
  providedIn: 'root'
})
export class SuperheroApi {

  constructor() { }
  
  // TODO : make sure of JSON Format
  getSuperheroes(): Observable<Superhero[]>  {
    return of(superHeroes);
  }

  getFilters():Observable<Filter[]>{
    return of(filters)
}}
