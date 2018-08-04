import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {NavigationStart, Router} from '@angular/router';

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

  constructor(private heroService: HeroService, private router: Router) {
    this.heroService.refresh.subscribe(
      data => {
        console.log(data);
        this.selectedHero = this.heroes.find(item => item.id === data ? true : false);
      }
    );

    this.router.events.subscribe(events => {
      if(events instanceof NavigationStart) {
        console.log('navigation start :' + events.url);
        if(events.url === '/heroes') {
          this.selectedHero = null;
        }
      }
    });
  }

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
