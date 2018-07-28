import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
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
  hero: Hero = {
    id: 1,
    name: 'Winstorm'
  };
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  onSave(event: any) {
    console.log(event);
  }

}
