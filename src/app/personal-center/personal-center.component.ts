import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
    selector: 'app-personal-center',
    templateUrl: './personal-center.component.html',
    styleUrls: ['./personal-center.component.css']
})
export class PersonalCenterComponent implements OnInit {
    userName: string;
    userInfo: string;
    integrity: string;
    userBalance: string;
    
    constructor(private http: HttpClient, private router: Router) {
    }
    getUserInfo() {
        const user_id = sessionStorage.getItem('user_id');
        this.http.post(`api/Users/getUserInfo?user_id=` + user_id, {'user_id': user_id}, {'responseType': 'json'}).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.userInfo = data['result'];
                    this.userName = this.userInfo['username'];
                    this.integrity = this.userInfo['dataIntegrity'] + '%';
                    this.userBalance = this.userInfo['balance'];
                    console.log(data['result']);
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
