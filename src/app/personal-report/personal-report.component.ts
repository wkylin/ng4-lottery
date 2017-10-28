import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $: any;
import swal from 'sweetalert2';

@Component({
    selector: 'app-personal-report',
    templateUrl: './personal-report.component.html',
    styleUrls: ['./personal-report.component.css']
})
export class PersonalReportComponent implements OnInit {
    
    constructor(private http: HttpClient, private router: Router) {
    }
    
    winBet: string;
    usable: string;
    cashSuc: string;
    proAndLoss: string;
    bet: string;
    betReturn: string;
    recharge: string;
    cancelBet: string;
    frozen: string;
    
    getStatData(startTime, endTime) {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/getStatData?user_id=` + user_id, {
            type: 1,
            endTime: endTime,
            startTime: startTime,
            user_id: user_id
        }).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.winBet = data['result']['winBet'];
                    this.usable = data['result']['usable'];
                    this.cashSuc = data['result']['cashSuc'];
                    this.proAndLoss = data['result']['proAndLoss'];
                    this.bet = data['result']['bet'];
                    this.betReturn = data['result']['betReturn'];
                    this.recharge = data['result']['recharge'];
                    this.cancelBet = data['result']['cancelBet'];
                    this.frozen = data['result']['frozen'];
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
    
    getPersonalData() {
        const startTime = new Date($('.personal-report .start-time').val()).getTime() / 1000;
        const endTime = new Date($('.personal-report .end-time').val()).getTime() / 1000;
        this.getStatData(startTime, endTime);
    }
    
    ngOnInit() {
        this.getStatData('', '');
        this.timePickerInit();
    }
    
}
