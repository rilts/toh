import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
/*
  getHeroes(): Hero[] {
    return HEROES;
  }
*/
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // find 원하는 객체를 찾으면 객체를 반환하고 종료
    // findIndex 원하는 객체를 찾으면 객체의 인덱스를 반환하고 종료
    // filter 원하는 객체를 전부 찾아서 배열을 반환
    const hero = HEROES.find(item =>
      item.id === id ? true : false
    );
    return of(hero);
  }
}
