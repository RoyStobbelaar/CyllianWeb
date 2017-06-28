import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ExploreComponent } from './explore/explore.component';
import { TrainComponent } from './train/train.component';
import { CraftComponent } from './craft/craft.component';

const appRoutes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'train', component: TrainComponent },
    { path: 'craft', component: CraftComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule{}