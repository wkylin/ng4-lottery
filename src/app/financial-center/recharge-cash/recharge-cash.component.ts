import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-recharge-cash',
    templateUrl: './recharge-cash.component.html',
    styleUrls: ['./recharge-cash.component.css']
})
export class RechargeCashComponent implements OnInit {
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
    payWaySelect(obj) {
        $(obj).click(function () {
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        });
    }
    banksSelect(obj) {
        $(obj).click(function () {
            $(this).addClass('cur');
            $(this).siblings().removeClass('cur');
        });
    }
    ngOnInit() {
        this.tab('#tab2 li', '.show-box2');
        this.payWaySelect('.selectpayway');
        this.banksSelect('.bankicon .bank-item');
    }
}
