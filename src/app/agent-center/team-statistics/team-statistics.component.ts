import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $: any;
import swal from 'sweetalert2';


@Component({
    selector: 'app-team-statistics',
    templateUrl: './team-statistics.component.html',
    styleUrls: ['./team-statistics.component.css']
})
export class TeamStatisticsComponent implements OnInit {
    
    usable: string;
    winBet: string;
    proAndLoss: string;
    cancelBet: string;
    cashSuc: string;
    recharge: string;
    betReturn: string;
    bet: string;
    memberCount: string;
    newCount: string;
    onlineCount: string;
    agentCount: string;
    userCount: string;
    recPersCoun: string;
    
    constructor(private http: HttpClient, private router: Router) {
    }
    
    getStatData(startTime, endTime) {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/team/getStatData?user_id=` + user_id, {
            'startTime': startTime,
            'endTime': endTime,
            'user_id': user_id
        }).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.usable = data['result'].usable;
                    this.winBet = data['result'].winBet;
                    this.proAndLoss = data['result'].proAndLoss;
                    this.cancelBet = data['result'].cancelBet;
                    this.cashSuc = data['result'].cashSuc;
                    this.recharge = data['result'].recharge;
                    this.betReturn = data['result'].betReturn;
                    this.bet = data['result'].bet;
                    this.memberCount = data['result'].memberCount;
                    this.newCount = data['result'].newCount;
                    this.onlineCount = data['result'].onlineCount;
                    this.agentCount = data['result'].agentCount;
                    this.userCount = data['result'].userCount;
                    this.recPersCoun = data['result'].recPersCoun || 0;
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
    
    queryStatDatas() {
        const startTime = new Date($('.start-time').val()).getTime() / 1000 || '';
        const endTime = new Date($('.end-time').val()).getTime() / 1000 || '';
        this.getStatData(startTime, endTime);
    }
    
    
    ngOnInit() {
        this.getStatData('', '');
        this.timePickerInit();
    }
}
