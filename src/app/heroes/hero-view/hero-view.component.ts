import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../logic/hero';

@Component({
    selector: 'hero-view',
    templateUrl: './hero-view.component.html',
    styleUrls: ['hero-view.component.scss']
})

export class HeroViewComponent implements OnInit{

    @Input() hero: Hero;

        ngOnInit(): void {
        console.log(this.hero);
    }

}