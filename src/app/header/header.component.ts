import { Component } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent {

public title: string = 'This is the header component';

}