import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  hero = {
    name: 'Spiderman',
    age: 20,
  };

  get capitalizedName(): string {
    return this.hero.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.hero.name} - ${this.hero.age}`;
  }

  getChangedName(): void {
    this.hero.name = 'Batman';
  }

  getChangedAge(): void {
    this.hero.age = 50;
  }

  resetForm(): void {
    this.hero.name = 'Spiderman';
    this.hero.age = 20;
  }
}
