import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'train',
    styleUrls: ['./train.component.scss'],
    templateUrl: './train.component.html'
})

export class TrainComponent implements OnInit{

    public title: string = 'This is the crafting section';

    ngOnInit(): void {
        

    }
}