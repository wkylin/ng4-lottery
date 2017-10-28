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
    constructor(private http: HttpClient, private router: Router) {
    }
    
    getCode() {
        this.http.post(`api/captcha/getCaptchaCode`, {}, {responseType: 'text'}).subscribe(
            data => {
                this.captchaCode = 'data:image/png;base64,' + JSON.parse(data).result.data;
            },
            err => {
                console.log(JSON.parse(err).error.text);
            }
        );
    }
    
    login() {
        this.http.post(`/api/Users/login`, {
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
                        swal({
                            title: data['errormsg'],
                            confirmButtonText: '确定'
                        });
                    }
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
