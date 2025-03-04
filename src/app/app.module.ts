import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListComponent } from './heroes/list/list.component';
import { CounterComponent } from './counter/components/counter.component';
import { CounterModule } from './counter/counter.module';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CounterModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  public name: string = 'Ironman';
  public age: number = 45;
}
