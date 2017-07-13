import { Component, OnInit } from '@angular/core';
import { Material, Rarity } from 'app/logic/material';


@Component({
    selector: 'craft',
    styleUrls: ['./craft.component.scss'],
    templateUrl: './craft.component.html'
})

export class CraftComponent implements OnInit {

    public title: string = 'This is the crafting section';
    public materials: Material[];

    ngOnInit(): void {
        this.materials = new Array();

        this.materials.push(
            {
                name: 'stone',
                imagePath: './assets/material/stone.png',
                value: 10,
                rarity: Rarity.Common,
                amount: 6
            }, {
                name: 'wood',
                imagePath: './assets/material/wood.png',
                value: 6,
                rarity: Rarity.Common,
                amount: 3,
            }, {
                name: 'iron',
                imagePath: './assets/material/iron.png',
                value: 12,
                rarity: Rarity.Common,
                amount: 1
            }, {
                name: 'silver',
                imagePath: './assets/material/silver.png',
                value: 25,
                rarity: Rarity.Common,
                amount: 0
            }, {
                name: 'gold',
                imagePath: './assets/material/gold.png',
                value: 35,
                rarity: Rarity.Common,
                amount: 0
            }, {
                name: 'Obsidian',
                imagePath: './assets/material/obsidian.png',
                value: 150,
                rarity: Rarity.Uncommon,
                amount: 0
            }
        )
    }
}