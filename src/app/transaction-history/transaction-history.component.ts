import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-transaction-history',
    templateUrl: './transaction-history.component.html',
    styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
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
    timePickerInit() {
        $('.form_datetime').datetimepicker({
            minView: 'month',
            format: 'yyyy/mm/dd',
            autoclose: true,
        });
    }
    ngOnInit() {
        this.tab('#tab1 b', '.showBox1');
        this.timePickerInit();
    }
}
