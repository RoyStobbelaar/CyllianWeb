import { Component, OnInit, Input } from '@angular/core';
import { Material } from '../../logic/material';

@Component({
    selector: 'material-view',
    templateUrl: './craft-view.component.html',
    styleUrls: ['./craft-view.component.scss']
})

export class CraftViewComponent implements OnInit {

    @Input() material: Material;

    ngOnInit(): void {
        console.log('load material');
    }

}