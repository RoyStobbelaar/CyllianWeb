import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit{

    ngOnInit(): void {
        console.log('load content');
    }

    public title: string = 'This is the content component';
    public default: string = 'This is the default (empty) content page';


}