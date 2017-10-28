import { Component, OnInit, Output, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $: any;
import swal from 'sweetalert2';

@Component({
    selector: 'app-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit, AfterContentInit {
    
    lowersList: [any];
    isShow: boolean;
    userName: '';
    
    @Output()
    totalCount: number;
    @Output()
    pageSize: number;
    @Output()
    currentPage: number;
    @Output()
    pageCount: number;
    
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
        this.getLowers(event.pageSize, event.currentPage, startTime, endTime);
    }
    
    getLowers(pageSize, currentPage, startTime, endTime) {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/team/getLowers?user_id=` + user_id, {
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
                    this.lowersList = data['result'].data;
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
    
    queryLowers() {
        this.getPageData({currentPage: 1, pageSize: 10});
    }
    
    queryLowerByUser(event) {
        this.userName = event.target.value;
        this.getPageData({currentPage: 1, pageSize: 10});
    }
    
    setRebate(id) {
        const that = this;
        const html = '<div class="swal2-container swal2-fade swal2-shown">' +
            '<div role="dialog" aria-labelledby="swal2-title" aria-describedby="swal2-content" class="swal2-modal swal2-show" tabindex="-1" style="width: 500px; padding: 20px; background: rgb(255, 255, 255); display: block; min-height: 219px;">' +
            '<h2 class="swal2-title" id="swal2-title"><div class="dialog-title">设置返点</div></h2>' +
            '<div id="swal2-content" class="swal2-content" style="display: block;">' +
            '<div class="dialog-item">' +
            '<div>' +
            '<span>高频彩返点：</span><input type="text" class="init-pwd">' +
            '</div>' +
            '<div class="text-fixed-first" style="font-size:14px;  margin-left:45px;  color:#1f9bde; display:none;">范围：5.0-7.50</div>' +
            '</div>' +
            '<div class="dialog-item">' +
            '<div><span>低频彩返点：</span><input type="text" class="new-pwd"></div>' +
            '<div class="text-fixed-last" style="font-size:14px;  margin-left:45px; color:#1f9bde; display:none;">范围：5.0-7.50</div></div>' +
            '</div>' +
            '<div class="swal2-buttonswrapper" style="display: block;">' +
            '<button type="button" class="swal2-confirm swal2-styled" aria-label="" style="background-color: rgb(48, 133, 214); border-left-color: rgb(48, 133, 214); border-right-color: rgb(48, 133, 214);">确定</button>' +
            '<button type="button" class="swal2-cancel swal2-styled" aria-label="" style="display: inline-block; background-color: rgb(170, 170, 170);">关闭</button></div>' +
            '</div></div>';
        $('body').append(html);
        $('.init-pwd').focus(function () {
            $('.text-fixed-first').show();
        }).blur(function () {
            $('.text-fixed-first').hide();
        });
        $('.new-pwd').focus(function () {
            $('.text-fixed-last').show();
        }).blur(function () {
            $('.text-fixed-last').hide();
        });
        
        $('.swal2-confirm').click(function () {
            const user_id = sessionStorage.getItem('user_id');
            that.http.post(`api/Users/team/setRebate?user_id=` + user_id, {
                'id': id,
                'maxRebate': $('.init-pwd').val(),
                'minRebate': $('.new-pwd').val(),
                'user_id': user_id
            }).subscribe(
                data => {
                    if (data['errormsg'] === null) {
                        $('.swal2-container').remove();
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
            return false;
        });
        $('.swal2-cancel').click(function () {
            $('.swal2-container').remove();
            return false;
        });
    }
    
    manualRebate(id) {
        const that = this;
        const assets = sessionStorage.getItem('myAssets');
        const html = '<div class="swal2-container swal2-fade swal2-shown">' +
            '<div role="dialog" aria-labelledby="swal2-title" aria-describedby="swal2-content" class="swal2-modal swal2-show" tabindex="-1" style="width: 500px; padding: 20px; background: rgb(255, 255, 255); display: block; min-height: 219px;">' +
            '<h2 class="swal2-title" id="swal2-title"><div class="dialog-title">手动转点</div></h2>' +
            '<div id="swal2-content" class="swal2-content" style="display: block;">' +
            '<div style="text-align:left;margin:10px;">可转余额：' + assets +
            '</div><div class="dialog-item">' +
            '<div>' +
            '<span>转点金额：</span><input type="text" class="init-pwd">' +
            '</div>' +
            '<div class="text-fixed-first" style="font-size:14px;  margin-left:45px;  color:#1f9bde; display:none;">请输入转点金额</div>' +
            '</div>' +
            '<div class="dialog-item">' +
            '<div><span>安全密码：</span><input type="password" class="new-pwd"></div>' +
            '<div class="text-fixed-last" style="font-size:14px;  margin-left:45px; color:#1f9bde; display:none;">请输入安全密码</div></div>' +
            '</div>' +
            '<div class="swal2-buttonswrapper" style="display: block;">' +
            '<button type="button" class="swal2-confirm swal2-styled" aria-label="" style="background-color: rgb(48, 133, 214); border-left-color: rgb(48, 133, 214); border-right-color: rgb(48, 133, 214);">确定</button>' +
            '<button type="button" class="swal2-cancel swal2-styled" aria-label="" style="display: inline-block; background-color: rgb(170, 170, 170);">关闭</button></div>' +
            '</div></div>';
        $('body').append(html);
        $('.init-pwd').focus(function () {
            $('.text-fixed-first').show();
        }).blur(function () {
            $('.text-fixed-first').hide();
        });
        $('.new-pwd').focus(function () {
            $('.text-fixed-last').show();
        }).blur(function () {
            $('.text-fixed-last').hide();
        });
        
        $('.swal2-confirm').click(function () {
            const user_id = sessionStorage.getItem('user_id');
            that.http.post(`api/Users/transferAmount?user_id=` + user_id, {
                'id': id,
                'amount': $('.init-pwd').val(),
                'bankPassword': $('.new-pwd').val(),
                'user_id': user_id
            }).subscribe(
                data => {
                    if (data['errormsg'] === null) {
                        $('.swal2-container').remove();
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
            return false;
        });
        $('.swal2-cancel').click(function () {
            $('.swal2-container').remove();
            return false;
        });
    }
    
    ngAfterContentInit() {
        
    }
    
    ngOnInit() {
        this.getLowers('10', '1', '', '');
        this.timePickerInit();
        
    }
}
