import { Component } from '@angular/core';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})

export class ContentComponent {

    public title: string = 'This is the content component';
    public default: string = 'This is the default (empty) content page';
}