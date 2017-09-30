import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-phone-fix',
    templateUrl: './phone-fix.component.html',
    styleUrls: ['./phone-fix.component.css']
})
export class PhoneFixComponent implements OnInit {

    constructor() {
    }

    phoneFix() {
        $('.phone-fix label').stop(true, true).animate({left: '110px'}, 500, function () {
            $('.phone-fix-content').stop(true, true).animate({left: '0'}, 500);
        });
    }

    phoneFixCancel() {
        $('.phone-fix-content').stop(true, true).animate({left: '110px'}, 500, function () {
            $('.phone-fix label').stop(true, true).animate({left: '50px'}, 500);
        });
    }

    ngOnInit() {
    }

}
