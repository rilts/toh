import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  isSpecial = true;
  isTest = true;
  /*
  hero = {
    id: 1,
    name: 'winstorm'
  }
  */
  nHero: Hero = {
    id: 1,
    name: 'Winstorm'
  };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    /* 동기식 방식
    this.heroes = this.heroService.getHeroes();
    */
    this.heroService.getHeroes().subscribe(data => this.heroes = data );
  }

  onSave(event: any) {
    console.log(event);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
