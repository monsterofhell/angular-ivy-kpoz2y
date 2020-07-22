import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes';

@Injectable(
  //This is registering this service to the roort provider, whichever class 
  //needs this would be provided by angular automatically if correctly defined.
  {providedIn: 'root'}
)
export class HeroService {

  constructor() { }
getHeroes(): Hero[] {
  return HEROES;
}

}