import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  /*
  hero = {
    id: 1,
    name: 'winstorm'
  }
  */
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    /* 동기식 방식
    this.heroes = this.heroService.getHeroes();
    */
    this.heroService.getHeroes().subscribe(data => this.heroes = data );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
