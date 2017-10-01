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
    maxRebate: number;
    minRebate: number;
    addTime: string;
    
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
                    console.log(this.userInfo);
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
    
    ngOnInit() {
        this.getUserInfo();
    }
    
}
