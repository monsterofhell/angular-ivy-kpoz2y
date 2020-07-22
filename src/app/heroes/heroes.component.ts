import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  heroes: Hero[];
  selectedHero: Hero;
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
