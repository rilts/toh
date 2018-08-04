import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isSpecial = true;
  isTest = true;
  nHero: Hero = {
    id: 1,
    name: 'Winstorm'
  };

  ngOnInit() {
  }

  onSave(event: any) {
    console.log(event);
  }
}
