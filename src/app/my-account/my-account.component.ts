import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.component.html',
    styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
    userInfo: object;
    frozenAmount: number;
    usableAmount: number;
    maxRebate: number;
    minRebate: number;
    addTime: string;
    balance: number;
    
    
    isQQ: boolean;
    QQ: string;
    
    constructor(private http: HttpClient, private router: Router) {
    }
    
    getUserInfo() {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/getUserInfo?user_id=` + user_id, {'user_id': user_id}, {'responseType': 'json'}).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.userInfo = data['result'];
                    this.maxRebate = this.userInfo['maxRebate'];
                    this.minRebate = this.userInfo['minRebate'];
                    this.addTime = this.userInfo['addTime'];
                    this.frozenAmount = this.userInfo['frozenAmount'];
                    this.usableAmount = this.userInfo['usableAmount'];
                    this.balance = this.userInfo['balance'];
                    
                    this.isQQ = this.userInfo['qq'] !== null ? true : false;
                    this.QQ = this.userInfo['qq'];
                    console.log(this.isQQ);
                } else {
                    swal(data['errormsg']);
                }
            },
            err => {
                console.log(err['error']);
                swal(err['error']);
            }
        );
    }
    
    goRechargeCash() {
        this.router.navigateByUrl('personal-center/financial-center/recharge-cash');
    }
    
    goWithDrawCash() {
        this.router.navigateByUrl('personal-center/financial-center/withdraw-cash');
    }
    
    refreshCash() {
        this.getUserInfo();
    }
    
    bindQQ() {
        swal('绑定QQ');
    }
    ngOnInit() {
        this.getUserInfo();
    }
    
}
