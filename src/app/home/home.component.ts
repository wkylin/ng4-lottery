import { Component, OnInit, OnDestroy } from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    fullPageInit() {
        $('#flower').fullpage({
            resize: false,
            'navigation': true
        });
    }
    ngOnInit() {
        this.fullPageInit();
    }
    ngOnDestroy() {
        $('#fp-nav').remove();
    }
}
