import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes';
import {Observable, of } from 'rxjs';
//Registering the provider in the @Injectable metadata also allows Angular to //optimize an app by removing the service if it turns out not to be used after all.
@Injectable(
  //This is registering this service to the roort provider, whichever class 
  //needs this would be provided by angular automatically if correctly defined.
  {providedIn: 'root'}
)
export class HeroService {

  constructor() { }
  getHeroes(): Observable<Hero[]> {
     return of(HEROES);
  }

}