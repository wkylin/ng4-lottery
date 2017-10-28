import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

declare let $: any;

@Component({
    selector: 'app-consinteg-logs',
    templateUrl: './integral-logs.component.html',
    styleUrls: ['./integral-logs.component.css']
})
export class IntegralLogsComponent implements OnInit {
    @Output()
    totalCount: number;
    @Output()
    pageSize: number;
    @Output()
    currentPage: number;
    @Output()
    pageCount: number;
    
    integralList: [any];
    isShow: boolean;
    
    constructor(private http: HttpClient, private router: Router) {
        this.totalCount = 0;
        this.pageSize = 10;
        this.currentPage = 1;
        this.pageCount = 0;
    }
    
    getPageData(event) {
        this.pageSize = event.pageSize;
        const startTime = new Date($('.start-time').val()).getTime() / 1000 || '';
        const endTime = new Date($('.end-time').val()).getTime() / 1000 || '';
        this.getConsIntegralLogs(event.pageSize, event.currentPage, startTime, endTime);
    }
    
    getConsIntegralLogs(pageSize, currentPage, startTime, endTime) {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/getConsIntegLogs?user_id=` + user_id, {
            'length': pageSize,
            'page': currentPage,
            'startTime': startTime,
            'endTime': endTime,
            'type': 1,
            'user_id': user_id
        }).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.totalCount = data['result'].count;
                    this.integralList = data['result'].data;
                    this.pageCount = Math.ceil(this.totalCount / this.pageSize);
                    if (this.totalCount > 0) {
                        this.isShow = true;
                    } else {
                        this.isShow = false;
                    }
                } else {
                    swal({
                        title: data['errormsg'],
                        confirmButtonText: '确定'
                    });
                }
            },
            err => {
                swal({
                    title: err['error']['text'],
                    confirmButtonText: '确定'
                });
            }
        );
    }
    
    queryConsIntegralLogs() {
        this.getPageData({currentPage: 1, pageSize: 10});
    }
    
    timePickerInit() {
        $('.form_datetime').datetimepicker({
            minView: 'month',
            format: 'yyyy-mm-dd',
            autoclose: true,
        });
    }
    
    ngOnInit() {
        this.getConsIntegralLogs(10, 1, '', '');
        this.timePickerInit();
    }
}
