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
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { ExploreAreaViewComponent } from './explore/explorearea-view/explorearea-view.component';
import { CraftViewComponent } from './craft/craft-view/craft-view.component';
import { ClassNamePipe } from './UI/pipe/classname-pipe';
import { MpPipe } from './UI/pipe/mp-pipe';
import { HpPipe } from './UI/pipe/hp-pipe';
import { ExperiencePipe } from './UI/pipe/experience-pipe';

import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ContentComponent,
    HeroesComponent,
    HeroViewComponent,
    ExploreComponent,
    ExploreAreaViewComponent,
    CraftViewComponent,
    TrainComponent,
    CraftComponent,
    HeroDetailComponent,
    ClassNamePipe,
    MpPipe,
    HpPipe,
    ExperiencePipe,
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
