import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $: any;
import swal from 'sweetalert2';


@Component({
    selector: 'app-lower-turnover',
    templateUrl: './lower-turnover.component.html',
    styleUrls: ['./lower-turnover.component.css']
})
export class LowerTurnoverComponent implements OnInit {
    @Output()
    totalCount: number;
    @Output()
    pageSize: number;
    @Output()
    currentPage: number;
    @Output()
    pageCount: number;
    
    lowerList: [any];
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
        this.getLowerLogs(event.pageSize, event.currentPage, startTime, endTime);
    }
    
    getLowerLogs(pageSize, currentPage, startTime, endTime) {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/team/getAccLogs?user_id=` + user_id, {
            'length': pageSize,
            'page': currentPage,
            'startTime': startTime,
            'endTime': endTime,
            'user_name': this.userName || '',
            'user_id': user_id
        }).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.totalCount = data['result'].count;
                    this.lowerList = data['result'].data;
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

    enterLowerList(event) {
        this.userName = event.target.value;
        this.getPageData({currentPage: 1, pageSize: 10});
    }
    
    queryLowerList() {
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
        this.getLowerLogs(10, 1, '', '');
        this.timePickerInit();
    }
}
