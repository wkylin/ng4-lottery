import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-financial-center',
    templateUrl: './financial-center.component.html',
    styleUrls: ['./financial-center.component.css']
})
export class FinancialCenterComponent implements OnInit {
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
        $(obj).click(function(){
            $(this).addClass('selected');
            this.tab('#tab1 b', '.showBox1');
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
        this.tab('#tab1 b', '.showBox1');
        this.tab('#tab2 li', '.showBox2');
        this.payWaySelect('.selectpayway');
        this.banksSelect('.bankicon .bank-item');
    }
}
