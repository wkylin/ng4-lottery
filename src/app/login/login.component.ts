import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $: any;
import swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    captchaCode = '';
    api = 'http://47.52.143.236/api';
    
    constructor(private http: HttpClient, private router: Router) {
    }
    
    getCode() {
        this.http.post(`${this.api}/captcha/getCaptchaCode`, {},{responseType: 'text'}).subscribe(
            data => {
                this.captchaCode = 'data:image/png;base64,' + JSON.parse(data).result.data;
            },
            err => {
                console.log(JSON.parse(err).error.text);
            }
        );
    }
    
    login() {
        this.http.post(`${this.api}/Users/login`, {
                'username': $('.login-name').val(),
                'password': $('.login-pwd').val(),
                'vcode': $('.login-vcode').val() || null
            })
            .subscribe(
                data => {
                    if (data['errormsg'] === null) {
                        sessionStorage.setItem('user_id', data['result']['user_id']);
                        this.router.navigateByUrl('personal-center');
                    } else {
                        swal(data['errormsg']);
                    }
                    console.log(data);
                },
                err => {
                    console.log(err['error']);
                }
            );
    }
    
    ngOnInit() {
        // this.login();
        this.getCode();
    }
}
