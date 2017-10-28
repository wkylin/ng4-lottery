import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

declare let $: any;

@Component({
    selector: 'app-system-messages',
    templateUrl: './system-messages.component.html',
    styleUrls: ['./system-messages.component.css']
})
export class SystemMessagesComponent implements OnInit {
    
    logList: [any];
    isShow: boolean;
    
    @Output()
    count: number;
    
    @Output()
    pageSize: number;
    
    constructor(private http: HttpClient, private router: Router) {
    }
    
    getMessage(pageSize, currentPage, startTime, endTime) {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Messages/getMsgs?user_id=` + user_id, {
            'length': pageSize,
            'page': currentPage,
            'startTime': startTime,
            'endTime': endTime,
            'type': '1',
            'user_id': user_id
        }).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.count = data['result'].count;
                    this.logList = data['result'].data;
                    console.log(this.logList);
                    if (this.count > 0) {
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
    
    timePickerInit() {
        $('.form_datetime').datetimepicker({
            minView: 'month',
            format: 'yyyy-mm-dd',
            autoclose: true,
        });
    }
    
    queryLoginLog() {
        const pageSize = 10, currentPage = 1;
        const startTime = new Date($('.start-time').val()).getTime() / 1000 || '';
        const endTime = new Date($('.end-time').val()).getTime() / 1000 || '';
        this.getMessage(pageSize, currentPage, startTime, endTime);
    }
    
    ngOnInit() {
        this.getMessage('10', '1', '', '');
        this.timePickerInit();
    }
}
