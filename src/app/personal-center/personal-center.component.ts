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
        this.http.post(`${this.api}/Users/getUserInfo`, {'userId': '283E5F9B3B00CE1F4A78209757223F9C'}).subscribe(
            data => {
                if (data['errormsg'] === null) {
                    this.router.navigateByUrl('home');
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
        this.userName = 'user name';
        this.getUserInfo();
    }
}
