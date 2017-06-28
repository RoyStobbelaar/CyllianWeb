import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroViewComponent } from './heroes/hero-view/hero-view.component'; 
import { ExploreComponent } from './explore/explore.component';
import { TrainComponent } from './train/train.component';
import { CraftComponent } from './craft/craft.component';

import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ContentComponent,
    HeroesComponent,
    HeroViewComponent,
    ExploreComponent,
    TrainComponent,
    CraftComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
