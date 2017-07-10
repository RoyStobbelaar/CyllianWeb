import { Component, OnInit } from '@angular/core';
import { ExploreArea } from 'app/logic/exploreArea';

@Component({
    selector: 'explore',
    styleUrls: ['./explore.component.scss'],
    templateUrl: './explore.component.html'
})

export class ExploreComponent implements OnInit {

    public title: string = 'Explore component here!';
    public exploreAreas: ExploreArea[];

    ngOnInit(): void {
        //Fill list with explore areas
        this.exploreAreas = new Array();
        this.exploreAreas.push(
            {
                imagePath: './assets/area/forest.png',
                areaName: 'Forest of Origin',
                areaLevel: 1,
                areaLevelRequirement: 1,
                areaClassRequirement: 'None',
                maxAmountOfHeroes: 4
            }, {
                imagePath: './assets/area/cave.png',
                areaName: 'Cave of Ttrials',
                areaLevel: 2,
                areaLevelRequirement: 1,
                areaClassRequirement: 'None',
                maxAmountOfHeroes: 4
            }, {
                imagePath: './assets/area/road.png',
                areaName: 'Road to Seriel',
                areaLevel: 4,
                areaLevelRequirement: 2,
                areaClassRequirement: 'None',
                maxAmountOfHeroes: 4
            })
    }
}