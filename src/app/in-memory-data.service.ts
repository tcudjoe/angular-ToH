import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', img: 'assets/img/drnice.png', description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna allowed', },
      { id: 13, name: 'Bombasto', img: 'assets/img/bombasto.jpeg', description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna allowed', },
      { id: 14, name: 'Celeritas', img: 'assets/img/celeritas.png', description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna allowed',},
      { id: 15, name: 'Magneta', img: 'assets/img/magneta.png', description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna allowed',},
      { id: 16, name: 'RubberMan', img: 'assets/img/rubberman.png', description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna allowed'},
      { id: 17, name: 'Dynama', img: 'assets/img/dynama.png', description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna allowed'},
      { id: 18, name: 'Dr. IQ', img: 'assets/img/driq.png', description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna allowed'},
      { id: 19, name: 'Magma', img: 'assets/img/magma.png', description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna allowed'},
      { id: 20, name: 'Tornado', img: 'assets/img/tornado.png', description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna allowed'},
    ] ;
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }
  constructor() { }
}
