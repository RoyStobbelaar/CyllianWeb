import { Component, OnInit } from '@angular/core';
import { Hero, ClassType } from '../logic/hero';
import { HeroService } from "app/services/hero.service";

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

    public heroes: Hero[];
    public hero1: Hero;
    public selectedHero: Hero = null;
    public loading: boolean;

    constructor(
        private _heroService: HeroService
    ){

    }

    ngOnInit(): void {
        this.loading = true;
        //Create some heroes to show
        this.heroes = new Array();

        this._heroService.getHeroes()
        .then(result =>{
            this.heroes = result;
            this.loading = false;
            console.log(result);
            console.log(this.heroes);
        }).catch(err => {
            console.log(err);
            this.loading = false;
        })

        // this.heroes.push(
        //     {
        //         name: 'Hashiera',
        //         class: ClassType.Warrior,
        //         maxHP: 100,
        //         currentHP: 100,
        //         maxMana: 20,
        //         currentMana: 20,
        //         portrait: './assets/portraits/hashiera.png',
        //         strenght: 16,
        //         dexterity: 16,
        //         intelligence: 12,
        //         id: 1,
        //         level: 1,
        //         experience: 0,
        //     }, {
        //         name: 'Shana',
        //         class: ClassType.Rogue,
        //         maxHP: 75,
        //         currentHP: 75,
        //         maxMana: 30,
        //         currentMana: 30,
        //         portrait: './assets/portraits/shana.png',
        //         strenght: 12,
        //         dexterity: 18,
        //         intelligence: 12,
        //         id: 2,
        //                         level: 1,
        //         experience: 0,
        //     }, {
        //         name: 'Thazahar',
        //         class: ClassType.Barbarian,
        //         maxHP: 125,
        //         currentHP: 125,
        //         maxMana: 10,
        //         currentMana: 10,
        //         portrait: './assets/portraits/hashiera.png',
        //         strenght: 18,
        //         dexterity: 14,
        //         intelligence: 8,
        //         id: 3,
        //                         level: 1,
        //         experience: 0,
        //     }, {
        //         name: 'Zhixis',
        //         class: ClassType.Warlock,
        //         maxHP: 70,
        //         currentHP: 70,
        //         maxMana: 40,
        //         currentMana: 40,
        //         portrait: './assets/portraits/shana.png',
        //         strenght: 10,
        //         dexterity: 16,
        //         intelligence: 16,
        //         id: 4,
        //                         level: 1,
        //         experience: 0,

        //     });
    }

    public title: string = 'This is the hero overview';

    public selectHero(hero:Hero){
        console.log('SELECT HERO');
        this.selectedHero = hero;
    }
}