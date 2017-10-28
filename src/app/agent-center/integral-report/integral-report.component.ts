import { Component, OnInit, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $: any;
import swal from 'sweetalert2';

@Component({
    selector: 'app-integral-report',
    templateUrl: './integral-report.component.html',
    styleUrls: ['./integral-report.component.css']
})
export class IntegralReportComponent implements OnInit {
    
    @Output()
    totalCount: number;
    @Output()
    pageSize: number;
    @Output()
    currentPage: number;
    @Output()
    pageCount: number;
    
    logList: [any];
    isShow: boolean;
    userName: '';
    
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
        this.getLoginLog(event.pageSize, event.currentPage, startTime, endTime);
    }
    
    getLoginLog(pageSize, currentPage, startTime, endTime) {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/team/getConsIntegLogs?user_id=` + user_id, {
            'user_name': this.userName,
            'length': pageSize,
            'page': currentPage,
            'startTime': startTime,
            'endTime': endTime,
            'user_id': user_id
        }).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.totalCount = data['result'].count;
                    this.logList = data['result'].data;
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
                    title: err['error']['error']['message'],
                    confirmButtonText: '确定'
                });
            }
        );
    }
    
    timePickerInit() {
        $('.form_datetime').datetimepicker({
            minView: 'month',
            format: 'yyyy-mm-dd',
            autoclose: true,
        });
    }
   
    queryLoginLog() {
        this.getPageData({currentPage: 1, pageSize: 10});
    }
    
    getLoginLogByUser(event) {
        this.userName = event.target.value;
        this.getPageData({currentPage: 1, pageSize: 10});
    }
    
    ngOnInit() {
        this.getLoginLog('10', '1', '', '');
        this.timePickerInit();
    }
}
