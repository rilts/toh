import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  selectedHero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.heroService.getHero(+params["hero_id"]).subscribe(hero => this.selectedHero = hero);
      this.heroService.refresh.next(+params["hero_id"]);
    });
  }

  goBack() {
    history.back();
  }

}
