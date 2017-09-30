import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
    selector: 'app-personal-center',
    templateUrl: './personal-center.component.html',
    styleUrls: ['./personal-center.component.css']
})
export class PersonalCenterComponent implements OnInit {
    
    api = 'http://47.52.143.236/api';
    userName: string;
    
    constructor(private http: HttpClient, private router: Router) {
    }
    
    // Users/getUserInfo
    getUserInfo() {
        const user_id = sessionStorage.getItem('user_id');
        this.http.get(`${this.api}/Users/getUserInfo?user_id=` + user_id + '&params={"user_id":' + user_id + '}' ).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    console.log(data['result']);
                    // this.router.navigateByUrl('home');
                } else {
                    swal(data['errormsg']);
                }
            },
            err => {
                console.log(err['error'].text);
                swal(err['error']);
            }
        );
    }
    
    ngOnInit() {
        this.userName = 'user name';
        this.getUserInfo();
    }
}
