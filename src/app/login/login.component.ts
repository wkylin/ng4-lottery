import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare let $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    captchaCode = '';
    api = 'http://47.52.143.236/api';
    constructor(private http: HttpClient) {
    }
    getCode() {
        this.http.get(`${this.api}/captcha/getCaptchaCode`, {responseType: 'text'}).subscribe(
        // this.http.post('https://wz.91yaowang.com/app/webservice/v2/member/getCaptcha?timer=' + new Date().getTime(), {}).subscribe(
            data => {
                this.captchaCode = 'data:image/png;base64,' + data['data'].captcha;
            },
            err => {
                console.log(err['error']['text']);
                this.captchaCode = err['error']['text'];
            }
        );
    }
    login() {
        this.http.post(`${this.api}/Users/login`, {
                'username': $('.login-name').val(),
                'password': $('.login-pwd').val(),
                'vcode': $('.login-vcode').val()
            }, {
                headers: new HttpHeaders().set('HTTP_USER_AGENT', 'other'),
            })
            .subscribe(
                data => {
                    console.log(data);
                },
                err => {
                    console.log(err['error']);
                }
            );
    }
    ngOnInit() {
        // this.login();
        // this.getCode();
    }
}
