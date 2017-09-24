import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-news-bulletin',
    templateUrl: './news-bulletin.component.html',
    styleUrls: ['./news-bulletin.component.css']
})
export class NewsBulletinComponent implements OnInit {
    constructor() {
    }
    tab(tabID, box) {
        $(tabID).click(function () {
            $(tabID).removeClass('on');
            $(box).hide();
            $(this).addClass('on');
            $(box).eq($(this).index()).fadeIn();
        });
    }
    ngOnInit() {
        this.tab('#tab1 b', '.showBox1');
    }
}
