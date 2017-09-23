import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-header-nav',
    templateUrl: './header-nav.component.html',
    styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

    constructor() {
    }

    menuDropdown() {
        $('.menu > ul > li:has(ul)').addClass('menu-dropdown-icon');
        $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
        // $('.menu > ul').before('<a href="#" class="menu-mobile">Navigation</a>');
        $('.menu > ul > li').hover(function (e) {
            if ($(window).width() > 943) {
                $(this).children('ul').stop(true, false).fadeToggle(150);
                e.preventDefault();
            }
        });
        $('.menu > ul > li').click(function (e) {
            if ($(window).width() <= 943) {
                $(this).children('ul').fadeToggle(150);
                e.preventDefault();
            }
        });
    }
    ngOnInit() {
        this.menuDropdown();
    }
}
