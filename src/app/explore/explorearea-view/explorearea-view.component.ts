import { Component, OnInit, Input } from '@angular/core';
import { ExploreArea } from '../../logic/explorearea';

@Component({
    selector: 'explorearea-view',
    templateUrl: './explorearea-view.component.html',
    styleUrls: ['./explorearea-view.component.scss']
})

export class ExploreAreaViewComponent implements OnInit {

    @Input() area:ExploreArea;

    ngOnInit(): void {
        console.log('load area');
    }

}