import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "app/logic/hero";

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit{

    @Input() hero:Hero;

    ngOnInit(): void {
        console.log('hero detail page loaded!');
        console.log('hero',this.hero);
    }





}